import React, { Component } from 'react';

class Initial extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <div className='jumbotron text-center'>
                    <h1>Chirper</h1>
                </div>

                <hr></hr>

                <div className='row'>
                    <div className='col-md-1'>
                        <p className='rounded bg-success text-light text-center p-1'>W</p>
                    </div>
                    <div className='col-md-9'>
                        <p className='rounded bg-light p-3'>Blah.. It's rained TOO much this year :/</p>
                    </div>
                    <div className='col-md-2'>
                        <p className='rounded text-light text-right p-1'>9:28 am</p>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-1'>
                        <p className='rounded bg-success text-light text-center p-1'>P</p>
                    </div>
                    <div className='col-md-9'>
                        <p className='rounded bg-light p-3'>Sometimes I carry cash in my wallet just to make it seem full, even though
                        I only pay with card. #confessions</p>
                    </div>
                    <div className='col-md-2'>
                        <p className='rounded text-light text-right p-1'>12:28 pm</p>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-1'>
                        <p className='rounded bg-success text-light text-center p-1'>R</p>
                    </div>
                    <div className='col-md-9'>
                        <p className='rounded bg-light p-3'>Pizza is the best. The. Best.</p>
                    </div>
                    <div className='col-md-2'>
                        <p className='rounded text-light text-right p-1'>2:28 pm</p>
                    </div>
                </div>

                <hr></hr>
            </div>
        );
    }
}

export default Initial;