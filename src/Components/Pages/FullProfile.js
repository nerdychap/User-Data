import React, { useContext, useEffect } from 'react';
import { UsersContext } from '../../Context/UsersProvider';

import { useParams } from 'react-router-dom';

const FullProfile = () => {

    const user = useContext(UsersContext);
    const { userId } = useParams();
    const {
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
    } = user[userId - 1];

    useEffect(() => {
        document.title = `User: ${first} ${last}`;
    }, [first]);

    return (
        <div>
            <h1>Full User Profile: {first}</h1>
        </div>
    )
}

export default FullProfile;
