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
            // .then(d => console.log(d.posts));
    }

    // updatePosts = (data) =>{
    //     this.setState({
    //         allposts: data
    //     })
    // }
    // useless change
    render() {
        const renderPosts = this.state.allposts.map(post => (
            <div key={post.id} id="list-items">
                <p>Title: {post.title}</p>
                <p>Name: {post.name}</p>
                <p>Story: {post.story}</p>
            </div>
            // <li key={post.id} id="list-items">
            //     Title: {post.title}
            //     Name: {post.name}
            //     Story: {post.story}
            // </li>
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