import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Switch
} from 'react-router-dom';
import ThRoute from './commons/ThRoute';
import Home from './containers/home';
import Trips from './containers/trips';
import Musics from './containers/musics';
import GlobalStyle from './theme/globalStyles';

import {createBrowserHistory} from 'history';
import Footer from "./containers/footer";
// import "./firebase/dump_database"
const history = createBrowserHistory();

export default function () {
  return (
    <BrowserRouter history={history}>
      <GlobalStyle/>
      <Footer/>
      <Home/>
      <Switch>
        <ThRoute exact path='/'/>
        <ThRoute path='/trips/:id' component={Trips}/>
        <ThRoute path='/musics' component={Musics}/>
      </Switch>
    </BrowserRouter>
  )
}
