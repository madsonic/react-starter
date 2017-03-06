import React from 'react';
import { LineChart, Line, XAxis, YAxis } from 'recharts';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import classes from './App.css';

import Header from './Header/Header'
import Body from './Body/Body'

injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider className={classes.app}>
    <div>
        <Header title="Hotels Prices Trend" />
        <Body />
    </div>
  </MuiThemeProvider>
);

export default App;
