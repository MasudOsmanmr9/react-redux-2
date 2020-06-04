import React,{Component} from 'react'
import {connect} from 'react-redux'
// import axios from 'axios'
class Post extends Component{
    // state={
    //     post:null    
    // }
    // componentDidMount(){
    //     axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.post_id}`)
    //     .then((res)=>{
    //         console.log(res)
    //         this.setState({
    //             post:res.data
    //         })
    //     })
    // }
    handelClick = (id)=>{
        this.props.deletePost(id)
        this.props.history.push('/')
    }
    render(){
        // const post = this.state.post?(
            console.log(this.props)
        const post = this.props.post?(
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p className="center">{this.props.post.body}</p>
                <div className="center">
                    <button className="btn grey" onClick={()=>{this.handelClick(this.props.post.id)}}>Delete Post</button>
                </div>
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

const mapStateToProps = (state,ownProps)=>{
    let id = ownProps.match.params.post_id;
    return{
        post : state.posts.find(post => post.id === id)
    }

}

const mapDispatchToProps = (dispatch)=>{
    return{
        deletePost : (id)=>{ dispatch({type:'DELETE_POST',id:id})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Post)