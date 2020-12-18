import React from 'react';
import { Switch } from '@material-ui/core';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        position: 'absolute',
        top: '18px'
    }
}));


export const ToggleSwitch = ({ theme, toggleDarkTheme }) => {
    const classes = useStyles();
    return (
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
    )
};