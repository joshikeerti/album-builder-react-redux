import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import MainContainer from './containers/MainContainer';
import App from './components/App/App';
import Album from './containers/AlbumContainer';
import CreateAlbumContainer from './containers/CreateAlbumContainer';
import './index.css';



const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={MainContainer}/>
      <Route path="/album" component={Album}/>
      <Route path="/createalbum" component={CreateAlbumContainer}/>
    </Route>
  </Router>
</Provider>
,document.getElementById('root'))
