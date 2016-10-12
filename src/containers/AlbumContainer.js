import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import AlbumList from '../components/AlbumList/AlbumList';

class AlbumContainer extends React.Component {
  render() {
    return (
      <div>
        <AlbumList photos={ this.props.myAlbum } />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    myAlbum: state.photos.myAlbum,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}



export default connect(mapStateToProps, mapDispatchToProps)(AlbumContainer);
