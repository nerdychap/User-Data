import React, { useContext } from 'react';
import { UsersContext } from '../../Context/UsersProvider';
import { ListItem } from '../Misc/ListItem';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
        from{
            opacity: 0;

        }
        to{
            opacity: 1;
        }
`;
const UserStyle = styled.section`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 20px 15px;
    max-width: 1000px;
    margin: auto;
    padding: 1%;
    margin-bottom: 2%;

    @media screen and (min-width: 340px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (min-width: 600px){
        grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (min-width: 1024px){
        grid-template-columns: repeat(4, 1fr);
    }
    @media screen and (min-width: 1200px){
        grid-template-columns: repeat(5, 1fr);
    }
    
`;
const ItemWrapper = styled.div`
    border: 1px solid black;
    height: 100%;
    transition: box-shadow .3s;
    animation: ${fadeIn} .5s;
    &:hover{
        box-shadow: grey 0px 0px 15px;
    }
    a{
        text-decoration: none;
    }
`;

const UsersList = () => {
    const users = useContext(UsersContext);
    const usersItems = users.map((item, index) => {
        return (
            <ItemWrapper key={`${item.name.first}-${item.cell}`}>
                <Link to={`user/${index + 1}`}  >
                    <ListItem user={item} />
                </Link>
            </ItemWrapper>
        );

    });
    return (
        <UserStyle>
            {usersItems}
        </UserStyle>
    )
}

export default UsersList;
