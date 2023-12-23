import React, { Component } from 'react'
import resource from '../resources/quizQuestion.json'

export default class Mainpage extends Component {
    state = {
        q: resource[0].question,
        opta: resource[0].optionA,
        optb: resource[0].optionB,
        optc: resource[0].optionC,
        optd: resource[0].optionD,
        ct: 0,
        qn: 1
    }

    nextque = () => {
        const { ct } = this.state;
        const { qn } = this.state;
        if (ct + 1 < resource.length) {
            this.setState({
                q: resource[ct + 1].question,
                opta: resource[ct + 1].optionA,
                optb: resource[ct + 1].optionB,
                optc: resource[ct + 1].optionC,
                optd: resource[ct + 1].optionD,
                ct: ct + 1,
                qn: qn + 1
            })
        }
        if (this.state.qn == 15) {
            alert("End of the quiz")
        }
    }

    prevque = () => {
        const { ct } = this.state;
        const { qn } = this.state;
        if (ct - 1 >= 0) {
            this.setState({
                ct: ct - 1,
                q: resource[ct - 1].question,
                opta: resource[ct - 1].optionA,
                optb: resource[ct - 1].optionB,
                optc: resource[ct - 1].optionC,
                optd: resource[ct - 1].optionD,
                qn: qn - 1
            })
        }
    }

    quit = () => {
        alert("Are you sure you want to Quit?")
        window.location.reload;
        this.setState({
            q: resource[0].question,
            opta: resource[0].optionA,
            optb: resource[0].optionB,
            optc: resource[0].optionC,
            optd: resource[0].optionD,
            ct: 0,
            qn: 1   
        })
    }


    render() {
        return (
            <div className='main-body'>
                <h1>Question</h1>
                <h5>{this.state.qn} of 15</h5>
                <h3>{this.state.q}</h3>
                <div className='mcq'>
                    <div>
                        <button>{this.state.opta}</button>
                        <button>{this.state.optb}</button>
                    </div>
                    <div>
                        <button>{this.state.optc}</button>
                        <button>{this.state.optd}</button>
                    </div>
                </div>
                <div className='options'>
                    <button className='prev' onClick={this.prevque}>Previous</button>
                    <button className='nxt' onClick={this.nextque}>Next</button>
                    <button className='quit' onClick={this.quit}>Quit</button>
                </div>
            </div>
        )
    }
}
