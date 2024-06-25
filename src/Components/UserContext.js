// UserContext.js
import React, { createContext, useReducer, dispatch } from 'react';
import UserData from "./UserData";


const UserContext = createContext();

const initialState = {

    userData: UserData,
    selectedUser: {},

};

const userReducer = (state, action) => {

    switch (action.type) {
        case 'ADD_USER':
            return { ...state, userData: [...state.userData, action.payload] };;
        case 'UPDATE_USER':
            return {
                ...state,
                userData: state.userData.map(user =>
                    user.id === action.payload.id ? { ...user, ...action.payload } : user
                ),
            };
        case 'REMOVE_USER':
            return { ...state, userData: state.userData.filter(user => user.name !== action.payload) };

        case 'UPDATE_SELECTED_USER':
            return { ...state, selectedUser: action.payload };

            case 'VIEW_MORE':
                return { ...state, selectedUser: action.payload };
        default:
            return state;
    }
};






const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, initialState);

    return (
        <UserContext.Provider value={{ state, dispatch }}>
            {children}
        </UserContext.Provider>
    );


};

export { UserContext, UserProvider };
