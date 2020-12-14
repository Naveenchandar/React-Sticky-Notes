import React, { useState, useEffect } from 'react'
import './App.css';
import AllNotes from './components/AllNotes';
import {
    Paper
} from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { ToggleSwitch } from './components/ToggleTheme';

function App() {
    const [theme, setTheme] = useState({
        palette: {
            type: "light"
        }
    });

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        localTheme && setTheme({
            palette: {
                type: localTheme
            }
        });
    }, []);

    // we change the palette type of the theme in state
    const toggleDarkTheme = () => {
        let newPaletteType;
        if (theme.palette.type === "light") {
            window.localStorage.setItem('theme', 'dark')
            newPaletteType = 'dark';
        } else {
            window.localStorage.setItem('theme', 'light')
            newPaletteType = 'light';
        }
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
            <Paper style={{ height: '100vh', borderRadius: 'unset' }}>
                <AllNotes theme={theme} />
                <ToggleSwitch toggleDarkTheme={toggleDarkTheme} theme={theme} />
            </Paper>
        </ThemeProvider>
    );
}

export default App;
