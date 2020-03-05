import React, { Component } from 'react';

class InitialPost extends Component {
    render() {
        return (
            <div className='row'>
                <div className='col-md-1'>
                    <p className='rounded bg-success text-light text-center p-1'>{this.props.user}</p>
                </div>
                <div className='col-md-9'>
                    <p className='rounded bg-light p-3'>{this.props.text}</p>
                </div>
                <div className='col-md-2'>
                    <p className='rounded text-light text-right p-1'>{this.props.time}</p>
                </div>
            </div>
        );
    }
}

export default InitialPost; 