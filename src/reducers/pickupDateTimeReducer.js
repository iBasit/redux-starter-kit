export const PICKUP_VISIBLE = 'PICKUP_VISIBLE';
export const PICKUP_DATE_CHANGE = 'PICKUP_DATE_CHANGE';
export const PICKUP_TIME_CHANGE = 'PICKUP_TIME_CHANGE';

let initialState = {
    dateTimeButton: null,
    date: null,
    time: null
};

export default function pickupDateTime (state = initialState, action) {
    switch (action.type) {

        case PICKUP_VISIBLE:
            return {
                ...state,
                dateTimeButton: action.dateTimeButton
            };

        case PICKUP_DATE_CHANGE:
            return {
                ...state,
                date: action.date
            };

        case PICKUP_TIME_CHANGE:
            return {
                ...state,
                time: action.time
            };

        default:
            return state;

    }
}