import React from "react";
import Draggable from "react-draggable";
import "../App.css";
import {
  Add as AddIcon,
  Close as CloseIcon,
  FormatBold as FormatBoldIcon,
  FormatItalic as FormatItalicIcon,
  FormatUnderlined as FormatUnderlinedIcon,
  StrikethroughS as StrikethroughSIcon,
  FormatListBulleted as FormatListBulletedIcon,
  InsertPhotoOutlined as InsertPhotoOutlinedIcon
} from '@material-ui/icons';
class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addText: false,
      value:this.props.note
    };
    this.myRef = React.createRef();
  }

  componentWillMount = () => {
    this.style = {
      right: this.randomBetween(0, window.innerWidth - 150, "px"),
      top: this.randomBetween(0, window.innerHeight - 150, "px"),
    };
  };

  componentDidMount(){
    this.myRef.current.focus()
  }

  randomBetween = (x, y, s) => {
    return x + Math.ceil(Math.random() * (y - x)) + s;
  };

  save = () => {
    this.props.onChange(this.myRef.current.value, this.props.id);
    this.setState({ addText: false });
  };
  edit = () => {
    this.setState({ addText: true });
  };

  delete = (id) => {
    this.props.onRemove(this.props.id);
  };

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  AddNote = () => {
    return (
      <div className="note" style={this.style}>
        <div id='note' style={ this.props.theme === 'light' ? {backgroundColor: '#ffffff'} : {backgroundColor: '#424242'}}>
          {this.props.focusNoteId === this.props.id ? 
          <div className='notes-header'>
            <AddIcon className='note-icon' onClick={this.props.onAdd} titleAccess='New note'/>
            <CloseIcon className='note-icon' onClick={this.delete} titleAccess='Close note'/>
          </div> : ''}
          <textarea
            ref={this.myRef}
            style={{ width: 295, height: 250, margin: 0, border: 'unset',outline: 'unset' }}
            placeholder="Take a note here..."
            onBlur={this.save}
            onFocus={()=>this.props.noteFocus(this.props.id)}
            value={this.state.value} onChange={this.handleChange}
          ></textarea>
          <div className='notes-footer'>
            <FormatBoldIcon className='note-icon' titleAccess='Bold'/>
            <FormatItalicIcon className='note-icon' titleAccess='Italic'/>
            <FormatUnderlinedIcon className='note-icon' titleAccess='Underline'/>
            <StrikethroughSIcon className='note-icon' titleAccess='Strikethrough'/>
            <FormatListBulletedIcon className='note-icon' titleAccess='Toggle Bullets'/>
            <InsertPhotoOutlinedIcon className='note-icon' titleAccess='Add Image'/>
          </div>
        </div>
        {/* <button className="button2" onClick={this.save}>
          Add Text
        </button> */}
      </div>
    );
  };

  AddTextOrNot = () => {
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
        <span>
          {/* <button className="button2" onClick={this.delete}>
            Delete Note
          </button> */}
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
      <div style={{height: '70vh', padding: '10px'}}>
      <Draggable bounds="parent" >
        {this.AddNote()}
      </Draggable>
      </div>
    );
  }
}

export default Note;
