import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      str: 8,
      dex: 8,
      con: 8,
      int: 8,
      wis: 8,
      chr: 8,
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

    this.pointCost = this.pointCost.bind(this);
    this.modifyTotal = this.modifyTotal.bind(this);
  }

  modifyTotal(points) {
    const newTotal = this.state.totalPoints + points;
    console.log(newTotal);
    this.setState({
      totalPoints: newTotal
    });
  }

  pointCost(ability) {
    const cost = this.state.cost[ability];
    //this.modifyTotal(cost);
    return cost;
  }

  render() {

		const {
			str,
			dex,
      con,
			int,
			wis,
      chr
		} = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Character Builder</h1>
        </header>
        <div className="App-intro">
          <AbilityScore
            ability="Strength"
            val={str}
						cost={this.pointCost(str)}
          >

          </AbilityScore>
					<AbilityScore
            ability="Dexterity"
            val={dex}
            cost={this.pointCost(dex)}
          />
					<AbilityScore
            ability="Constitution"
            val={con}
            cost={this.pointCost(con)}
          />
					<AbilityScore
            ability="Intelligence"
            val={int}
            cost={this.pointCost(int)}
          />
					<AbilityScore
            ability="Wisdom"
            val={wis}
            cost={this.pointCost(wis)}
          />
					<AbilityScore
            ability="Charisma"
            val={chr}
            cost={this.pointCost(chr)}
          />
        </div>
      </div>
    );
  }
}

const AbilityScore = ({ ability, val, cost }) => {
  const bonus = Math.floor((val - 10)/2);
  return (
    <div className="ability-score">
      <span>{ability}</span>
      <span>{val}</span>
      <span>{bonus}</span>
			<span>{cost}</span>
    </div>
  )
};

export default App;
