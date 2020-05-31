import React,{Component} from 'react';
import TodoList from '../components/TodoList'
import AddTodo from '../components/AddTodo'
class TodoListPage extends Component {
  state={
    todos:[
      {id:1,todo:'this is a todo'},
      {id:2,todo:'this is 2nd todo'},
      {id:3,todo:'this is 3rd todo'},
      {id:4,todo:'this is 4th todo'},
      {id:5,todo:'this is 5th todo'},
    ]
  }
  addTodo = (todo)=>{
    todo.id=Math.random()
    this.setState({
      todos:[...this.state.todos,todo]
    })
  }
  deleteTodo = (id)=>{

    let updatedTodos = this.state.todos.filter((todo)=>{
      return id !== todo.id
    })
    console.log('working',updatedTodos,id)
    this.setState({
      todos:updatedTodos
    })
  }
  render(){  
    return (
      <div className="App">
        <h1>
          HEllow this is new todo Project
        </h1>
        <TodoList todos={this.state.todos} DeleteTodo={this.deleteTodo}  />
        <AddTodo AddTodo={this.addTodo} />
      </div>
    );
  };
}

export default TodoListPage;
