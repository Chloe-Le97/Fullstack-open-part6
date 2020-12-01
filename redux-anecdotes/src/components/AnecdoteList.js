import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {voteAna} from '../reducers/anecdoteReducer';
import {notification} from '../reducers/notificationReducer'
import {removeNotification} from '../reducers/notificationReducer'

const AnecdoteList = () =>{
    const anecdotes = useSelector(state => state.ana.filter(item=>item.content.toLowerCase().includes(state.filter)))
    const sortAnecdotes = anecdotes.sort(function (a, b) {
    return b.votes - a.votes;
  });
  
  const dispatch = useDispatch()

  const vote = (anecdote) => {
    const {content,id} = anecdote 
    dispatch(voteAna(anecdote))
    dispatch(notification(`You have voted for '${content}' `,5000))
  //   setTimeout(()=>{
  //     dispatch(removeNotification())
  // },5000)
}


  return(
      <div>
          {sortAnecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
      </div>
  )
}

export default AnecdoteList;