import React from 'react'
import HeadingStyle, { ContentWrapper } from '../../../styles/PersonalStyles';

const Personal = (props) => {
    const { dob, gender, location: { city, country, state, street }, name: { title, first, last }, nat } = props.user;
    const dateOfBirth = JSON.stringify(new Date(dob.date));
    return (
        <ContentWrapper>
            <HeadingStyle>Name</HeadingStyle>
            <div>{title} {first} {last}</div>
            <HeadingStyle>Gender</HeadingStyle>
            <div>{gender}</div>
            <HeadingStyle>Nationality</HeadingStyle>
            <div>{nat}</div>
            <HeadingStyle>Age</HeadingStyle>
            <div>{dob.age}</div>
            <HeadingStyle>Date of Birth</HeadingStyle>
            <div>{dateOfBirth}</div>
            <HeadingStyle>Country</HeadingStyle>
            <div>{country}</div>
            <HeadingStyle>State</HeadingStyle>
            <div>{state}</div>
            <HeadingStyle>City</HeadingStyle>
            <div>{city}</div>
            <HeadingStyle>Street</HeadingStyle>
            <div>{street.name}</div>
        </ContentWrapper>
    )
}

export default Personal;
