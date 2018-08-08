import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {increment, decrement} from "../actions/counterAction"

class Counter extends Component {

    render() {
        const {myNumber, increment, decrement} = this.props;

        return (
            <div>
                <div>Counter: {myNumber}</div>
                <div>
                    <button type="button" onClick={e => {decrement(myNumber - 1)}}>-1</button>
                    <button type="button" onClick={e => {increment(myNumber + 1)}}>+1</button>
                </div>
            </div>
        );
    }
}

const mapsStateToProps = state => {
    return {
        myNumber: state.counter.number
    };
}

const mapDispatchToProps = dispatch => bindActionCreators({
    increment,
    decrement
}, dispatch);

export default connect(
    mapsStateToProps,
    mapDispatchToProps
)(Counter);