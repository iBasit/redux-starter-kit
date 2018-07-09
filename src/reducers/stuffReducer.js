export const FETCH_STUFF = 'FETCH_STUFF';
export const RECEIVE_STUFF = 'RECEIVE_STUFF';

let initialState = {
    stuff: ['List #1 - demo','List #2 - demo']
};

export default function stuff(state = initialState.stuff, action) {
    let newState;
    switch (action.type) {
        case FETCH_STUFF:
            console.log('FETCH_STUFF Action')
            return action;
        case RECEIVE_STUFF:
            newState = action.stuff;
            console.log('RECEIVE_STUFF Action')
            return newState;
        default:
            return state;
    }
}