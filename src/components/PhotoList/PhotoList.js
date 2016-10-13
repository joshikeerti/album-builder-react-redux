import React from 'react'
import PhotoItemContainer from '../../containers/PhotoItemContainer'
import './PhotoList.css'

const PhotoList = (props) => {
  const photoItems = props.photos.photos.map((photo) => {
    const IMAGE_URL = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
    return (
      <PhotoItemContainer
        key={photo.id}
        id={photo.id}
        url={IMAGE_URL}
        title={photo.title}
        secret={photo.secret}
        server={photo.server}
        farm={photo.farm}
        />
    )
  })

  return (
    <div className='photo-list'>
      <div>
        {props.isLoading
          ? <p> Loading ...</p>
          : null }
      </div>
      {photoItems}
    </div>
    )
}

export default PhotoList
