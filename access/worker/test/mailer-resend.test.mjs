/* Resend Free transport on Workers Free. No network or real credentials. */
import test from 'node:test';
import assert from 'node:assert/strict';
import { mailConfigured, sendMail } from '../src/mailer.js';

const base = { MAIL_PROVIDER: 'resend', RESEND_API_KEY: 're_TEST_ONLY', MAIL_FROM: 'no-reply@klarweg.in' };
const message = { to: 'student@example.com', subject: 'Test subject', text: 'Reset link', html: '<p>Reset link</p>' };

test('Resend stays disabled until a server-only API secret is configured', async () => {
  assert.equal(mailConfigured({ MAIL_PROVIDER: 'resend' }), false);
  assert.equal(mailConfigured({ MAIL_PROVIDER: 'resend', RESEND_API_KEY: '' }), false);
  assert.equal((await sendMail({ MAIL_PROVIDER: 'resend' }, message)).code, 'NOT_CONFIGURED');
  assert.equal(mailConfigured(base), true);
});

test('Resend sends through HTTPS with auth header and verified-domain sender', async () => {
  const original = globalThis.fetch;
  let call;
  try {
    globalThis.fetch = async (url, options) => {
      call = { url, options };
      return new Response(JSON.stringify({ id: 'email_123' }), { status: 200 });
    };
    assert.deepEqual(await sendMail(base, message), { ok: true });
    assert.equal(call.url, 'https://api.resend.com/emails');
    assert.equal(call.options.method, 'POST');
    assert.equal(call.options.headers.Authorization, 'Bearer re_TEST_ONLY');
    const payload = JSON.parse(call.options.body);
    assert.equal(payload.from, 'Klarweg <no-reply@klarweg.in>');
    assert.deepEqual(payload.to, ['student@example.com']);
    assert.equal(payload.text, 'Reset link');
    assert.equal(payload.html, '<p>Reset link</p>');
  } finally {
    globalThis.fetch = original;
  }
});

test('Resend respects a verified sender subdomain and does not trust malformed from values', async () => {
  const original = globalThis.fetch;
  const sent = [];
  try {
    globalThis.fetch = async (_url, options) => {
      sent.push(JSON.parse(options.body));
      return new Response('{}', { status: 200 });
    };
    await sendMail({ ...base, MAIL_FROM: 'no-reply@send.klarweg.in' }, message);
    await sendMail({ ...base, MAIL_FROM: 'invalid sender <injection>' }, message);
    assert.equal(sent[0].from, 'Klarweg <no-reply@send.klarweg.in>');
    assert.equal(sent[1].from, 'Klarweg <no-reply@klarweg.in>');
  } finally {
    globalThis.fetch = original;
  }
});

test('Resend HTTP rejection is a send failure and does not log private response data', async () => {
  const originalFetch = globalThis.fetch, originalLog = console.log;
  const logs = [];
  try {
    globalThis.fetch = async () => new Response('private error with student@example.com', { status: 429 });
    console.log = (msg) => logs.push(msg);
    assert.deepEqual(await sendMail(base, message), { ok: false, code: 'RESEND_HTTP_429' });
    assert.equal(logs.length, 1);
    assert.doesNotMatch(logs[0], /student@example.com|re_TEST_ONLY|Reset link|private error/);
  } finally {
    globalThis.fetch = originalFetch;
    console.log = originalLog;
  }
});

test('Cloudflare binding remains supported as an explicit alternative', async () => {
  const sent = [];
  const env = { MAIL_PROVIDER: 'cloudflare', EMAIL: { async send(msg) { sent.push(msg); } } };
  assert.equal(mailConfigured(env), true);
  assert.deepEqual(await sendMail(env, message), { ok: true });
  assert.equal(sent[0].to, 'student@example.com');
});
