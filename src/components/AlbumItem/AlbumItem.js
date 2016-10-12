import React from 'react';
import '../PhotoItem/PhotoItem.css';

class AlbumItem extends React.Component {
  render() {
    return (
      <div className="photo-item">
        <img src={this.props.url} alt={this.props.title}  />
      </div>
    );
  }
}
export default AlbumItem;
