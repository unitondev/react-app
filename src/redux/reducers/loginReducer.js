import { handleActions } from "redux-actions";
import { changeEmail, changePassword } from "../actions";

const initialLoginState = {
    email: "",
    password: "",
};

export const loginReducer = handleActions(
    {
        [changeEmail]: (state, action) => ({
            ...state,
            email: action.payload,
        }),

        [changePassword]: (state, action) => ({
            ...state,
            password: action.payload,
        }),
    },
    initialLoginState
);
