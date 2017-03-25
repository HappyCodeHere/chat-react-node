import React, { Component, PropTypes } from 'react';

import Join from './Join';

const propTypes = {

}

class Audience extends Component {
  render() {
    return (
      <div className="audience">
        {this.props.status === 'connected' ?

          this.props.member.name ?

          !this.props.currentQuestion ?
          <div>
            <h2>Welcome {this.props.member.name}</h2>
            <p>{this.props.audience.length} audience members connected</p>
            <p>Questions will appear here.</p> :



          </div> :

          <div>
            <h2>{this.props.currentQuestion.q}</h2>
          </div> :

          <div>
            <h1>Join the session</h1>
            <Join emit={this.props.emit}/>
          </div>
         :
        null }
      </div>
    )
  }
}

Audience.propTypes = propTypes;

export default Audience;
