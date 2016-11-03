import React from 'react'
import Clock from 'Components/Clock'

class Countdown extends React.Component {
    render(){
        return (
            <div>
                <Clock totalSeconds={129} />
            </div>
        )
    }
}

export default Countdown