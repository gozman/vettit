import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import configureStore from './store/configureStore';
import getRoutes from './routes';
import injectTapEventPlugin from 'react-tap-event-plugin';
require('style-loader!css-loader!./main.css');
require('style-loader!css-loader!../public/css/vendor/flexboxgrid.min.css');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

// to do: delete
require('style-loader!css-loader!../public/css/vendor/bootstrap.css');

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const store = configureStore(window.INITIAL_STATE);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={getRoutes(store)}/>
  </Provider>,
  document.getElementById('app')
);
