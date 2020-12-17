import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
    Drawer,
    Toolbar,
    List,
    Typography,
    Divider,
    Box,
    Button
} from '@material-ui/core';
import {
    Add as AddIcon,
    Close as CloseIcon
} from '@material-ui/icons';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        position: 'absolute',
        top: '18px'
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    notesListBtn: {
        background: '#5de2a3',
        '&:hover': {
            color: '#5de2a3',
            backgroundColor: 'transparent'
        }
    }
}));

export default function NotesList({ notes }) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <Toolbar>
                <Button variant="contained" className={classes.notesListBtn} color="primary" onClick={handleDrawerOpen}>
                    Notes List
                </Button>
            </Toolbar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <AddIcon />
                    <CloseIcon onClick={handleDrawerClose} />
                </div>
                <Divider />
                <List>
                    <Typography variant='h5'>Sticky Notes</Typography>
                    <Box component='div'>

                    </Box>
                </List>
                <Divider />
            </Drawer>
        </div>
    );
}
