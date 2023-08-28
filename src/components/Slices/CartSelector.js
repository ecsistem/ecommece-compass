
export const selectCartTotalItems = (state) => {
    return state.cart.items.reduce((total, item) => total + item.amount, 0);
  };