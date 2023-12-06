// import { createStore } from 'redux';
// import rotateReducer from '../../app/reducers/rotateReducer';
// import rootReducer from '../../app/reducers';

// function configureStore(state = { rotating: true }) {
//   return createStore(rootReducer(), state);
// }

// export default configureStore;

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
//import rotate from "../../app/reducers/rotate";
import rootReducer from '../../app/reducers';

export default req => {
	const axiosInstance = axios.create({
		baseURL: '/',
		headers: { cookie:  '' }
	});

	const store = createStore(
		rootReducer(),
		{},
		applyMiddleware(thunk.withExtraArgument(axiosInstance))
	);

	return store;
};
