import { MODIFY_ABILITY, MODIFY_COST, POINT_TOTAL } from './types'

// export const modifyAbility = (totalpoints) => dispatch => ({
// 	type: POINT_TOTAL,
// 	payload: totalpoints
// });

export const modifyTotal = store.dispatch({
	type: 'POINT_TOTAL',
	todo: { payload: 5 },
});

