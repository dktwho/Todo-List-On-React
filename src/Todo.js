import React, { Component } from 'react'

export default class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      items: []
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      input: e.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.setState({
      input:this.state.input,
      items: [...this.state.items, this.state.input],
      input: ''
    })
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <input value={this.state.input} onChange={this.handleChange} />
        <button type='submit'>Submit</button>


        </form>

        <ol>
          {this.state.items.map((item, index) => (
            <li key={index}> {item}</li>
          ))}
        </ol>
     
      </div>
    )
  }
}

