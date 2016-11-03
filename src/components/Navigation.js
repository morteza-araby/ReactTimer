import React, { PropTypes } from 'react'
import { Link, IndexLink } from 'react-router'

class Navigation extends React.Component {

    constructor(props, context) {
        super(props, context)

    }

    render() {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Timer App</li>
                        <li>
                            <IndexLink to="/" activeClassName="active-link" activeStyle={{ fontWeight: 'bold' }}>Timer</IndexLink>
                        </li>
                        <li>
                            <Link to="/countdown" activeClassName="active-link" activeStyle={{ fontWeight: 'bold' }}>Countdown</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">                        
                        <li className="menu-text">Created by <a href="https://github.com/morteza-araby" target=" _blank">Morteza Araby</a></li>                           
                    </ul>
                </div>

            </div>
        )
    }
}

export default Navigation
