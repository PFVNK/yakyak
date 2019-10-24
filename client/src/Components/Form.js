import React, { Component } from 'react'

import '../App.css'

const Form = props => {
  return (
    <div>
      <ul id="messages">{props.messages.map(message => (
        <li key={message}>{message}</li>
      ))}</ul>
      <form onSubmit={props.handleSubmit}>
        <input id="m" autoComplete="off" type="text" value={props.value} onChange={props.handleChange} />
        <input className='button' type="submit" value="Submit" />
      </form>
    </div>
  )
}


export default Form
