import React, { useState } from 'react'
import './App.css';
import App1 from './App1';
import {
    Switch,
    Paper
} from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

function App() {
    const [theme, setTheme] = useState({
        palette: {
            type: "light"
        }
    });

    // we change the palette type of the theme in state
    const toggleDarkTheme = () => {
        let newPaletteType = theme.palette.type === "light" ? "dark" : "light";
        console.log('newPaletteType:', newPaletteType)
        setTheme({
            palette: {
                type: newPaletteType
            }
        });
    };

    // we generate a MUI-theme from state's theme object
    const muiTheme = createMuiTheme(theme);
    // console.log('#' + Math.floor(Math.random() * 16777215).toString(16));

    return (
        <ThemeProvider theme={muiTheme}>
            <Paper style={{height: '100vh',borderRadius: 'unset'}}>
            <App1/>
            <Switch
                checked={theme.palette.type === 'dark'}
                onChange={toggleDarkTheme}
                name="checkedA"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
                title={theme.palette.type === 'dark' ? 'Switch light mode' : 'Switch dark mode'}
            />
            </Paper>
        </ThemeProvider>
    );
}

export default App;
