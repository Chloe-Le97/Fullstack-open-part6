const notiReducer = (state='',action) =>{

    switch(action.type){
        case 'SET_NOTI':
            return action.data
        case 'REMOVE_NOTI':
            return null
        default:
            return state
    }

}

export const notification = (data) =>{
    return{
        type:'SET_NOTI',
        data
    }
}

export const removeNotification = () =>{
    return{
        type:'REMOVE_NOTI'
    }
}

export default notiReducer