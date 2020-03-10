import React, { Component } from 'react';
import Header from './Header';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.handleUsername = props.handleUsername;
        this.handleSignIn = props.handleSignIn;
    }

    render() {
        return (
            <div>
                <Header />

                <hr></hr>

                <div className='text-center my-3'>
                    <h1>Welcome to Chirper!</h1>
                    <h4>Join the Conversation</h4>
                </div>
                <div className='row justify-content-center' >
                    <div className='form-group text-center w-50' id='signInDiv'>
                        <input
                            className='form-control mx-3 shadow'
                            type='text'
                            placeholder='Username'
                            onChange={this.handleUsername}
                        >
                        </input>
                        <div className='form-group'>
                            <button className='shadow btn btn-primary my-3' onClick={this.handleSignIn}>Log In</button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default SignIn;