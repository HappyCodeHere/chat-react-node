import React, { PropTypes } from 'react';

import './Header.scss';

const propTypes = {

}

const Header = (props) => {
  console.log(props.speaker)
  return (
    <header className="header row">
      <div className="col-xs-10">
        <h1>{props.title}</h1>
        <p>{props.speaker}</p>
      </div>
      <div className="col-xs-2">
        <span className={`status ${props.status}`}></span>
      </div>
    </header>
  )
}

Header.propTypes = propTypes;

export default Header;
