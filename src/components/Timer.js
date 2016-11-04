import React from 'react'
import Clock from 'Components/Clock'
import Controls from 'Components/Controls'

class Timer extends React.Component {

    constructor(props, context) {
        super(props, context)

        this.state = {
            count: 0,
            timerStatus: 'paused'
        }

        this.startTimer = this.startTimer.bind(this)
        this.handleStatusChange = this.handleStatusChange.bind(this)
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.timerStatus !== prevState.timerStatus) {
            switch (this.state.timerStatus) {
                case 'started':
                    this.startTimer()
                    break
                case 'stopped':
                    this.setState({ count: 0, timerStatus: 'stopped' })
                case 'paused':
                    clearInterval(this.timer)
                    this.timer = undefined
                    break
            }
        }
    }
    startTimer() {
        this.timer = setInterval(() => {
            var newCount = this.state.count + 1
            this.setState({
                count: newCount >= 0 ? newCount : 0
            })

        }, 1000)
    }

    handleStatusChange(newStatus) {
        this.setState({ timerStatus: newStatus })
    }
    render() {
        var {count, timerStatus} = this.state
        var renderControlArea = () => {
            return <Controls
                countdownStatus={timerStatus}
                onStatusChange={this.handleStatusChange} />
        }
        return (
            <div>
                <h1 className='page-title'> Timer App</h1>
                <Clock totalSeconds={count} />
                {renderControlArea()}
            </div>
        )
    }
}

export default Timer