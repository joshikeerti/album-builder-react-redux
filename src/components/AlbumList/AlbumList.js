import React from 'react'
import AlbumItem from '../AlbumItem/AlbumItem'
import '../PhotoList/PhotoList.css'

const AlbumList = (props) => {
  const AlbumItems = props.photos.map((photo) => {
    const IMAGE_URL = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
    return (
      <AlbumItem key={photo.id}
        id={photo.id}
        url={IMAGE_URL}
        title={photo.title}
        secret={photo.secret}
        server={photo.server}
        farm={photo.farm} />
    )
  })

  return (
    <div className='photo-list'>{AlbumItems}</div>
  )
}

export default AlbumList
