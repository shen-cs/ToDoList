const types = {
	ADD_ITEM: 'ADD',
	REMOVE_ITEM: 'REMOVE',
	TOGGLE_ITEM_COMPLETED: 'TOGGLE',
	REMOVE_COMLETED: 'REMOVE_COMLETED',
}

export const actionCreators = {
	add: (item) => {
		return {type: types.ADD_ITEM, payload: item};
	},
	remove: (index) => {
		return {type: types.REMOVE_ITEM, payload: index};
	},
	toggle: (index) => {
		return {type: types.TOGGLE_ITEM_COMPLETED, payload: index};
	},
	removeCompleted: (toRemove) => {
		return {type: types.REMOVE_COMLETED, payload: toRemove};
	}
}

const initialState = {
  // items: [{text: 'lala', completed:false} , {text: 'woohoo', completed: false}],
  items: [],
}


export const reducer = (state = initialState, action) => {
  const {type, payload} = action;
  const {items} = state;
  switch(type) {
  	case types.ADD_ITEM: {
  		return {...state, items: [payload, ...items]};
  	}
    case types.REMOVE_ITEM: {
    	return {...state, items: items.filter((item, i) => i !== payload)};
    }
    case types.TOGGLE_ITEM_COMPLETED: {
    	// new completed must be new object
      var newItems = items.slice();
      newItems[payload].completed = !newItems[payload].completed;
    	return {...state, items: newItems};
    }
    case types.REMOVE_COMLETED: {
    	filterFunc = (item, i) => {
    		return payload.indexOf(i) === -1;
    	}
    	return {...state, items: items.filter(filterFunc)};
    }
    default: {
      return state;
    }
  }
}
