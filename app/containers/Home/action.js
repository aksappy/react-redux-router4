import {get} from '../../utils/api';

export const INIT = "INIT";
export const LOG = "LOG";

export function initFunction() {
    return {type: INIT}
}

export function log(msg) {
    return {type: LOG, msg}
}

export function callApiSample() {
    console.log("Log the instance");
    return (dispatch) => {
        return get('greeting').then(res => {
            console.log(res)
            dispatch(log(res))
        });
    };
}