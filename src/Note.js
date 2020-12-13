import React from "react";
import Draggable from "react-draggable";
import "./App.css";
class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addText: false,
    };
  }

  componentWillMount = () => {
    this.style = {
      right: this.randomBetween(0, window.innerWidth - 150, "px"),
      top: this.randomBetween(0, window.innerHeight - 150, "px"),
    };
  };

  randomBetween = (x, y, s) => {
    return x + Math.ceil(Math.random() * (y - x)) + s;
  };

  save = () => {
    // @ts-ignore
    this.props.onChange(this.refs.newText.value, this.props.id);
    this.setState({ addText: false });
  };
  edit = () => {
    this.setState({ addText: true });
  };

  delete = (id) => {
    this.props.onRemove(this.props.id);
  };

  AddNote = () => {
    return (
      <div className="note" style={this.style}>
        <textarea
          ref="newText"
          style={{ width: 241, height: 122, margin: 0 }}
          placeholder="Enter a note here."
        ></textarea>
        <button className="button2" onClick={this.save}>
          Add Text
        </button>
      </div>
    );
  };

  AddTextOrNot = () => {
    console.log("called");

    return (
      <button className="button2" onClick={this.edit}>
        Add Text
      </button>
    );
  };

  DisplayNote = () => {
    return (
      <div className="note" style={this.style}>
        <p>{this.props.note}</p>
        {console.log("note = >" + this.props.note)}
        <span>
          <button className="button2" onClick={this.delete}>
            Delete Note
          </button>
          {this.AddTextOrNot()}
        </span>

        <div className="footer">
          <span className="time">
            Note created on <span>{this.props.time} </span>
          </span>
        </div>
      </div>
    );
  };

  render() {
    return (
      <Draggable>
        {this.state.addText ? this.AddNote() : this.DisplayNote()}
      </Draggable>
    );
  }
}

export default Note;
