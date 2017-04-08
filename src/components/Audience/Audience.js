import React, { Component, PropTypes } from 'react';

import Ask from './Ask';
import Join from './Join';


const propTypes = {
  status: PropTypes.string.isRequired,
  member: PropTypes.object.isRequired,
  currentQuestion: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object
  ]).isRequired,
  audience: PropTypes.array.isRequired,
  emit: PropTypes.func.isRequired
}

class Audience extends Component {
  render() {
    return (
      <div className="audience">
        {
          this.props.status === 'connected' ?

              this.props.member.name ?

                this.props.currentQuestion ?

                  <div>
                    <Ask question={this.props.currentQuestion} emit={this.props.emit} />
                  </div> :
                  <div>
                    <h2>Welcome {this.props.member.name}</h2>
                    <p>{this.props.audience.length} audience members connected</p>
                    <p>Questions will appear here.</p>
                  </div>

                :
                <div>
                  <h2>Join the session</h2>
                  <Join emit={this.props.emit}/>
                </div>

            : null
        }
      </div>
    )
  }
}

Audience.propTypes = propTypes;

export default Audience;
