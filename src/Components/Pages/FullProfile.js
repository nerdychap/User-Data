import React, { useContext, useEffect } from 'react';
import { UsersContext } from '../../Context/UsersProvider';
import { useParams } from 'react-router-dom';
import ProfileWrapper, { ProfileImage } from '../../styles/FullProfileStyles';
import ProfileNest from './Sub-Pages/ProfileNest';
import ProfileCard, { ProfileCardTextWrapper, ProfileCardImageWrapper } from '../../styles/ProfileCardStyles';

const FullProfile = () => {
    const user = useContext(UsersContext);
    const { userId } = useParams();
    const { gender, id, location: { city, country }, name: { title, first, last }, picture: { large } } = user[userId - 1];

    useEffect(() => {
        document.title = `User: ${first} ${last}`;
    }, [first]);

    return (
        <ProfileWrapper>
            <h1>User Profile</h1>
            <ProfileCard>
                <ProfileCardImageWrapper><ProfileImage src={large} alt={`Image of a ${gender} named ${first}`} /></ProfileCardImageWrapper>
                <ProfileCardTextWrapper>
                    <div>Name: {title} {first} {last}</div>
                    <div>Location: {city}, {country}</div>
                    <div>ID Name: {id.name}</div>
                    <div>ID Number: {id.value}</div>
                </ProfileCardTextWrapper>
            </ProfileCard>

            <ProfileNest user={user[userId - 1]} />
        </ProfileWrapper>
    )
}

export default FullProfile;
