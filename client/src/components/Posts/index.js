import React from 'react';
import './style.css';

class Posts extends React.Component{

    state = {
        allposts: []
    }

    componentDidMount(){
        fetch('http://localhost:3000/posts')
            .then(r => r.json())
            .then(data => {
                this.setState({allposts: data.posts})
            })
    }

    render() {
        const renderPosts = this.state.allposts.map(post => (
            <div key={post.id} id="list-items">
                <p>Title: {post.title}</p>
                <p>Name: {post.name}</p>
                <p>Story: {post.story}</p>
            </div>
        ))

        return (
                <div>
                    <h2>Your posts are here</h2>
                     { renderPosts }
                </div>
        );
    }
}

export default Posts;