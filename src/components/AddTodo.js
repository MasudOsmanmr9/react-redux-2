import React,{Component} from 'react'

class AddTodo extends Component{
    state = {
        todo:''
    }
    handelOnChange =(e)=>{

        this.setState({
            todo:e.target.value
        })
    }
    handelOnSbmit = (e)=>{
        e.preventDefault();
        console.log("new todo :",this.state.todo)
        this.props.AddTodo(this.state)
        this.setState({
            todo:''
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handelOnSbmit}>
                    <input type='text' onChange={this.handelOnChange} value={this.state.todo} />
                    <button onClick={this.handelOnSbmit}>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddTodo