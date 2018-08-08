import {COUNTER_UPDATE} from './../reducers/counterReducer';

export function increment(newValue) {
    return {
        type: COUNTER_UPDATE,
        number: newValue
    }
}

export function decrement(newValue) {
    return {
        type: COUNTER_UPDATE,
        number: newValue
    }
}
