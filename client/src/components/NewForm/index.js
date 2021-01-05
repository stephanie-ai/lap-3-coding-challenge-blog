import React, { Component } from 'react';

class NewForm extends Component{

    state = {
        title: "",
        name: "",
        story: ""
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

        fetch('http://localhost:3000/posts', options)
            .then(r => r.json())
            .catch(console.warn)

        this.props.history.push('/posts');
    };

    checkFormInputs = () => Object.values(this.state).some(i =>!i);

    render() {
        return (
             <form onSubmit={this.handleSubmit}>
                <label for="title">Title</label>
                <input type="text" name="title" value={this.state.title} onChange={this.handleChange} id="title" />

                <label for="name">Your name</label>
                <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange} />

                <label for="story">Your story...</label>
                <input type="text" name="story" id="story" value={this.state.story} onChange={this.handleChange} />

                <input type="submit" disabled={this.checkFormInputs()} id="submit" value="Publish" />
             </form>
        );
    }
}

export default NewForm;