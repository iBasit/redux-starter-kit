import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {increment, decrement} from "../actions/counterAction"

class Counter extends Component {

    render() {
        return (
            <div>
                <div>Counter: {this.props.myNumber}</div>
                <div>
                    <button type="button" onClick={e => {this.props.decrement(this.props.myNumber - 1)}}>-1</button>
                    <button type="button" onClick={e => {this.props.increment(this.props.myNumber + 1)}}>+1</button>
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