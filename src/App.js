import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PickupDateTime from './components/PickupDateTime'; // adding list as a demo!
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#5cb85c',
            contrastText: '#ffffff'
        },
        secondary: {
            main: '#000000',
            contrastText: '#ffffff'
        },
    }
});

class App extends Component {
  render() {
    return (
        <MuiThemeProvider theme={theme}>
            <div className="App">
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <h1 className="App-title">Welcome to Redux Skeleton</h1>
                </header>
                <p className="App-intro">
                  To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <PickupDateTime />
            </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
