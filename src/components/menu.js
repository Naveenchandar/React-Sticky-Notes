import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    typography: {
        padding: theme.spacing(2),
    },
}));

export default function SimplePopover(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div className='colors'>
            <div className='color-name' title='Yellow'></div>
            <div className='color-name' title='Green'></div>
            <div className='color-name' title='Pink'></div>
            <div className='color-name' title='Purple'></div>
            <div className='color-name' title='Blue'></div>
            <div className='color-name' title='Gray'></div>
            <div className='color-name' title='Charcoal'></div>
        </div>
    );
}