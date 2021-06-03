import * as actionTypes from "../actions";

const initialState = {
  results: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        // don't use push() here as it change the original array
        results: state.results.concat({ id: new Date(), value: action.result }),
      };
    case actionTypes.DELETE_RESULT:
      //// ONE Way of doing
      // const id = 2;
      // const newArray = [...state.results];
      // newArray.slice(id, 1);
      const updatedArray = state.results.filter(
        (result) => result.id !== action.resultElId
      );
      return {
        ...state,
        results: updatedArray,
      };
  }

  return state;
};

export default reducer;
