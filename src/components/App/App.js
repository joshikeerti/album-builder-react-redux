/**
 * App component
 * Header is a common element and the rest of the views load based on the router configuration
 */

import React from 'react'
import HeaderContainer from '../../containers/HeaderContainer'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <HeaderContainer />
        {this.props.children}
      </div>
    )
  }
}
