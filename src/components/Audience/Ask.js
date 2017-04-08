import React, { Component, PropTypes } from 'react';


const propTypes = {
  question: PropTypes.object.isRequired,
  emit: PropTypes.func.isRequired
}

class Ask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      choices: [],
      answer: undefined
    }

    this.setUpChoises = this.setUpChoises.bind(this);
    this.addChoiceButton = this.addChoiceButton.bind(this);
    this.select = this.select.bind(this);
  }

  componentWillMount() {
    this.setUpChoises();
  }

  componentWillReceiveProps() {
    this.setUpChoises();
  }

  setUpChoises() {
    let choices = Object.keys(this.props.question);
    choices.shift();

    this.setState({
      choices: choices,
      answer: sessionStorage.answer
    });
  }

  select(choice) {
    this.setState({answer: choice});
    sessionStorage.answer = choice;
    this.props.emit('answer', {
      question: this.props.question,
      choice: choice
    });
  }

  addChoiceButton(choice, i) {
    const buttonTypes = ['primary', 'success', 'warning', 'danger'];
    return (
      <button key={i} onClick={() => this.select(choice)} className={"col-xs-12 col-sm-6 btn btn-" + buttonTypes[i]}>
        {choice}: {this.props.question[choice]}
      </button>
    )
  }

  render() {
    return (
      <div className="ask">
        {
          !this.state.answer ?
            <div>
              <h2>{this.props.question.q}</h2>
              <div className="row">
                {this.state.choices.map(this.addChoiceButton)}
              </div>
            </div> :

            <div>
              <h3>You answered: {this.state.answer}</h3>
              <p>{this.props.question[this.state.answer]}</p>
            </div>
        }
      </div>
    )
  }
}

Ask.propTypes = propTypes;

export default Ask;
