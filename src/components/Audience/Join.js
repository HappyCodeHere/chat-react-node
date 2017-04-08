import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router';


const propTypes = {
  emit: PropTypes.func.isRequired
}

class Join extends Component {
  constructor() {
    super();

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const memberName = ReactDOM.findDOMNode(this.refs.name).value;
    this.props.emit('join', { name: memberName })
  }

  render() {
    return (
      <div className="join">
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
          <button className="btn btn-primary">Join</button>
          <Link to="/speaker" className="btn btn-link">Join as a speaker</Link>
          <Link to="/board" className="btn btn-link">Go to the board</Link>
        </form>
      </div>
    )
  }
}

Join.propTypes = propTypes;

export default Join;
