// HandleCreate.js
import React, { useContext } from 'react';
import CreateUser from './CreateUser';
import { UserContext } from './UserContext'; // Ensure the correct path

function HandleCreate() {
    const { state, dispatch } = useContext(UserContext);

    function addUser(newUser) {
        console.log(`user add ${newUser.id} `);
        dispatch({ type: 'ADD_USER', payload: newUser });
    }

    return (
        <div>
            <CreateUser addUser={addUser} />

        </div>
    );
}

export default HandleCreate;
