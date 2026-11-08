// Local arithmetic only: no network, storage or proficiency prediction.
export function planStudy(totalHours, weeklyHours) {
  if (!Number.isFinite(totalHours) || totalHours <= 0 || totalHours > 10000 ||
      !Number.isFinite(weeklyHours) || weeklyHours <= 0 || weeklyHours > 168) return null;
  return { hours: totalHours, weekly: weeklyHours, weeks: Math.ceil(totalHours / weeklyHours) };
}
if (typeof document !== 'undefined') {
  const form = document.querySelector('#study-budget');
  if (form) {
    const result = document.querySelector('#study-result');
    const update = () => {
      const plan = planStudy(Number(form.elements.total.value), Number(form.elements.weekly.value));
      result.textContent = plan
        ? `${plan.hours} planned hours at ${plan.weekly} hours per week takes about ${plan.weeks} weeks, rounded up. This is a timetable calculation, not a prediction of reaching a German level.`
        : 'Enter a total above 0 and up to 10,000 hours, and weekly hours above 0 and up to 168.';
    };
    form.addEventListener('submit', event => { event.preventDefault(); update(); });
  }
}
