componentDidUpdate() {
  console.log(this.state.messages)
}


handleChange = (event) => {
  this.setState({ value: event.target.value });
}

handleSubmit = (event) => {
  let { value, messages } = this.state

  console.log('this fucking works')

  event.preventDefault();

  this.setState({ messages: [...messages, value] })

  this.socket.emit('chat message', messages.value)
}



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      messages: []
    }
  }

  render() {
    let { value, messages } = this.state

    return (
      <div>
        <Form
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          value={value}
          messages={messages}
        />
      </div>
    )
  }
}