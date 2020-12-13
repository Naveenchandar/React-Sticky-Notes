import React, { useState, useEffect } from 'react'
import './App.css';
import App1 from './App1';
import {
    Switch,
    Paper
} from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import WbSunnyIcon from '@material-ui/icons/WbSunny';

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
                <App1 />
                <Switch
                    checked={theme.palette.type === 'dark' ? true : false}
                    checkedIcon={<NightsStayIcon />} 
                    icon={<WbSunnyIcon />}
                    onChange={toggleDarkTheme}
                    name="checkedA"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                    title={theme.palette.type === 'dark' ? 'Switch light mode' : 'Switch dark mode'}
                    className={theme.palette.type === 'dark' ? 'switchIcon' : 'lightIcon'}
                />
            </Paper>
        </ThemeProvider>
    );
}

export default App;
