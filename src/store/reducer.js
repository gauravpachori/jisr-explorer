import { actions } from "./actions";

import { Files } from "../utils/initState";

export const initialState = {
    files: Files,
    currentPath: [Files],
};

export const filesReducer = (state = { ...initialState }, action) => {
    switch (action.type) {
        case actions.SET_FILE:
            return {
                ...state,
                files: action.data,
            };
        case actions.SET_CURRENT_PATH:
            return {
                ...state,
                currentPath: action.data,
            };
        default:
            return state;
    }
};
