import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions'
import PhotoItem from '../components/PhotoItem/PhotoItem'

class PhotoItemContainer extends Component {
  render () {
    return (
      <PhotoItem id={this.props.id}
        url={this.props.url}
        title={this.props.title}
        secret={this.props.secret}
        server={this.props.server}
        farm={this.props.farm}
        onAddToAlbum={() => this.props.actions.addToAlbum(this.props)}
        onRemoveFromAlbum={() => this.props.actions.removeFromAlbum(this.props)}
        createdAlbums={this.props.albums} />
    )
  }
}

function mapStateToProps (state) {
  return {
    albums: state.photos.createdAlbums
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoItemContainer)
