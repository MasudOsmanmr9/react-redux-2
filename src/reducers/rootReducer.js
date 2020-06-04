const initState = {
    posts : [
        {id:'1',title:'aStala bista',body:'spanish language may be ,lets talk something new (a+b)^2 = a^2+2ab+b^2'},
        {id:'2',title:'hamb burger',body:'its a great burger, its so delicious that you will close your eyes just yummy'},
        {id:'3',title:'Sausage',body:'sausage looks like a roll, it\'s a blunder of meat '},
    ]
}

const rootReducer = (state = initState, action) => {
    console.log('action from root reducer',action)
    if(action.type === 'DELETE_POST'){
        let newPost = state.posts.filter(post =>{
            return action.id !== post.id
        })
        console.log('state.posts',state.posts)
        return{
            ...state,
            posts:newPost
        }
    }
    return state
}

export default rootReducer;