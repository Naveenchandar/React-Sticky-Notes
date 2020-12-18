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
  InsertPhotoOutlined as InsertPhotoOutlinedIcon,
  MoreHoriz as MoreHorizIcon
} from '@material-ui/icons';
import SimplePopover from './menu';

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addText: false,
      value: this.props.note,
      toggleMenuDialog: false,
      headerBgColor: ''
    };
    this.myRef = React.createRef();
  }

  componentWillMount = () => {
    this.style = {
      right: this.randomBetween(0, window.innerWidth - 200, "px"),
      top: this.randomBetween(0, window.innerHeight - 200, "px"),
    };
  };

  componentDidMount() {
    this.myRef.current.focus()
  }

  randomBetween = (x, y, s) => {
    return x + Math.ceil(Math.random() * (y - x)) + s;
  };

  save = () => {
    this.props.onChange(this.myRef.current.value, this.props.id, this.state.headerBgColor);
    this.setState({ addText: false });
  };

  edit = () => {
    this.setState({ addText: true });
  };

  delete = (id) => {
    this.props.onRemove(this.props.id);
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleTextChange = (textType) => {
    switch (textType) {
      case 'bold':
        this.myRef.current.style.fontWeight = "bold";
        break;
      case 'italic':
        this.myRef.current.style.fontStyle = "italic";
        break;
      case 'underline':
        this.myRef.current.style.textDecoration = "underline";
        break;
      case 'strike':
        this.myRef.current.style.textDecoration = "line-through";
        break;
      default:
        this.myRef.current.style.fontStyle = "normal";
        break;

    }
  }

  handleMenuIcon = () => {
    this.setState({
      toggleMenuDialog: true
    })
  }

  handleCloseMenuIcon = () => {
    this.setState({
      toggleMenuDialog: false
    })
  }

  handleFocusTextArea = () => {
    this.setState({
      toggleMenuDialog: false
    })
    this.props.noteFocus(this.props.id)
  }

  handleChangeColor = (color) => {
    if (color) {
      this.setState({
        headerBgColor: color,
        toggleMenuDialog: false
      })
    } else {
      const headerBgColor = this.props.theme === 'light' ? 'rgb(93 226 163)' : '#424242';
      this.setState({
        headerBgColor
      })
    }
  }

  AddNote = () => {
    return (
      <div className="note" style={this.style}>
        <div
          id='note'
          style={{ backgroundColor: this.props.theme.palette.type === 'light' ? 'rgb(93 226 163)' : '#424242' }}
        >
          {this.props.focusNoteId === this.props.id ?
            this.state.toggleMenuDialog ?
              <SimplePopover handleChangeColor={this.handleChangeColor} theme={this.props.theme} />
              :
              <div className='notes-header' style={{ backgroundColor: this.state.headerBgColor }}>
                <AddIcon
                  className='note-icon'
                  onClick={this.props.onAdd}
                  titleAccess='New note'
                />
                <div>
                  <MoreHorizIcon
                    titleAccess='Menu'
                    className='note-icon'
                    onClick={this.handleMenuIcon}
                    onBlur={this.handleCloseMenuIcon}
                  />
                  <CloseIcon
                    className='note-icon'
                    onClick={this.delete}
                    titleAccess='Close note'
                  />
                </div>
              </div>
            : ''}

          <textarea
            ref={this.myRef}
            placeholder="Take a note here..."
            onBlur={this.save}
            onFocus={this.handleFocusTextArea}
            value={this.state.value}
            onChange={this.handleChange}
          ></textarea>

          <div className='notes-footer' style={{ backgroundColor: this.state.headerBgColor }}>
            <FormatBoldIcon
              className='note-icon'
              titleAccess='Bold'
              onClick={() => this.handleTextChange('bold')}
            />
            <FormatItalicIcon
              className='note-icon'
              titleAccess='Italic'
              onClick={() => this.handleTextChange('italic')}
            />
            <FormatUnderlinedIcon
              className='note-icon'
              titleAccess='Underline'
              onClick={() => this.handleTextChange('underline')}
            />
            <StrikethroughSIcon
              className='note-icon'
              titleAccess='Strikethrough'
              onClick={() => this.handleTextChange('strike')}
            />
            {/* <FormatListBulletedIcon
              className='note-icon'
              titleAccess='Toggle Bullets'
              onClick={() => this.handleTextChange('bullet')}
            /> */}
            {/* <InsertPhotoOutlinedIcon className='note-icon' titleAccess='Add Image'/> */}
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
      <div style={{ height: '90vh', padding: '10px' }}>
        <Draggable bounds="parent" >
          {this.AddNote()}
        </Draggable>
      </div>
    );
  }
}

export default Note;
