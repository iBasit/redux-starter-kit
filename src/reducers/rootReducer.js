import {combineReducers} from 'redux';
import stuff from './stuffReducer';
import pickupDateTime from './pickupDateTimeReducer';

const rootReducer = combineReducers({
    stuff,
    pickupDateTime
});

export default rootReducer;