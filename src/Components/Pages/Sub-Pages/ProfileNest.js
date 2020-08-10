import React from 'react';
import { useRouteMatch, Switch, Route, NavLink, BrowserRouter as Router } from 'react-router-dom';
import Nav from '../../Navigation/Nav';
import NavLinkStyle from '../../../styles/NavLinkStyles';
import loadable from '@loadable/component';
import Loader from '../../Misc/Loader';
import TabWrapper from '../../../styles/ProfileNestStyles';

const Contact = loadable(() => import('./Contact'), { fallback: <Loader /> });
const Personal = loadable(() => import('./Personal'), { fallback: <Loader /> });
const Other = loadable(() => import('./Other'), { fallback: <Loader /> });


const ProfileNest = (props) => {
    const { user } = props;
    const { url, path } = useRouteMatch();
    return (

        <>
            <Router>
                <TabWrapper>
                    <NavLinkStyle>
                        <NavLink exact to={`${url}/personal-details`} activeClassName="active-nav">
                            <Nav>Personal Details</Nav>
                        </NavLink>
                    </NavLinkStyle>
                    <NavLinkStyle>
                        <NavLink exact to={`${url}/contact`} activeClassName="active-nav">
                            <Nav>Contact Details</Nav>
                        </NavLink>
                    </NavLinkStyle>
                    <NavLinkStyle>
                        <NavLink exact to={`${url}/other`} activeClassName="active-nav">
                            <Nav>Other Details</Nav>
                        </NavLink>
                    </NavLinkStyle>
                </TabWrapper>



                <Switch>
                    <Route path={`${path}/personal-details`} render={(props) => <Personal {...props} user={user} />} />

                    <Route path={`${path}/contact`} render={(props) => <Contact {...props} user={user} />} />

                    <Route path={`${path}/other`} render={(props) => <Other {...props} user={user} />} />
                    <Route exact path={path}>
                        <h1>Please pick a tab</h1>
                    </Route>

                </Switch>
            </Router>
        </>

    )
}


export default ProfileNest;

