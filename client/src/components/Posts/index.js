import React from 'react';
import './style.css';

class Posts extends React.Component{

    state = {
        allposts: []
    }

    componentDidMount(){
        this.getData();
    }

    getData(){
        fetch('http://localhost:3000/posts')
            .then(r => r.json())
            .then(data => {
                this.setState({allposts: data.posts})
            })
    }

    deletePost(id){
        const options = {
            method: 'DELETE'
        };
        
        fetch(`http://localhost:3000/posts/${id}`, options)
            .then(this.getData())
            .catch(console.warn())
    }

    render() {
        const renderPosts = this.state.allposts.map(post => (
            <div key={post.id} id="list-items">
                <p><b>Title:</b> {post.title}</p>
                <p><b>Name:</b> {post.name}</p>
                <p><b>Story:</b> {post.story}</p>
                <button onClick={()=> this.deletePost(post.id)}>Delete</button>
            </div>
        ))

        return (
                <div id="content">
                    <h2>A collection of your stories</h2>
                     { renderPosts }
                </div>
        );
    }
}

export default Posts;