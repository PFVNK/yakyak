import React, { Component } from 'react'
import io from 'socket.io-client'

import Form from './Components/Form'

import './App.css';




class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      messages: []
    }
  }

  componentDidMount() {

  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    var socket = io('http://localhost:3001')
    let { value, messages } = this.state
    event.preventDefault();

    socket.emit('chat message', value)

    socket.on('chat message', msg => {
      this.setState({
        messages: [...messages, msg],
        value: ''
      })
      console.log('hey now')
    })
  }

  render() {
    let { value, messages } = this.state

    return (
      <div>
        <ul id="messages">{messages.map(message => (
          <li key={message}>{message}</li>
        ))}</ul>
        <form onSubmit={this.handleSubmit}>
          <input id="m" autoComplete="off" type="text" value={value} onChange={this.handleChange} />
          <input className='button' type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default App


//   < Form
// handleChange = { this.handleChange }
// handleSubmit = { this.handleSubmit }
// value = { value }
// messages = { messages }
//   />

