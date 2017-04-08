import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router';


const propTypes = {
  emit: PropTypes.func.isRequired
}

class JoinSpeaker extends Component {
  constructor() {
    super();

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(event) {
    event.preventDefault();

    const speakerName = ReactDOM.findDOMNode(this.refs.name).value;
    const title = ReactDOM.findDOMNode(this.refs.title).value;

    this.props.emit('start', {
      name: speakerName,
      title: title
    });
  }

  render() {
    return (
      <div className="join-speaker">
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              ref="name"
              type="text"
              placeholder="Enter your full name..."
              className="form-control"
              id="name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="title">Presentation Title</label>
            <input
              ref="title"
              type="text"
              placeholder="Enter a title for this presentation..."
              className="form-control"
              id="title"
              required
            />
          </div>
          <button className="btn btn-primary">Join</button>
          <Link to="/audience" className="btn btn-link">Join as a member</Link>
          <Link to="/board" className="btn btn-link">Go to the board</Link>
        </form>
      </div>
    )
  }
}

JoinSpeaker.propTypes = propTypes;

export default JoinSpeaker;
