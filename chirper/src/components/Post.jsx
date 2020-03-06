import React, { Component } from 'react';

class Post extends Component {
    constructor(props) {
        super(props);
        this.text = props.text;
        this.hasPosted = props.hasPosted;
        this.time = null;
        this.user = props.user;
    }



    render() {
        return (
            <div className='row'>
                <div className='col-md-1'>
                    <p className='rounded bg-success text-light text-center p-1'>{this.user}</p>
                </div>
                <div className='col-md-9'>
                    <p className='rounded bg-light p-3'>{this.text}</p>
                </div>
                <div className='col-md-2'>
                    <p className='rounded text-light text-right p-1'>{this.time}</p>
                </div>
            </div>
        );

    }
}

export default Post; 