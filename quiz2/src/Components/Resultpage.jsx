import React, { Component } from 'react'

export default class Resultpage extends Component {
    render() {
        return (
            <div>
                <h1 className='res'>Result</h1>
                <div className='result-body'>
                    <h3>You need more practice</h3>
                    <h1>Your score is 20%</h1>
                    <div className='flex-result'>
                        <div>
                            <h5>Total number of questions</h5>
                            <h5>Number of attempted questions</h5>
                            <h5>Number of correct answers</h5>
                            <h5>Number of wrong answers</h5>
                        </div>
                        <div>
                            <h5>15</h5>
                            <h5>9</h5>
                            <h5>3</h5>
                            <h5>6</h5>
                        </div>
                    </div>
                </div>
                <div className='buttons-move'>
                    <button className='ply-again'>Play Again</button>
                    <button className='back-home'>Back to home</button>
                </div>
            </div>
        )
    }
}
