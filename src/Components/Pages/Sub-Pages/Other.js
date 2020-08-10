import React from 'react'
import HeadingStyle, { ContentWrapper } from '../../../styles/PersonalStyles';

const Other = (props) => {
    const { login: { username, password }, registered } = props.user;
    const registeredDate = JSON.stringify(new Date(registered.date));
    return (
        <ContentWrapper>
            <HeadingStyle>Username</HeadingStyle>
            <div>{username}</div>
            <HeadingStyle>Password</HeadingStyle>
            <div>{password}</div>
            <HeadingStyle>Registered Age</HeadingStyle>
            <div>{registered.age}</div>
            <HeadingStyle>Registered Date</HeadingStyle>
            <div>{registeredDate}</div>
        </ContentWrapper>
    )
}

export default Other;
