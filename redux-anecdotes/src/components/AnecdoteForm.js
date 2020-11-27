import React from 'react'
import { useDispatch } from 'react-redux'
import {createNew} from '../reducers/anecdoteReducer'
import {notification} from '../reducers/notificationReducer'
import {removeNotification} from '../reducers/notificationReducer'

const AnecdoteForm = (props) =>{
    const dispatch = useDispatch()

    const addNew = (event) =>{
        event.preventDefault();
        const content = event.target.note.value;
        event.target.note.value = '';
        dispatch(createNew(content));
        dispatch(notification('Add new anecdote sucessful'))
        setTimeout(()=>{
            dispatch(removeNotification())
        },5000)
      }
    return (
        <form onSubmit={addNew}>
            <input name="note" />
            <button type="submit">add</button>
        </form>
    )

}

export default AnecdoteForm;