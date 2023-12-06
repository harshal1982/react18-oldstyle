const initialState = []

export default function todos(state = initialState, action) {
	switch (action.type) {
		case 'set':
		  return {
			todos: action.payload,
		  };
		default:
		  return state;
	  }
}