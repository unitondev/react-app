import { combineReducers } from "redux";
import { handleActions } from 'redux-actions';

const initialLoginState = {
    email: "",
    password: "",
};

const loginReducer = handleActions({
    HANDLE_CHANGE_EMAIL: (state, action) => ({
        ...state, email: action.payload
    }),

    HANDLE_CHANGE_PASSWORD: (state, action) => ({
        ...state, password: action.payload
    })
}, initialLoginState);

export const rootReducer = combineReducers({
    login: loginReducer,
});
