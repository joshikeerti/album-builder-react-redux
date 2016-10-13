import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class HeaderContainer extends Component {
  render() {
    const albums = this.props.albums.map((album,index) => {
      return(
            <Link key={index} to="/album" className="custom-nav-item">{album}</Link>
          );
      });
    return (
          <nav className="navbar navbar-light">
            <Link className="navbar-brand" to="/"><span className="lnr lnr-camera"></span></Link>
          <ul className="nav navbar-nav">
          {(albums.length > 0) ?
            <li className="nav-item">{albums}</li> :
          <li className="nav-item">
            <Link to="/createalbum" className="custom-nav-item">Create an album</Link>
          </li>}

          </ul>
          </nav>
    );
  }
}

function mapStateToProps(state) {
    return {
      albums: state.photos.createdAlbums
    };
}

export default connect(mapStateToProps)(HeaderContainer);
