import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Drawer,
    Toolbar,
    List,
    Typography,
    Box,
    Button,
    ListItem,
    ListItemText
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
        justifyContent: 'space-between',
        minHeight: '50px'
    },
    notesListBtn: {
        background: '#5de2a3',
        '&:hover': {
            color: '#5de2a3',
            backgroundColor: 'transparent'
        }
    },
    notesList: {
        marginTop: 5,
        marginBottom: 5,
        '& li': {
            '& div': {
                '& span': {
                    fontSize: '10px',
                    textAlign: 'center',
                    marginTop: '-14px',
                    marginBottom: '10px'
                }
            }
        },
        '& .MuiListItem-gutters': {
            paddingLeft: '0 !important',
            paddingRight: '0 !important'
        }
    },
    itemBorder: {
        borderBottom: '1px solid black',
        width: '20%'
    },
    notesIcon: {
        cursor: 'pointer'
    },
    inlineNote: {
        position: 'relative',
        left: '0px',
    },
    notePara: {
        fontSize: '15px !important'
    }
}));

export default function NotesList({ notes, addNote }) {
    console.log('notes:', notes)
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const loadNotesList = (notes) => {
        if (notes && notes.length > 0) {
            return notes.map((item, i) => {
                return (
                    <List className={classes.notesList}>
                        <ListItem alignItems="flex-start">
                            <Box 
                                component='div' 
                                className={classes.itemBorder}
                                style={{ borderBottom: item.color ? `1px solid ${item.color}` : this.state.headerBgColor }}
                            />
                            <ListItemText
                                primary={item.time}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.inlineNote}
                                            color="textPrimary"
                                        >
                                            <span className={classes.notePara}>{item.note}</span>
                                        </Typography>
                                    </React.Fragment>
                                }
                            />
                            <Box 
                                component='div' 
                                className={classes.itemBorder}
                                style={{ borderBottom: item.color ? `1px solid ${item.color}` : this.state.headerBgColor }}
                            />
                        </ListItem>
                    </List>
                )
            })
        }
    }

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
                    <AddIcon className={classes.notesIcon} onClick={addNote} />
                    <CloseIcon className={classes.notesIcon} onClick={handleDrawerClose} />
                </div>
                <List>
                    <Typography variant='h5'>Sticky Notes</Typography>
                    <Box component='div'>
                        {loadNotesList(notes)}
                    </Box>
                </List>
            </Drawer>
        </div>
    );
}
