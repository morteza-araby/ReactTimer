import React from 'react'
import Clock from 'Components/Clock'
import CountdownForm from 'Components/CountdownForm'

class Countdown extends React.Component {

    constructor(props, context) {
        super(props, context)

        this.state = {
            count: 0
        }
        this.handleSetCountdown = this.handleSetCountdown.bind(this)
    }

    handleSetCountdown(seconds) {
        this.setState({
            count: seconds
        })
    }
    render() {
        var {count} = this.state
        return (
            <div>
                <Clock totalSeconds={count} />
                <CountdownForm onSetCountdown={this.handleSetCountdown} />
            </div>
        )
    }
}

export default Countdown