import React from 'react'
import Navigation from 'Components/Navigation'

const Main = (props) => {
  return (
    <div>
    <Navigation />
      <div className="row">
        <div className="columns medium-6 large-4 small-centered">        
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default Main
