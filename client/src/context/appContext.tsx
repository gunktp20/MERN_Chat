import React, { ReactNode, useContext, useReducer } from "react";
import reducer from "./reducer"
import { AppState } from "./reducer";
import axios from "axios";

type AppContextProps = {
    children?: ReactNode
}

const user = localStorage.getItem("user");
const accessToken = localStorage.getItem("token");

const initialState: AppState = {
    user: user ? JSON.parse(user) : null,
};

const URL = import.meta.env.VITE_BASE_URL;

const AppContext = React.createContext<typeof initialState | null>(initialState);

const AppProvider: React.FC<AppContextProps> = ({ children }: AppContextProps): ReactNode => {
    const [state, dispatch] = useReducer(reducer, initialState) 

    const setupUser = async ({ endPoint, userInfo }: ISetupUser) => {
        try {
            const { data } = await axios.post(
                `${URL}/api/v1/auth/${endPoint}`,
                userInfo,
            );
            const { firstname, lastname, email } = data;
            console.log(firstname, lastname, email) 
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <AppContext.Provider value={{ ...state, setupUser }}>
            {children}
        </AppContext.Provider>
    )

};

const useAppContext = () => {
    return useContext(AppContext);
};

export { AppProvider, useAppContext, initialState };