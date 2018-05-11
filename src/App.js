import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import AbilityList from './components/AbilityList'
import reducer from './reducers/abilityReducer';

class App extends Component {
  constructor(props) {
    super(props);
		// this.state = {
		// 	abilities: {
		// 		str: 8,
		// 		dex: 8,
		// 		con: 8,
		// 		int: 8,
		// 		wis: 8,
		// 		chr: 8,
		// 	},
		// 	cost: {
		// 		8: 0,
		// 		9: 1,
		// 		10: 2,
		// 		11: 3,
		// 		12: 4,
		// 		13: 5,
		// 		14: 7,
		// 		15: 9
		// 	},
		// 	totalPoints: 27
		// };
		this.modifyTotal = this.modifyTotal.bind(this);
	//	this.myCallback = this.myCallback.bind(this);
  }

	componentWillMount() {
		//this.props.modifyAbility();
	}

  modifyTotal(points) {
  	console.log('wut?');
    // const newTotal = this.state.totalPoints + points;
    // console.log(newTotal);
    // this.setState({
    //   totalPoints: newTotal
    // });
  }

  render() {

		console.log(store.getState());

	// 	const {
	// 		//abilities,
	// 		cost,
	// //		totalPoints
	// 	} = store.getState();

		let abilities = store.getState()[0].abilities;
		let totalPoints = store.getState()[0].totalPoints;
		let cost = store.getState()[0].cost;

		console.log(abilities, cost, totalPoints);

		let test = reducer(totalPoints, store);

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
					{ test }
				</div>
			</Provider>
    );
  }
}






export default App;
