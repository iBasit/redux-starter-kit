import {combineReducers} from 'redux';
import stuff from './stuffReducer';
import counter from './counterReducer';

const rootReducer = combineReducers({
    stuff,
    counter
});

export default rootReducer;