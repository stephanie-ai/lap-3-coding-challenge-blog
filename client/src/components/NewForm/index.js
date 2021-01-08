import React, { Component } from 'react';
import './style.css';

class NewForm extends Component{

    state = {
        title: "",
        name: "",
        story: "",
    };

    handleChange = e => this.setState({[e.target.name]: e.target.value});

    handleSubmit = (e) => {
        e.preventDefault();

        const postData = {
            title: this.state.title,
            name: this.state.name,
            story: this.state.story
        };

        const options = {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: { "Content-Type": "application/json" }
        };

        // fetch('http://localhost:3000/posts', options)
        //     .then(r => r.json())
        //     .then(this.props.history.push('/posts'))
        //     .catch(console.warn)

        // this.props.history.push('/posts');
        
        fetch('http://localhost:3000/posts', options)
            .then(r => r.json())
            .then(resp => {
                console.log(resp)
                const {id, err} = resp
                if(err) { throw Error(err) }
                else if(id) {this.props.history.push('/posts')}
            })
            .catch(console.warn);
    };

    checkFormInputs = () => Object.values(this.state).some(i =>!i);

    render() {
        return (
            <div id="content">
             <form onSubmit={this.handleSubmit}>
                <div className="formInput">
                    <label htmlFor="title">Title  </label>
                    <input type="text" name="title"  value={this.state.title} onChange={this.handleChange} id="title" />
                </div><br></br>
                
                <div className="formInput">
                    <label htmlFor="name">Your name  </label>
                    <input type="text" name="name" id="name" className="formInput" value={this.state.name} onChange={this.handleChange} />
                </div><br></br>
                
                <div className="formInput">
                    <label htmlFor="story">Your story...  </label>
                    <input type="text" name="story" id="story" className="formInput" value={this.state.story} onChange={this.handleChange} />

                    <input type="submit" disabled={this.checkFormInputs()} id="submit" value="Publish" />
                </div>
             </form>
            </div>
        );
    }
}

export default NewForm;