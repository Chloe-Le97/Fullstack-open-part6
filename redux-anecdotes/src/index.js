import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import anaReducer from './reducers/anecdoteReducer'
import notiReducer from './reducers/notificationReducer'
import filterReducer from './reducers/filterReducer'

import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({
  ana: anaReducer,
  noti: notiReducer,
  filter: filterReducer
})

const store = createStore(reducer,composeWithDevTools())

store.subscribe(() => console.log(store.getState()))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)