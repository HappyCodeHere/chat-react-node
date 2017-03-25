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
    }

    this.connect = this.connect.bind(this);
    this.disconnect = this.disconnect.bind(this);
    this.updateState = this.updateState.bind(this);
    this.emit = this.emit.bind(this);
    this.joined = this.joined.bind(this);
    this.updateAudience = this.updateAudience.bind(this);
    this.start = this.start.bind(this);
    this.ask = this.ask.bind(this);
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
    console.info(serverState);
    this.setState({...serverState}, () => {
      console.log(this.state);
    })
  }

  joined(member) {
    console.log(member, 'here');
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
    this.setState(presentation); //!!!
  }

  ask(question) {
    this.setState({ currentQuestion: question});
  }

  render() {
    return (
      <div className="app">
        <Header {...this.state} />
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
