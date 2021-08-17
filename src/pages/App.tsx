import React from 'react';
import { Provider } from 'react-redux';
import { createHashHistory } from 'history';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import {Admin, Resource} from 'react-admin';

import lb4Provider from 'react-admin-lb4';

import createStore from '../state';


import Home from '../pages/Home';
import authProvider from '../components/admin/authProvider';
import CryptoEntities, {CryptoECreate, CryptoEEdit} from '../components/admin/cryptoentities';
import LoginPage from '../components/admin/loginPage';

// providers
const dataProvider = lb4Provider('https://freemongoatlas.herokuapp.com/')


const history = createHashHistory();

function App() {
  return (
    <Provider store={createStore({
        authProvider,
        dataProvider,
        history,
      })}>

        <Router basename={process.env.PUBLIC_URL}>
          <Switch>

            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/admin">
              <Admin 
                loginPage={LoginPage} 

                authProvider={authProvider} 
                dataProvider={dataProvider} 
                history={history}
                title="Crypto Tracker Admin"
                >

                <Resource name='crypto-entities' 
                  list={CryptoEntities}
                  create={CryptoECreate}
                  edit = {CryptoEEdit}
                  />
              </Admin>
            </Route>

          </Switch>
        </Router>

    </Provider>
  );
}

export default App;
