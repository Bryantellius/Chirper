import React, { Component } from 'react';

class Post extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className='row'>
                <div className='col-md-1'>
                    <p className='rounded bg-success text-light text-center p-1'>B</p>
                </div>
                <div className='col-md-9 input-group'>
                    <input className='form-control' placeholder='Penny for your thoughts?'></input>
                </div>
                <div className='col-md-2 text-center'>
                    <button className='btn btn-primary w-100'>Post</button>
                </div>
            </div>
        );
    }
}

export default Post; 