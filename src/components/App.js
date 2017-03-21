import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Header from './Header/Header';
import Body from './Body/Body';
import classes from './App.css';

injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider className={classes.body}>
    <div>
      <Header title="Hotels Prices Trend" />
      <Body />
    </div>
  </MuiThemeProvider>
);

export default App;
