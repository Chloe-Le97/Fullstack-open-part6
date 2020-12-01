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

export const notification = (data,time) =>{
    return async dispatch=>{
        await dispatch({
            type:'SET_NOTI',
            data
        })
        setTimeout(()=>{
            dispatch({
                type:'REMOVE_NOTI'
            })
        },time)
    } 
}


export default notiReducer