import React, {Component} from "react";
import {connect} from "react-redux";


class List extends Component {
    renderData() {
        return <ul>
                    {this.props.stuffs.map((name, i) => <li key={i}>{name}</li>)}
                </ul>
        ;
    }


    render() {
        return (
            <div className="">
                {this.props.stuffs.length > 0 ?
                    this.renderData()
                    :
                    <div className="">
                        No Data
                    </div>
                }
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        stuffs: state.stuff
    };
}

function mapDispatchToProps(dispatch) {
    return {
        // stuffActions: bindActionCreators(stuffActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List);