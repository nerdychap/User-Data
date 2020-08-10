import React from 'react';
import HeadingStyle, { ContentWrapper } from '../../../styles/PersonalStyles';

const Contact = (props) => {
    const { email, phone } = props.user;

    return (
        <ContentWrapper>
            <HeadingStyle>Phone</HeadingStyle>
            <div>{phone}</div>
            <HeadingStyle>Email</HeadingStyle>
            <div>{email}</div>
        </ContentWrapper>
    )
}

export default Contact;
