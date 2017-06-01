import React from 'react';
import {connect} from 'react-redux';
import {log} from './action';

class Home extends React.Component {
    componentDidMount() {
 
    }
    render() {
        return (
            <div>This is from the home page {this.props.msg}</div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        log: (msg) => {
            dispatch(log(msg))
        }
    }
}

function mapStateToProps(state) {
    return {msg: state.home.msg}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);