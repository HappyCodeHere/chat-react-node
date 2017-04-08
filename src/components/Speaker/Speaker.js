import React, { Component, PropTypes } from 'react';

import JoinSpeaker from './JoinSpeaker';
import Questions from './Questions';
import Attendance from './Attendance';


const propTypes = {
  member: PropTypes.object.isRequired,
  questions: PropTypes.array.isRequired,
  audience: PropTypes.array.isRequired,
  emit: PropTypes.func.isRequired
}

class Speaker extends Component {
  render() {
    return (
      <div className="speaker">
        {
          this.props.status === 'connected' ?

            this.props.member.name && this.props.member.type === 'speaker' ?
              <div>
                <Questions emit={this.props.emit} questions={this.props.questions} />
                <Attendance audience={this.props.audience} />
              </div> :
              <div>
                <h2>Start the presentation</h2>
                <JoinSpeaker emit={this.props.emit} />
              </div>

            : null
        }
      </div>
    )
  }
}

Speaker.propTypes = propTypes;

export default Speaker;
