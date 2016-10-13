import React, { Component } from 'react'
import PhotoList from '../components/PhotoList/PhotoList'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions'
import Search from '../components/Search/Search'

class MainContainer extends Component {
  render () {
    return (
      <div>
        <div className='row'>
          <Search onSearchTermChange={this.props.actions.requestPhotosByTag} />
        </div>
        <PhotoList photos={this.props.photos} isLoading={this.props.photos.isLoading} />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    photos: state.photos
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)
