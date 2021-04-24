import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import bookReducer from './bookReducer'

import authReducer from './authReducer'
import errorReducer from './errorReducer'
import loaderReducer from './loaderReducer'
import trainingReducer from './trainingReducer'
import modalReducer from './modalReducer'

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: [],
  // whitelist: ['token'],
  // whitelist: ['accessToken', 'refreshToken', 'sid'],
}

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  training: trainingReducer,
  book: bookReducer,
  loading: loaderReducer,
  error: errorReducer,
  modal: modalReducer,
})
export default rootReducer
