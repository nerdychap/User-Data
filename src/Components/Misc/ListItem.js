import React from 'react';
import styled from 'styled-components';

const UserWrapper = styled.div`

`;
const Image = styled.img`
    width: 100%;
`;
export const Text = styled.div`
    margin: 5px 0;
    color: black;
`;

export const ListItem = (props) => {
    const { user:
        {
            cell,
            dob,
            email,
            gender,
            id,
            location: { city, coordinates, country, postcode, state, street, timezone: { offset, description } },
            login: { uuid, username, password, salt, md5, sha1, sha256 },
            name: { title, first, last },
            nat,
            phone,
            picture: { large, medium, thumbnail },
            registered
        }
    } = props;

    return (
        <UserWrapper>
            <div><Image src={large} alt={`Picture of a ${gender} named ${first}`} /></div>
            <Text>{title} {first} {last}</Text>
            <Text> {city}, {country}</Text>
        </UserWrapper>
    )

};