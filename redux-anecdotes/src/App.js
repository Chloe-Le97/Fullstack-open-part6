import React, {useEffect} from 'react'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import {initializeAnec} from './reducers/anecdoteReducer'
import anecdotesService from './service/anecdotes'
import { useDispatch } from 'react-redux'
import Filter from './components/Filter'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
   dispatch(initializeAnec())
  }, [dispatch])

  return (
    <div>
      <h1>Anecdotes</h1>
      <Notification/>
      <Filter/>
      <AnecdoteList  />
      <h2>Create New</h2>
      <AnecdoteForm />
    </div>
  )
}

export default App