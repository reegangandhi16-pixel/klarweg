const PRODUCTS = Object.freeze({
  A1: {
    id: "A1",
    name: "Klarweg A1",
    amountPaise: 199900
  },

  A2: {
    id: "A2",
    name: "Klarweg A2",
    amountPaise: 299900
  },

  B1: {
    id: "B1",
    name: "Klarweg B1",
    amountPaise: 399900
  },

  B2: {
    id: "B2",
    name: "Klarweg B2",
    amountPaise: 499900
  },

  C1: {
    id: "C1",
    name: "Klarweg C1",
    amountPaise: 799900
  },

  C2: {
    id: "C2",
    name: "Klarweg C2",
    amountPaise: 899900
  },

  LIFETIME: {
    id: "LIFETIME",
    name: "Klarweg A1–C2 Lifetime",
    amountPaise: 499900
  }
});

export function getProduct(productId) {
  if (typeof productId !== "string") {
    return null;
  }

  return PRODUCTS[productId.trim().toUpperCase()] || null;
}

export function getProducts() {
  return Object.values(PRODUCTS);
}