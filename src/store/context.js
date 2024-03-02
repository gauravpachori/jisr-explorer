import { createContext, useReducer } from "react";

import { initialState, filesReducer } from "./reducer";
import { actions } from "./actions";

export const FilesContext = createContext();

const FilesProvider = ({ children }) => {
    const [state, dispatch] = useReducer(filesReducer, initialState);

    const { files, currentPath } = state;

    const value = {
        files,
        currentPath,
        setFiles: (data) => {
            dispatch({ type: actions.SET_FILE, data });
        },
        setCurrentPath: (data) => {
            dispatch({ type: actions.SET_CURRENT_PATH, data });
        },
    };

    return (
        <FilesContext.Provider value={value}>{children}</FilesContext.Provider>
    );
};

export default FilesProvider;
