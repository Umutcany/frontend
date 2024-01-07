import { reactive, readonly } from "vue";

const state = reactive({
  basket: JSON.parse(localStorage.getItem("basket") || "[]"),
});

export const EventBus = readonly({
  state,
  updateBasket(newBasket) {
    state.basket = newBasket;
    localStorage.setItem("basket", JSON.stringify(newBasket));
  },
});
