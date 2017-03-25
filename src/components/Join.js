import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router';

const propTypes = {

}

class Join extends Component {
  constructor() {
    super();

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(event) {
    event.preventDefault();
    const memberName = ReactDOM.findDOMNode(this.refs.name).value;
    this.props.emit('join', { name: memberName })
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
          <button className="btn btn-primary" onClick={this.handleButtonClick}>Join</button>
          <Link to="/speaker">Join as a speaker</Link>
        </form>
      </div>
    )
  }
}

Join.propTypes = propTypes;

export default Join;
