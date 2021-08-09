export const  addTodo =(data) =>{
    return {
        type:"ADD_TODO",
        payload: {
            id: new Date().getTime().toString(),
            data:data
        }
    }
}

export const  deleteTodo =(id) =>{
    return {
        type:"DELETE_TODO",
        id
    }
}

export const  editTodo =(newData,eIndex) =>{
    console.log("newData" ,newData , "eIndex" , eIndex)
    return {
        type:"EDIT_TODO",
        payload: {
            id: eIndex,
            data:newData
        }
    }
}

export const  removeTodo =() =>{
    return {
        type:"REMOVE_TODO",
        payload: ''
    }
}

