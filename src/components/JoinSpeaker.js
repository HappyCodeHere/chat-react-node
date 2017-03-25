import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

const propTypes = {

}

class JoinSpeaker extends Component {
  constructor() {
    super();

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(event) {
    event.preventDefault();
    const speakerName = ReactDOM.findDOMNode(this.refs.name).value;
    const title = ReactDOM.findDOMNode(this.refs.title).value;
    console.log(speakerName, title);
    this.props.emit('start', { name: speakerName, title: title })
  }
  render() {
    return (
      <div className="join">
        <form>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              ref="name"
              id="name"
              type="text"
              className="form-control"
              placeholder="enter your full name..."
              required />
          </div>

          <div className="form-group">
            <label htmlFor="title">Presentation Title</label>
            <input
              ref="title"
              id="title"
              type="text"
              className="form-control"
              placeholder="enter a title for this presentation..."
              required />
          </div>
          <button className="btn btn-primary" onClick={this.handleButtonClick}>Join</button>
        </form>
      </div>
    )
  }
}

JoinSpeaker.propTypes = propTypes;

export default JoinSpeaker;
