import React from 'react';
import loadable from '@loadable/component'
import UsersProvider from './Context/UsersProvider';
import { Route, Switch } from 'react-router-dom';

import Loader from './Components/Misc/Loader';
import GlobalStyle from './styles/Globalstyles';
const FullProfile = loadable(() => import('./Components/Pages/FullProfile'), { fallback: <Loader /> });
const Home = loadable(() => import('./Components/Pages/Home'), { fallback: <Loader /> });
const NoMatch = loadable(() => import('./Components/Misc/NoMatch'), { fallback: <Loader /> });
const Navigation = loadable(() => import('./Components/Navigation/Navigation'), { fallback: <Loader /> });

const App = () => {
    return (
        <div>
            <GlobalStyle />
            <UsersProvider>

                <Navigation />
                <Switch>
                    <Route exact path="/user/:userId" render={(props) => <FullProfile {...props} />} />
                    <Route exact path="/" render={(props) => <Home {...props} />} />
                    <Route component={NoMatch} />
                </Switch>

            </UsersProvider>
        </div>
    )
}


export default App;



