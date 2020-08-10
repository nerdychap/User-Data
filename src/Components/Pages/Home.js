import React, { useEffect } from 'react';
import UsersList from '../Users/UsersList';
import HomeStyle, { UsersHeading } from '../../styles/HomeStyles';

function Home() {
    useEffect(() => {
        document.title = "Homepage";
    });
    return (
        <HomeStyle>
            <UsersHeading>Users</UsersHeading>
            <UsersList />
        </HomeStyle>
    )
}

export default Home;

