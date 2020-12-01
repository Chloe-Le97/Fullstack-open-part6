import React from 'react'
import { useDispatch } from 'react-redux'
import { connect } from 'react-redux' 
import {createAnac} from '../reducers/anecdoteReducer'
import {notification} from '../reducers/notificationReducer'

const AnecdoteForm = (props) =>{
    const dispatch = useDispatch()

    const addNew = async (event) =>{
        event.preventDefault();
        const content = event.target.note.value;
        event.target.note.value = '';  
        props.createAnac(content);
        props.notification('Add new anecdote sucessful',5000)
      }
    return (
        <form onSubmit={addNew}>
            <input name="note" />
            <button type="submit">add</button>
        </form>
    )

}

const mapDispatchToProps = {
    createAnac,notification
  }

export default connect(null,mapDispatchToProps)(AnecdoteForm);