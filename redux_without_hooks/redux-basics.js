const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
  counter: 0,
};

// Reducer
const rootReducer = (state = initialState, action) => {
  if (action.type === "INC_COUNTER") {
    return {
      ...state,
      counter: state.counter + 1, // Always update store state immutably
    };
  }
  if (action.type === "ADD_COUNTER") {
    return {
      ...state,
      counter: state.counter + action.value, // Always update store state immutably
    };
  }
  return state;
};

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Subscription
// It will be executed whenever the state is updated (so whenever action reaches reducer)
store.subscribe(() => {
  console.log("[Subscription]", store.getState());
});

// Dispatching action
// we dispatch actions by accessing the store
// dispatch() takes arguments which is an Action
store.dispatch({ type: "INC_COUNTER" });
store.dispatch({ type: "ADD_COUNTER", value: 10 }); // 'value' variable can be of any name
console.log(store.getState());
