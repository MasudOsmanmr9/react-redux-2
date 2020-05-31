import React,{Component} from 'react';
// import TodoList from './TodoList'
// import AddTodo from './AddTodo'

import {BrowserRouter, Route,Switch} from 'react-router-dom'

//pages
import NavBar from './components/Navbar.js'
import Home from './pages/Home'
import TodoListPage from './pages/TodoListPage.js'
import About from './pages/About.js'
import Contact from './pages/Contact.js'
import Post from './pages/Post'

class App extends Component {
  
  render(){  
    return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/todo" component={TodoListPage}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route path="/:post_id" component={Post}></Route>
          </Switch>
        {/* <TodoListPage/> */}
      </div>
    </BrowserRouter>
    );
  };
}

export default App;
