import React, { Component } from 'react'
import { reduxForm} from 'redux-form'
import * as Actions from '../actions'
import { browserHistory } from 'react-router'

const validate = values => {
  const errors = {};
  if (!values.albumName) {
    errors.albumName = "Please enter an album name.";
  }
  return errors;
};

class CreateAlbumContainer extends Component {
  handleFormSubmit = (data) => {
   this.props.createAlbum(data);
   browserHistory.push('/')
 }

  render() {
      const { fields: {albumName}, handleSubmit } = this.props
      return (
        <div className="row">
          <div className="col-lg-3 col-md-4 col-xs-12">
            <h1>Create an album</h1>
          <form onSubmit={handleSubmit(this.handleFormSubmit)}>
          <div className="form-group">
            <label htmlFor="albumName">Album Name</label>
            <input className="form-control" type="text" {...albumName}/>
            {albumName.touched ? <div className="error-text">{albumName.error}</div> : ''}
          </div>
          <button className="default-button" action="submit">Create my album</button>
        </form>
          </div>
        </div>
      );
  }
}

function mapStateToProps(state) {
  return {

  }
}

export default reduxForm({
  form: 'createAlbum',
  fields: ['albumName'],
  validate
}, mapStateToProps, Actions)(CreateAlbumContainer);
