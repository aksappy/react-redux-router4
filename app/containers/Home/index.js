import React from 'react';
import {connect} from 'react-redux';
import {log, callApiSample} from './action';
class Home extends React.Component {
    componentDidMount() {
        //get('greeting');
        this.props.call();
    }
    render() {
        return (
            <div>This is from the home page {JSON.stringify(this.props.msg)}
                <button onClick={() => this.props.call()}>Click here</button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        log: (msg) => {
            dispatch(log(msg))
        },
        call : () => {
            dispatch(callApiSample())
        }
    }
}

function mapStateToProps(state) {
    return {msg: state.home.msg}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);