const redux = require("redux");

const INITIAL_VALUE = {
  counter: 0,
};
//Reducer
const reducer = (store = INITIAL_VALUE, action) => {
  let newStore = store;
  if (action.type === "INCREMENT") {
    newStore = { counter: store.counter + 1 };
  } else if (action.type === "ADDITION") {
    newStore = {counter: store.counter + action.payload.number}
  }

  return newStore;
};
//Create store
const store = redux.createStore(reducer);
//Subscribe
const subscriber = () => {
  const state = store.getState();
  console.log(state);
};
store.subscribe(subscriber);
//Action
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "ADDITION", payload: { number: 5 } });
