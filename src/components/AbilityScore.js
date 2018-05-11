import React from 'react';

const AbilityScore = ({ ability, val, cost }) => {
	const bonus = Math.floor((val - 10)/2);
	const abilityCost = cost[val];
	return (
		<li className="ability-score">
			<span>{ability}</span>
			<span>{val}</span>
			<span>{bonus}</span>
			<span>{abilityCost}</span>
		</li>
	)
};

export default AbilityScore;
