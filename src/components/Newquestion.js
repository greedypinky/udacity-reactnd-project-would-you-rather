import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../action/questions'

class NewQuestion extends Component {

  state = {
    option1: '',
    option2: ''
  }

  handleChangeOption1 = (e) => {
    const text = e.target.value
    this.setState(() => ({
      option1: text
    }))
  }

  handleChangeOption2 = (e) => {
    const text = e.target.value
    this.setState(() => ({
      option2: text
    }))
  }

  handleSubmit = (e, author) => {
    e.preventDefault()
    const { dispatch } = this.props
    const { option1, option2 } = this.state
    dispatch(handleAddQuestion(option1, option2))
    this.setState(() => ({
      option1: '',
      option2: ''
    }))
    this.props.history.push(`/`)
  }

  render() {
    const { authedUser } = this.props
    const { option1, option2 } = this.state
    return (
      <div className='center'>
        <div className='Container'>
          <h2>Create New Question</h2>
          <form className='question-info' onSubmit={this.handleSubmit}>
            <div>
              <h4>Complete the question</h4>
              <br></br>
              <span>Would you rather</span>
              <br></br>
              <div>
                <div>
                  <textarea id="option1" placeholder="Enter optionOne text here" className='textarea' maxLength={280} value={option1} onChange={this.handleChangeOption1}></textarea>
                </div>
                <span> OR </span>
                <div>
                  <textarea id="option2" placeholder="Enter optionTwo text here" className='textarea' maxLength={280} value={option2} onChange={this.handleChangeOption2}></textarea>
                </div>
              </div>
              <div>
                <button className='btn' type='submit' disabled={option1 === '' || option2 === '' || option1 === option2} onClick={(e) => { this.handleSubmit(e, authedUser) }}>
                  Submit
                      </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser: authedUser
  }
}

export default connect(mapStateToProps)(NewQuestion)