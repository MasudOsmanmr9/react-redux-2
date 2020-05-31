import React,{Component} from 'react'

const TodoList = ({todos,DeleteTodo})=>{

    return(
    <div>
        <h1>todo list </h1>
        <ul>
            {todos.length ? todos.map(todo=>{
                return (<li key={todo.id} onClick={()=>{DeleteTodo(todo.id)}}>
                    {todo.todo} <span> X</span>
                    </li>)
            }):
            (<h1>No more toods, add some!!</h1>)
            }
        </ul>
    </div>
    )
}

export default TodoList;