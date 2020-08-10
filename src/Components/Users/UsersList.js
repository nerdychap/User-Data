import React, { useContext } from 'react';
import { UsersContext } from '../../Context/UsersProvider';
import { ListItem } from '../Misc/ListItem';
import { Link } from 'react-router-dom';
import UserStyle, { ItemWrapper } from '../../styles/UserStyle';



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
