import React from 'react';
import UserWrapper, { Text, Image } from '../../styles/ListItemStyles';

export const ListItem = (props) => {
    const { user:
        {
            gender,
            location: { city, country },
            name: { title, first, last },
            picture: { large }

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