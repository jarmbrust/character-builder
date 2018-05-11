import React from 'react';
import AbilityScoreDropdown from './AbilityScoreDropdown';
import AbilityScore from './AbilityScore';
import store from '../store';

const AbilityList = ({ abilities, cost }) => (
	<ul className="ability-list">
		{console.log('==>',abilities, cost)}
		{
			Object.entries(abilities).map((item, index) => {
				return <div key={index}>
					<AbilityScore
						ability={item[0]}
						val={item[1]}
						cost={cost}
					/>
					<AbilityScoreDropdown
						ability={item[0]}
						val={cost}
						onSelect={
							() => console.log('test')
						}
					/>
				</div>
			})
		}
	</ul>
);

export default AbilityList;