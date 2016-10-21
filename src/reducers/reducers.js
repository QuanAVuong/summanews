// import { ADD_ITEM, REMOVE_ITEM } from "../actions/actions.js";

const _defaultState = {
  output: {}
}

const reducer = (oldState = _defaultState, action) => {
  switch(action.type) {
  	// case ADD_ITEM: 
  	// 	return ({
  	// 		output: [...oldState.output, action.instance]
  	// 	});

    default:
      return oldState;
  }
}

export default reducer;
