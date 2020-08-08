import React, { createContext, useState, useEffect } from 'react';
import Loader from '../Components/Misc/Loader';
import Error from '../Components/Misc/Error';

export const UsersContext = createContext([0]);
const url = 'https://randomuser.me/api/?results=50';

const UsersProvider = (props) => {

    const [error, setError] = useState(null);
    const [isLoaded, usersIsLoaded] = useState(false);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then((json) => {
                usersIsLoaded(true);
                setUsers(json.results);
            },
                (error) => {
                    usersIsLoaded(true);
                    setError(error);
                }
            )
    }, []);

    if (error) {
        return (
            <div>
                <Error error={error.message} />
            </div>
        )
    }
    else if (!isLoaded) {
        return (
            <div>
                <Loader />
            </div>
        )
    }
    else {
        return (
            <UsersContext.Provider value={users}>
                {props.children}
            </UsersContext.Provider>
        )
    }

}

export default UsersProvider;

