export const INIT = "INIT";
export const LOG = "LOG";

export function initFunction() {
    return {type: INIT}
}

export function log(msg) {
    return {type: LOG, msg}
}