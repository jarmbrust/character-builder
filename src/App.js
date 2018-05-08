import React, { Component } from 'react';
import { ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap';
import './App.css';
import { Provider, connect } from 'react-redux';
import store from './store';
import { modifyAbility } from './actions/abilityAction'

class App extends Component {
  constructor(props) {
    super(props);

		this.modifyTotal = this.modifyTotal.bind(this);
		this.myCallback = this.myCallback.bind(this);
  }

	componentWillMount() {
		this.props.modifyAbility();
	}

  modifyTotal(points) {
    const newTotal = this.state.totalPoints + points;
    console.log(newTotal);
    this.setState({
      totalPoints: newTotal
    });
  }

  render() {

		const {
			abilities,
			cost
		} = this.state;

    return (
			<Provider store={store}>
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
			</Provider>
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
						<AbilityScoreDropdown 
							ability={item[0]}
							val={cost}
							onSelect={ console.log('test') }
						/>
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
