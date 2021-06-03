import * as actionTypes from '../actions';

const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      // DON'T do the below 3 lines because it will deep clone the object and by so it will change the original object
      /* const newState = state;  
      newState.counter = state.counter + 1;
      return newState */

      // Right way: Shallow copying of object
      const newState = Object.assign({}, state);
      newState.counter = state.counter + 1;
      return newState;

    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.val,
      };
    case actionTypes.SUBTRACT:
      return {
        ...state,
        counter: state.counter - action.val,
      };
  }

  return state;
};

export default reducer;
