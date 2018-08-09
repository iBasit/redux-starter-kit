import {PICKUP_VISIBLE, PICKUP_DATE_CHANGE, PICKUP_TIME_CHANGE} from './../reducers/pickupDateTimeReducer';


export const pickupDateChange = (date) => {
    return {
        type: PICKUP_DATE_CHANGE,
        date: date
    };
};

export const pickupTimeChange = (time) => {
    return {
        type: PICKUP_TIME_CHANGE,
        time: time
    };
};

export const dateTimeShow = (event) => {
    return {
        type: PICKUP_VISIBLE,
        dateTimeButton: event.currentTarget
    };
};

export const dateTimeHide = () => {
    return {
        type: PICKUP_VISIBLE,
        dateTimeButton: null
    };
};
