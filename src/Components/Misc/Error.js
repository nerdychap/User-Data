import React from 'react';
import ErrorStyle, { ErrorMessage } from '../../styles/ErrorStyles';
import Navigation from '../Navigation/Navigation';
import { Route } from 'react-router-dom';
import Home from '../Pages/Home';


function Error(props) {
    return (
        <>
            <Navigation />
            <ErrorStyle>
                <ErrorMessage>{props.error}</ErrorMessage>
            </ErrorStyle>
            <Route exact path="/" render={(props) => <Home {...props} />} />
        </>

    )
}

export default Error
