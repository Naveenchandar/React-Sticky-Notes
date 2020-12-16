import React from 'react';
import '../App.css';
import Note from './Note';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Add as AddIcon } from '@material-ui/icons';

const useStyles = ((theme) => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor: '#5de2a3',
    '&:hover': {
      color: '#5de2a3',
      backgroundColor: 'transparent'
    }
  },
}));

class DisplayAllNotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: this.props.storedNotes,
      focusNoteId: 0,
      storedNotes: []
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    setTimeout(() => {
      this.setState((prevState) => ({
        notes: this.props.storedNotes
      }), () => {
        this.setState({ notes: this.props.storedNotes })
        console.log('callback', this.state.notes);
        this.eachNote(this.state.notes);
      })
    }, 1000)
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
        note: '',
        time: this.currenttime(),
      },
    ];
    this.setState({ notes });
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
    window.localStorage.setItem('notes', JSON.stringify(notes));
  };

  remove = (id) => {
    let notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  };

  noteFocus = (id) => {
    this.setState({
      focusNoteId: id
    })
  }

  eachNote = (note) => {
    if (note.id === this.state.focusNoteId) {
      return (
        <Note
          key={note.id}
          id={note.id}
          onChange={this.update}
          onRemove={this.remove}
          note={note.note}
          time={note.time}
          theme={this.props.theme}
          onAdd={this.add}
          noteFocus={this.noteFocus}
          focusNoteId={this.state.focusNoteId}
        />
      )
    } else {
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
            noteFocus={this.noteFocus}
            focusNoteId={this.state.focusNoteId}
          />
        )
      );
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div className="board">
        {this.state.notes && this.state.notes.length > 0 ?
          this.state.notes.map(this.eachNote)
          :
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => this.add()}
            startIcon={<AddIcon />}
          >
            Add a Note
      </Button>
        }
      </div>
    );
  }
}



export default withStyles(useStyles)(DisplayAllNotes);
