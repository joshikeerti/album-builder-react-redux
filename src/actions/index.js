import request from 'superagent';

export const REQUEST_PHOTOS_BY_TAG_STARTED = 'REQUEST_PHOTOS_BY_TAG_STARTED'
export const REQUEST_PHOTOS_BY_TAG = 'REQUEST_PHOTOS_BY_TAG';
export const REQUEST_PHOTOS_BY_TAG_FAILED= 'REQUEST_PHOTOS_BY_TAG_FAILED'
export const REQUEST_PHOTOS_BY_LOCATION = 'REQUEST_PHOTOS_BY_LOCATION';
export const ADD_TO_ALBUM = 'ADD_TO_ALBUM';
export const REMOVE_FROM_ALBUM = 'REMOVE_FROM_ALBUM';
export const CREATE_ALBUM = 'CREATE_ALBUM';

const API_KEY = '4f874a92ad47b0be8d17800d5f98f058';
const API_BASE_URL = `https://api.flickr.com/services/rest/`;

export function requestPhotosByTag(term = null) {
  const API_ENDPOINT = `${API_BASE_URL}?method=flickr.photos.search&media=photos&tag_mode=all&sort=interestingness-desc&api_key=${API_KEY}&tags=${term}&per_page=200&format=json&nojsoncallback=1`
  return (dispatch) => {
    dispatch({ type: REQUEST_PHOTOS_BY_TAG_STARTED });
    return request.get(API_ENDPOINT).then(
      (result) =>  dispatch({ type: REQUEST_PHOTOS_BY_TAG, payload: result }),
      (error) =>  dispatch({ type: REQUEST_PHOTOS_BY_TAG_FAILED, error })
    );
  };

}

export function addToAlbum(photo) {
  return {
    type: ADD_TO_ALBUM,
    payload: photo
  }
}

export function removeFromAlbum(photo) {
  return {
    type: REMOVE_FROM_ALBUM,
    payload: photo
  }
}

export function createAlbum(album) {
  return {
    type: CREATE_ALBUM,
    payload: album
  }
}
