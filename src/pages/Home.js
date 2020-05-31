import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import axios from 'axios'

class Home extends Component{
    state={
        posts:[]
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
            console.log(res)
            this.setState({
                posts:res.data.slice(0,10)
            })
        })
    }
    render(){
        const {posts} = this.state
        const postList = posts.length?(
            posts.map((post)=>{
                return(
                    <div className="post card" key={post.id}>
                        <NavLink to={`/${post.id}`}>
                            <div className="card-content">
                                <span className="card-title">{post.title}</span>
                                <p>{post.body}</p>
                            </div>
                        </NavLink>
                    </div>
                )
            })
        ):(<h1>Mo more posts available</h1>)
        return(
            <div className="container">
                <h1>this is home page</h1>
                {postList}
            </div>
        )
    }
}

export default Home