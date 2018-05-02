import React, { Component } from 'react';
import { ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
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

    this.modifyTotal = this.modifyTotal.bind(this);
		this.myCallback = this.myCallback.bind(this);
  }
	//
	// incrementAbility(abilityScore) {
	// 	return abilityScore + 1;
	// }
	//
	// decrementAbility(abilityScore) {
	// 	return abilityScore - 1;
	// }

  modifyTotal(points) {
    const newTotal = this.state.totalPoints + points;
    console.log(newTotal);
    this.setState({
      totalPoints: newTotal
    });
  }

	myCallback = (dataFromChild) => {
		//somethign goes here for datafromchild
	};

  render() {

		const {
			abilities,
			cost
		} = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Character Builder</h1>
        </header>
        <div className="App-intro">
					<AbilityList
						abilities={abilities}
						cost={cost}
					/>
        </div>
      </div>
    );
  }
}

const AbilityList = ({ abilities, cost }) =>
		<ul className="ability-list">
			{console.log(abilities, cost)}
			{
				Object.entries(abilities).map((item, index) => {
					return <div key={index}>
						<AbilityScore
							ability={item[0]}
							val={item[1]}
							cost={cost}
						/>
						?
					</div>
				})
			}
		</ul>;

const AbilityScoreDropdown = ({ val, ability, value }) =>
	<ButtonToolbar>
		<DropdownButton title="Modify Ability" id="dropdown-size-medium" onSelect={function(value){return value.eventKey}} >
		{console.log(val, ability)}
		{ Object.entries(val).map((stat, index) => {
				return <MenuItem
					key={index}
					eventKey={stat[1]}>{stat[0]}
				</MenuItem>
		})
		}
		</DropdownButton>
	</ButtonToolbar>;

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

export default App;
