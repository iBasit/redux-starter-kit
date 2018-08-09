import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';
import {DateFormatInput, TimeFormatInput} from 'material-ui-next-pickers'
import {dateTimeHide, dateTimeShow, pickupDateChange, pickupTimeChange} from "../actions/pickupDateTimeAction";


const PickupDateTime = ({date, time, pickupTimeChange, pickupDateChange, dateTimeButton, dateTimeShow, dateTimeHide}) => (
    <div>
        <Button variant="contained" color={date ? 'primary' : 'default'} onClick={dateTimeShow}>
            {/*{date ? date.getFullYear() : 'Date & Time'}*/}
            {displayDateTimeLabel(date, time)}
        </Button>
        <Popover
            open={Boolean(dateTimeButton)}
            anchorEl={dateTimeButton}
            onClose={dateTimeHide}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
        >
            <div style={{margin: '12px'}}>
                <DateFormatInput name='date-input' value={date} onChange={pickupDateChange}/>
                <TimeFormatInput name='time-input' value={time} onChange={pickupTimeChange}/>

            </div>
        </Popover>
    </div>
);

const displayDateTimeLabel = (date, time) => {

    if (!date) {
        return 'Date & Time';
    }

    let monthNamesFull = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let monthNamesShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

    // 2 Jul 3:30pm
    let stringLabel = date.getDay()+' '+monthNamesShort[date.getMonth()]+' ';

    if (time) {

        let ampm = 'am';
        let hour = !time.getHours() ? '00' : time.getHours();

        if (time.getHours() >= 12) {
            ampm = 'pm';
            hour = (time.getHours() === 12) ? time.getHours() : time.getHours() - 12;
        }

        let minutes = (!time.getMinutes()) ? '00' : time.getMinutes();
        stringLabel += hour+':'+minutes+' '+ampm;
    }

    return stringLabel;
};

const mapStateToProps = (state, props) => {
    return {
        dateTimeButton: state.pickupDateTime.dateTimeButton,
        date: state.pickupDateTime.date,
        time: state.pickupDateTime.time
    };
};

const mapDispatchToProps = dispatch => bindActionCreators({
    dateTimeShow,
    dateTimeHide,
    pickupDateChange,
    pickupTimeChange
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PickupDateTime);