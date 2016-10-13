import React from 'react'
import './PhotoItem.css'

class PhotoItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = { isAddedToAlbum: this.props.isAddedToAlbum }
  }

  addToAlbum () {
    this.setState({ isAddedToAlbum: true })
    this.props.onAddToAlbum(this.props.photo)
  }

  removeFromAlbum () {
    this.setState({ isAddedToAlbum: false })
    this.props.onRemoveFromAlbum(this.props.photo)
  }

  renderAddToAlbum () {
    if (this.state.isAddedToAlbum) {
      return <button className='add-button default-button' onClick={() => this.removeFromAlbum()}><i className='fa fa-folder' aria-hidden='true' /> Added to album</button>
    }
     return <button className='add-button default-button' onClick={() => this.addToAlbum()}><i className='fa fa-folder-o' aria-hidden='true' /> Add to album</button>
  }

  render () {
    return (
      <div className='photo-item'>
        <img src={this.props.url} alt={this.props.title} />
        {(this.props.createdAlbums.length > 0) ? this.renderAddToAlbum() : null}

      </div>
    )
  }
}

export default PhotoItem
