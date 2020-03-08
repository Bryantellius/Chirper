import React, { Component } from 'react';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.handleUsername = props.handleUsername;
        this.handleSignIn = props.handleSignIn;
    }

    render() {
        return (
            <div>
                <div className='row justify-content-center bg-success rounded'>
                    <img className='rounded' src='http://clipart-library.com/images/8i6o8XGBT.jpg' alt='camper logo' width='100px' height='100px'></img>
                </div>

                <hr></hr>
                <div className='row justify-content-center'>
                    <div className='form-group text-center w-50' id='signInDiv'>
                        <input
                            className='form-control mx-3'
                            placeholder='Username'
                            onChange={this.handleUsername}
                        >
                        </input>
                        <div className='form-group'>
                            <button className='btn btn-primary my-3' onClick={this.handleSignIn}>Sign In</button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default SignIn;