const express = require('express');
const _ = require('underscore');
const app = express();




let connections = [];
let audience = [];
let title = 'Untitled Presentation';
let speaker = {};
let currentQuestion = false;
const questions = require('./app-questions');


const server = app.listen(3001);
const io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {

  socket.once('disconnect', function()  {

    const member = _.findWhere(audience, { id: this.id });

    if (member) {
      audience.splice(audience.indexOf(member), 1);
      io.sockets.emit('audience', audience);
      console.log('Left: %s (%s audience members)', member.name, audience.length);
    } else if (this.id === speaker.id) {
      console.log('%s has left. "%s" is over.', speaker.name, title);
      speaker = {};
      title = 'Untitled Presentation';
      io.sockets.emit('end', { title: title, speaker: '' });
    }

    connections.splice(connections.indexOf(socket), 1);
    socket.disconnect();
    console.log('Disconnected: %s sockets remaining.', connections.length);
  });

  socket.on('join', function(payload)  {
    const newMember = {
      id: this.id,
      name: payload.name,
      type: 'audience'
    }
    this.emit('joined', newMember);
    audience.push(newMember);
    io.sockets.emit('audience', audience);
    console.log('Audience Joined: %s', payload.name);
  })

  socket.on('start', function(payload) {
    speaker.name = payload.name;
    speaker.id = this.id;
    speaker.type = 'speaker';
    title = payload.title;
    this.emit('joined', speaker);
    // audience.push(speaker);
    io.sockets.emit('start', { title: title, speaker: speaker.name });
    console.log('Presentation Started: "%s" by %s', title, speaker.name);
  });

  socket.on('ask', function(question) {
    currentQuestion = question;
    io.sockets.emit('ask', currentQuestion);
    console.log('Question Asked: "%s"', question.q);
  })

  socket.emit('welcome', {
    title: title,
    audience: audience,
    speaker: speaker.name,
    questions: questions,
    currentQuestion: currentQuestion,
  })

  connections.push(socket);
  console.log('Connected: %s sockets connected.', connections.length);
});

console.log('Server ready on 3001');
