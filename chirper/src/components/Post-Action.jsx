import React, { Component } from 'react';
import Post from './Post';

class PostAction extends Component {
    constructor() {
        super();
        this.state = {
            user: 'B',
            text: null,
        }
        this.posts = [];
        this.handleClick = this.handleClick.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleClick() {
        this.posts.push(<Post user={this.state.user} text={this.state.text} />)
        console.log(this.posts);
        
    }

    handleInput(e) {
        this.setState({
            text: e.target.value
        })
    }

    render() {
        return (
            <React.Fragment>
                <div>{this.posts}</div>

                <hr></hr>

                <div className='row'>
                    <div className='col-md-1'>
                        <p className='rounded bg-success text-light text-center p-1'>B</p>
                    </div>
                    <div className='col-md-9 input-group'>
                        <textarea className='form-control' placeholder='Penny for your thoughts?' onInput={this.handleInput} id='postInput'></textarea>
                    </div>
                    <div className='col-md-2 text-center'>
                        <button className='btn btn-primary w-100'
                            onClick={this.handleClick}>Post</button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default PostAction;