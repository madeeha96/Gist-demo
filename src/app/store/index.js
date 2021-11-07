import store from "./store";

const initialStoreState = store.getState();

export const resetStores = () => {
  store.setState(initialStoreState);
};

export default store;
