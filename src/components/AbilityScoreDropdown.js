import React from 'react';
import { ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap';

const AbilityScoreDropdown = ({ val, ability, value }) => {

	console.log('val = ', val);
	return (
	<ButtonToolbar>
		<DropdownButton title="Modify Ability" id="dropdown-size-medium" onSelect={function(value){return value.eventKey}} >
			{ Object.entries(val).map((stat, index) => {
				return <MenuItem
					key={index}
					eventKey={stat[1]}>{stat[0]}
				</MenuItem>
			})
			}
		</DropdownButton>
	</ButtonToolbar>
)};

export default AbilityScoreDropdown;