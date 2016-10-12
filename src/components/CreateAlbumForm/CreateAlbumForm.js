import React from 'react';
import { reduxForm } from 'redux-form';

class CreateAlbumForm extends React.Component {
  render() {
    const { fields: {albumName}, handleSubmit } = this.props
    return (
      <div>
        <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="albumName">Album Name</label>
          <input type="text" {...albumName}/>
        </div>
        <button onClick={handleSubmit} type="submit">Create Album</button>
      </form>
      </div>
    );
  }
}

// Decorate the form component
CreateAlbumForm = reduxForm({
  form: 'createAlbum',
  fields: ['albumName']
})(CreateAlbumForm);

export default CreateAlbumForm;
