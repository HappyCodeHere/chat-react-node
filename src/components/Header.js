import React, { PropTypes } from 'react';

import './Header.scss';


const propTypes = {
  status: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  leave: PropTypes.func.isRequired,
  member: PropTypes.object.isRequired,
}

const Header = (props) => {
  const { title, speaker, status, member } = props;
  return (
    <header className="row header">
      <div className="col-xs-9">
        <h1>{title}</h1>
        <p>{speaker}</p>
      </div>
      <div className="col-xs-1">
        {
          Object.keys(member).length > 0 ?
            <button className="btn btn-danger" onClick={() => props.leave()}>Leave</button> : null
        }
      </div>
      <div className="col-xs-offset-1 col-xs-1">
        <span className={`status ${status}`}></span>
      </div>
    </header>
  )
}

Header.propTypes = propTypes;

export default Header;
