import React from 'react';
import '../App.css';
import Note from './Note';
import { Button} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Add as AddIcon } from '@material-ui/icons';

const useStyles = ((theme) => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor: '#5de2a3',
    '&:hover':{
      color: '#5de2a3',
      backgroundColor: 'transparent'
    }
  },
}));

class DisplayAllNotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
  }
  nextId = () => {
    this.uniqueId = this.uniqueId || 0;
    return this.uniqueId++;
  };

  currenttime = () => {
    let today = new Date();
    //  var time =today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    today = `${today.toLocaleDateString()} ${today.toLocaleTimeString()}`;
    return today;
  }
  add = (text) => {
    let notes = [
      ...this.state.notes,
      {
        id: this.nextId(),
        note: text,
        time: this.currenttime(),
      },
    ];
    this.setState({ notes });
    // this.props.toggleDarkTheme();
  };

  update = (newText, id) => {
    let notes = this.state.notes.map((note) =>
      note.id !== id
        ? note
        : {
          ...note,
          note: newText,
        }
    );
    this.setState({ notes });
  };

  remove = (id) => {
    let notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  };

  eachNote = (note) => {
    return (
      (
        <Note
          key={note.id}
          id={note.id}
          onChange={this.update}
          onRemove={this.remove}
          note={note.note}
          time={note.time}
          theme={this.props.theme}
          onAdd={this.add}
        />
      )
    );
  };

  render() {
    const { classes } = this.props;
    return (
      <div className="board">
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => this.add()}
          startIcon={<AddIcon />}
        >
          Add a Note
      </Button>
        {this.state.notes.map(this.eachNote)}
      </div>
    );
  }
}



export default withStyles(useStyles)(DisplayAllNotes);
