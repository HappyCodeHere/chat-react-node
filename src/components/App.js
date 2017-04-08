import React, { Component } from 'react';

import io from 'socket.io-client';

import Header from './Header';

import './App.scss';


class App extends Component {
  constructor() {
    super();

    this.state = {
      status: 'disconnected',
      title: '',
      member: {},
      audience: [],
      speaker: '',
      questions: [],
      currentQuestion: false,
      results: {}
    }

    this.connect = this.connect.bind(this);
    this.disconnect = this.disconnect.bind(this);
    this.updateState = this.updateState.bind(this);
    this.joined = this.joined.bind(this);
    this.updateAudience = this.updateAudience.bind(this);
    this.start = this.start.bind(this);
    this.ask = this.ask.bind(this);
    this.updateResults = this.updateResults.bind(this);

    this.emit = this.emit.bind(this);
    this.leave = this.leave.bind(this);
  }

  componentWillMount() {
    this.socket = io();
    this.socket.on('connect', this.connect);
    this.socket.on('disconnect', this.disconnect);
    this.socket.on('welcome', this.updateState);
    this.socket.on('joined', this.joined);
    this.socket.on('audience', this.updateAudience);
    this.socket.on('start', this.start);
    this.socket.on('end', this.updateState);
    this.socket.on('ask', this.ask);
    this.socket.on('results', this.updateResults)
  }

  emit(eventName, payload) {
    this.socket.emit(eventName, payload);
  }

  connect() {
    const member = (sessionStorage.member) ? JSON.parse(sessionStorage.member) : null;

    if (member && member.type === 'audience') {
      this.emit('join', member);
    } else if (member && member.type === 'speaker') {
      this.emit('start', { name: member.name, title: sessionStorage.title});
    }

    this.setState({status: 'connected'});
  }

  disconnect() {
    this.setState({
      status: 'disconnected',
      title: 'disconnected',
      speaker: ''
    });
  }

  updateState(serverState) {
    this.setState({...serverState});
  }

  joined(member) {
    sessionStorage.member = JSON.stringify(member);
    this.setState({member: member});
  }

  updateAudience(newAudience) {
    this.setState({audience: newAudience});
  }

  start(presentation) {
    if (this.state.member.type === 'speaker') {
      sessionStorage.title = presentation.title;
    }
    this.setState(presentation);
  }

  ask(question) {
    sessionStorage.answer = '';
    this.setState({
      currentQuestion: question,
      results: {a: 0, b: 0, c: 0, d: 0}
    });
  }

  updateResults(data) {
    this.setState({results: data});
  }

  leave() {
    this.emit('leave', this.state.member);
    sessionStorage.member = '';
    this.setState({member: {}});
  }

  render() {
    return (
      <div className="app container">
        <Header {...this.state} leave={this.leave} />
        {
          this.props.children && React.cloneElement(this.props.children, {
              ...this.state,
              emit: this.emit
            })
        }
      </div>
    );
  }
}

export default App;
