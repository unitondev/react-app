import { HANDLE_CHANGE_EMAIL, HANDLE_CHANGE_PASSWORD } from "./types";

export function changeEmail(email) {
    return {
        type: HANDLE_CHANGE_EMAIL,
        payload: email,
    };
}

export function changePassword(password) {
    return {
        type: HANDLE_CHANGE_PASSWORD,
        payload: password,
    };
}
