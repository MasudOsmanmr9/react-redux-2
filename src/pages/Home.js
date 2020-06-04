import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'
class Home extends Component{
    // state={
    //     posts:[]
    // }
    // componentDidMount(){
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //     .then((res)=>{
    //         console.log(res)
    //         this.setState({
    //             posts:res.data.slice(0,10)
    //         })
    //     })
    // }

    render(){
        console.log(this.props)
        // const {posts} = this.state
        const {posts} = this.props
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

const mapStateToProps = (state)=>{
    return {
        posts:state.posts
    }
}

export default connect(mapStateToProps)(Home)