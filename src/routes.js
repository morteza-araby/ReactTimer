import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Main from 'Components/Main'
import Timer from 'Components/Timer'
import Countdown from 'Components/Countdown'

export default(
    <Route path="/" component={Main}>
        <IndexRoute component={Timer} />
        <Route path='countdown' component={Countdown} />        
    </Route>
)


