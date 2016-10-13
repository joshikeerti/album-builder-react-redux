import React from 'react';
import '../PhotoItem/PhotoItem.css';

const AlbumItem = (props) => {
    return (
      <div className="photo-item">
        <img src={props.url} alt={props.title}  />
      </div>
    );
  }
export default AlbumItem;
