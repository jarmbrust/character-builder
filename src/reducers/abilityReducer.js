import { MODIFY_ABILITY, MODIFY_COST, POINT_TOTAL } from '../actions/types'

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

export default function reducer(state = initialState, action) {
	console.log('action=', action);
	switch (action.type) {
		case MODIFY_ABILITY: 
			return '';
		case MODIFY_COST: 
			return '';
		case POINT_TOTAL: 
			return modifyPoints(state, action);
		default:
			return state;
	}
}

function modifyPoints(state, action) {
	console.log('modifypoints')
	return state.map(points => points + action.payload);
}

