import React, { Component, PropTypes } from 'react';

// import './Questions.scss';

const propTypes = {

}

class Questions extends Component {
  constructor() {
    super();

    this.ask = this.ask.bind(this);
    this.addQuestions = this.addQuestions.bind(this);
  }

  ask(question) {
    this.props.emit('ask', question);
  }

  addQuestions(question, i) {
    return (
      <div key={i} className="col-xs-12 col-sm-6 col-md-3">
        <span onClick={() => this.ask(question)}>{question.q}</span>
      </div>
    )
  }

  render() {
    return (
      <div className="questions row">
        <h2>Questions</h2>
        {this.props.questions.map(this.addQuestions)}
      </div>
    )
  }
}

Questions.propTypes = propTypes;

export default Questions;
