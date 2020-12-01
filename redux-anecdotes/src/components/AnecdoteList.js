import React from 'react'
import { connect } from 'react-redux'
import {voteAna} from '../reducers/anecdoteReducer';
import {notification} from '../reducers/notificationReducer'

const AnecdoteList = (props) =>{
  const vote = (anecdote) => {
    const {content,id} = anecdote 
    props.voteAna(anecdote)
    props.notification(`You have voted for '${content}' `,5000)
}


  return(
      <div>
          {props.sortAnecdotes.map(anecdote =>
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

const mapStateToProps = (state) => {

  const anecdotes = state.ana.filter(item=>item.content.toLowerCase().includes(state.filter.toLowerCase()))
  const sortAnecdotes = anecdotes.sort(function (a, b) {
    return b.votes - a.votes;
  });
  return {sortAnecdotes: sortAnecdotes}

}

const mapDispatchToProps = {
  voteAna,notification
}


const ConnectedAnecdoteList = connect(mapStateToProps,mapDispatchToProps)(AnecdoteList)
export default ConnectedAnecdoteList