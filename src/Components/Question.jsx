import React, { Component } from 'react'
import './Question.css'

export default class Question extends Component {

    render() {
        return (
        <details className='element'>
            <summary className='question'>{this.props.question}</summary>
            <div className='answer'>{this.props.answer}</div>
        </details>
        )
    }
}
