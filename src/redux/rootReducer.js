import { combineReducers } from "redux";
import { HANDLE_CHANGE_EMAIL, HANDLE_CHANGE_PASSWORD } from "./types";

const initialLoginState = {
    email: "",
    password: "",
};

function loginReducer(state = initialLoginState, action) {
    switch (action.type) {
        case HANDLE_CHANGE_EMAIL:
            return { ...state, email: action.payload };
        case HANDLE_CHANGE_PASSWORD:
            return { ...state, password: action.payload };
        default:
            return state;
    }
}

export const rootReducer = combineReducers({
    login: loginReducer,
});
