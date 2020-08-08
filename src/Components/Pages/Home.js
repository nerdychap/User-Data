import React, { useEffect } from 'react';
import UsersList from '../Users/UsersList';
import styled from 'styled-components';

const HomeStyle = styled.section`
    text-align: center;
`;
const UsersHeading = styled.h1`
    text-transform: uppercase;
`;

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

