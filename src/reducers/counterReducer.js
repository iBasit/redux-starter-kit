export const COUNTER_UPDATE = 'COUNTER_UPDATE';


let initialState = {
    number: 0
};


export default function counter(state = initialState, action) {

    switch (action.type) {
        case COUNTER_UPDATE:
            return {
                ...state,
                ...action
            };
        default:
            return state;
    }
}
