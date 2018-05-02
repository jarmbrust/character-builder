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

export default function(state = initialState, action) {
	switch (action.type) {
		case MODIFY_ABILITY: 
			return '';
		case MODIFY_COST: 
			return '';
		case POINT_TOTAL: 
			return '';
		default:
			return state;
	}
}