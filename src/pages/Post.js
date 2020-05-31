import React,{Component} from 'react'
import axios from 'axios'
class Post extends Component{
    state={
        post:null    
    }
    componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.post_id}`)
        .then((res)=>{
            console.log(res)
            this.setState({
                post:res.data
            })
        })
    }
    render(){
        const post = this.state.post?(
            <div className="post">
                <h4 className="center">{this.state.post.title}</h4>
                <p>{this.state.post.body}</p>
            </div>
        ):(
            <h1>loading...</h1>
        )

        return(
            <div className="container">
              {post}
            </div>
        )
    }
}

export default Post