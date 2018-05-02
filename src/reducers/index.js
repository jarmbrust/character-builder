import { combineReducers } from 'redux';
import abilityReducer from './abilityReducer';

export default combineReducers({
    abilities: abilityReducer
});