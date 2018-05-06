import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/abilityReducer';

const initialState = {
    abilities: {
		str: 8,
		dex: 8,
		con: 8,
		int: 8,
		wis: 8,
		chr: 8,
	},
	cost: {
		8: 0,
		9: 1,
		10: 2,
		11: 3,
		12: 4,
		13: 5,
		14: 7,
		15: 9
	},  
	totalPoints: 27
};

const middleware = [thunk];

const store = createStore(
	rootReducer, 
	initialState,
	compose(
		applyMiddleware(...middleware),
		window.__REXUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

export default store;