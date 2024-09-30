export const addToCart = async (variantId, quantity) => {
  const response = await fetch(window.Shopify.routes.root + "cart/add.js", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      items: [
        {
          id: variantId,
          quantity,
        },
      ],
    }),
  });

  return response.json();
};
