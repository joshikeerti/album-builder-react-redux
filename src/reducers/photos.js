import { REQUEST_PHOTOS_BY_TAG, REQUEST_PHOTOS_BY_TAG_STARTED, ADD_TO_ALBUM, REMOVE_FROM_ALBUM, CREATE_ALBUM } from '../actions';

export default function photos(state = {
  photos: [], myAlbum:[], createdAlbums:[], isLoading: false,
}, action) {
  switch (action.type) {
    case REQUEST_PHOTOS_BY_TAG_STARTED:
      return {
        ...state, isLoading:true
      };
    case REQUEST_PHOTOS_BY_TAG:
      return {
        ...state, photos: action.payload.body.photos.photo, isLoading:false
      };
    case CREATE_ALBUM:
      return {
        ...state, createdAlbums: state.createdAlbums.concat(action.payload.albumName)
      };
    case ADD_TO_ALBUM:
      return {
        ...state, myAlbum: state.myAlbum.concat(action.payload)

      };
    case REMOVE_FROM_ALBUM:
    const albumList = (state.myAlbum).filter((e) => {
      return action.payload.id !== e.id
    })
      return {
        ...state, myAlbum: albumList
      };

    default:
    return state;
  }

}
