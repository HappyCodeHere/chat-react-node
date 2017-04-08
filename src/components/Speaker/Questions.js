import React, { Component, PropTypes } from 'react';


const propTypes = {
  questions: PropTypes.array.isRequired,
  emit: PropTypes.func.isRequired
}

class Questions extends Component {
  constructor() {
    super();

    this.state = {
      askedQuestion: undefined
    }

    this.addQuestions = this.addQuestions.bind(this);
    this.ask = this.ask.bind(this);
  }

  addQuestions(question, i) {
    return (
      <button key={i} onClick={() => this.ask(question)} className="col-xs-12 col-sm-6 btn btn-default">
        {question.q}
      </button>
    )
  }

  ask(question) {
    this.setState({askedQuestion: question.q});
    this.props.emit('ask', question);
  }

  render() {
    return (
      <div className="row questions">
        <h2>Questions</h2>
        {this.props.questions.map(this.addQuestions)}
        {this.state.askedQuestion ? <p>Your asked: {this.state.askedQuestion}</p> : null}
      </div>
    )
  }
}

Questions.propTypes = propTypes;

export default Questions;
