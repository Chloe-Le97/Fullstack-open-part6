import anecdotesService from '../service/anecdotes'

const getId = () => (100000 * Math.random()).toFixed(0)

// const asObject = (anecdote) => {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: 0
//   }
// }

// const initialState = anecdotesAtStart.map(asObject)

const anaReducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch(action.type){
    case 'VOTE':{
      return state.map(n => n.id !== action.data.id ? n : action.data)
    }
    case 'ADD':{
      return [...state,action.data]
    }
    case 'INIT_ANEC':
      return action.data
    default:
  return state
  }
}

export const initializeAnec = () => {
  return async dispatch => {
    const items = await anecdotesService.getAll()
    dispatch({
      type: 'INIT_ANEC',
      data: items,
    })
  }
}

export const voteAna = (anecdote) => {
  return async dispatch => {
    const anecdoteToUpdate = {...anecdote, votes: anecdote.votes + 1}
    const votedAnecdote = await anecdotesService.updateAna(anecdoteToUpdate)
    dispatch({
      type: 'VOTE',
      data: votedAnecdote
    })
  }
}

export const createAnac = (content) =>{
  return async dispatch =>{
    const newNote = await anecdotesService.createNew(content)  
    dispatch({
      type:'ADD',
      data:newNote
    });
  }
}

export default anaReducer