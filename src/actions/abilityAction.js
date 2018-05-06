import { MODIFY_ABILITY, MODIFY_COST, POINT_TOTAL } from './types'

export const modifyAbility = (totalpoints) => dispatch => ({
	type: POINT_TOTAL,
	payload: totalpoints
});
