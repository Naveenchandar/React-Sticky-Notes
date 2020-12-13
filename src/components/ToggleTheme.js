import React from 'react';
import { Switch } from '@material-ui/core';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import WbSunnyIcon from '@material-ui/icons/WbSunny';

export const ToggleSwitch = ({theme,toggleDarkTheme}) => {
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