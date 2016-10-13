import { combineReducers } from 'redux'
import PhotosReducer from './photos'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  photos: PhotosReducer,
  form: formReducer
})

export default rootReducer
