import React, { Component, PropTypes } from 'react';
import JoinSpeaker from './JoinSpeaker';
import Attendance from './Attendance';
import Questions from './Questions';

const propTypes = {

}

class Speaker extends Component {
  render() {
    return (
      <div className="audience">

        {
          this.props.status === 'connected' ?

          this.props.member.name && this.props.member.type === 'speaker' ?
          <div>
            <Questions emit={this.props.emit} questions={this.props.questions} />
            <Attendance audience={this.props.audience} />
          </div>

        :
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
