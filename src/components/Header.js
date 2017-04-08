import React, { PropTypes } from 'react';
// import { browserHistory } from 'react-router';

import './Header.scss';


const propTypes = {
  status: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  leave: PropTypes.func.isRequired
}

const Header = (props) => {
  const { title, speaker, status } = props;
  return (
    <header className="row header">
      <div className="col-xs-10">
        <h1>{title}</h1>
        <p>{speaker}</p>
      </div>
      {/*<div className="col-xs-1">
        <span onClick={() => props.leave()}>x</span>
      </div>*/}
      <div className="col-xs-2">
        <span className={`status ${status}`}></span>
      </div>
    </header>
  )
}

Header.propTypes = propTypes;

export default Header;
