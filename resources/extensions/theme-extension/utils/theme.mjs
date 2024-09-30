const cartDrawerSelector = "cart-drawer";

export const openCartDrawer = () => {
  const cartDrawer = document.querySelector(cartDrawerSelector);
  if (cartDrawer) {
    cartDrawer.update?.();
    cartDrawer.purchaseHandler?.();
    cartDrawer.open?.();
  }
};
