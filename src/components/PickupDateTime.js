import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import {DateFormatInput, TimeFormatInput} from 'material-ui-next-pickers'
import {pickupDateTimeHide, pickupDateTimeShow, pickupDateChange, pickupTimeChange} from "../actions/pickupDateTimeAction";

import {createMuiTheme, MuiThemeProvider} from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#5cb85c',
            contrastText: '#ffffff'
        },
        secondary: {
            main: '#000000',
            contrastText: '#ffffff'
        },
    }
});

const PickupDateTime = ({date, time, pickupTimeChange, pickupDateChange, dateTimeButton, pickupDateTimeShow, pickupDateTimeHide}) => (
    <MuiThemeProvider theme={theme}>
        <Button variant={date ? 'contained' : 'outlined'} color={date ? 'primary' : 'default'} onClick={pickupDateTimeShow}>
            {/*{date ? date.getFullYear() : 'Date & Time'}*/}
            {displayDateTimeLabel(date, time)}
        </Button>
        <Popover
            open={Boolean(dateTimeButton)}
            anchorEl={dateTimeButton}
            onClose={pickupDateTimeHide}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
        >
            <div style={{margin: '12px', minHeight: '150px'}}>
                <br/>
                <DateFormatInput name='date-input' value={date} onChange={pickupDateChange}/>
                <br/>
                <br/>
                <TimeFormatInput name='time-input' value={time} onChange={pickupTimeChange}/>

            </div>
        </Popover>
    </MuiThemeProvider>
);

const displayDateTimeLabel = (date, time) => {

    if (!date) {
        return 'Date & Time';
    }

    // let monthNamesFull = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
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
    pickupDateTimeShow,
    pickupDateTimeHide,
    pickupDateChange,
    pickupTimeChange
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PickupDateTime);