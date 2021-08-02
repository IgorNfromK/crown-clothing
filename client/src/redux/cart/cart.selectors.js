import { createSelector } from "reselect";

const selectCard = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCard],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCard],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumalatedQuantity, cartItem) =>
      accumalatedQuantity + cartItem.quantity * cartItem.price,
    0
  )
);
