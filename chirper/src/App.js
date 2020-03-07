import React, { Component } from 'react';
import InitialPost from './components/Initial-Post';

let number = 4;
const postsArr = [
  { user: 'W', text: 'Blah.. It has rained TOO much this year :/', time: 'Earlier', id: 'initial1' },
  { user: 'P', text: 'Sometimes I carry cash in my wallet just to make it seem full, even though I only pay with card. #confessions', time: 'Earlier', id: 'initial2' },
  { user: 'S', text: 'Pizza is the best. The. Best.', time: 'Earlier', id: 'initial3' }];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasSignedIn: false,
      user: '',
      text: '',
      time: '',
      id: '',
      updatedPostsArr: postsArr
    }


    this.handleUsername = this.handleUsername.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleSignIn() {
    this.setState({
      hasSignedIn: true
    })
  }

  handleUsername(event) {
    this.setState({
      user: event.target.value[0]
    })
  }

  handleClick() {
    if (document.getElementById('postInput').value === '') {

    } else {
      postsArr.push({ user: this.state.user, text: this.state.text, time: this.state.time, id: this.state.id })
      this.setState({
        updatedPostsArr: postsArr
      })
      document.getElementById('postInput').value = '';
      setTimeout(() => document.getElementById(this.state.id).scrollIntoView(), 100);
      number++;
    }
  }

  handleInput(event) {
    this.setState({
      text: event.target.value,
      time: (new Date()).toLocaleTimeString(),
      id: 'post' + number
    })
  }

  render() {
    if (!(this.state.hasSignedIn)) {
      return (
        <div>
          <div className='row justify-content-center bg-success rounded'>
            <img className='rounded' src='http://clipart-library.com/images/8i6o8XGBT.jpg' alt='camper logo' width='100px' height='100px'></img>
          </div>

          <hr></hr>

          <div className='column text-center'>
            <div className='input-group'>
              <input
                className='form-control mx-3'
                placeholder='Username'
                onChange={this.handleUsername}
              >
              </input>
            </div>
            <div className=''>
              <button className='btn btn-primary my-3' onClick={this.handleSignIn}>Advance</button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>

          <div className='row justify-content-center bg-success rounded'>
            <img className='rounded' src='http://clipart-library.com/images/8i6o8XGBT.jpg' alt='camper logo' width='100px' height='100px'></img>
          </div>

          <div id='navBar'><a href='' className='text-white' id='logoutLink'>Logout</a></div>

          <hr></hr>

          <div id='postsDiv'>
            <InitialPost posts={this.state.updatedPostsArr} />
          </div>

          <hr></hr>

          <div className='row' id='inputDiv'>
            <div className='col-md-1'>
              <p className='rounded bg-success text-light text-center p-1'>{this.state.user}</p>
            </div>
            <div className='col-md-9 form-group'>
              <textarea className='form-control' placeholder='Penny for your thoughts?' id='postInput' onChange={this.handleInput}></textarea>
            </div>
            <div className='col-md-2 text-center form-group'>
              <a href={'#' + this.state.id}>
                <button className='btn btn-primary w-100' type='submit' onClick={this.handleClick}>Post</button>
              </a>
            </div>
          </div>

        </div>
      );
    }

  }

}

export default App;
