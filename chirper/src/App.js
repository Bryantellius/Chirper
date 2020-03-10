import React, { Component } from 'react';
import Posts from './components/Posts';
import SignIn from './components/SignIn';
import Header from './components/Header';
import PostInput from './components/PostInput';

let number = 4;
const postsArr = [
  { user: 'W', text: 'Blah.. It has already rained TOO much this year :/', time: 'Earlier', id: 'initial1' },
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
      id: 'initial3',
      updatedPostsArr: postsArr
    }

  }

  handleSignIn = () => {
    if (this.state.user === '') {

    } else {
      this.setState({
        hasSignedIn: true
      })
      setTimeout(() => document.getElementById(this.state.id).scrollIntoView(), 100);
    }

  }

  handleUsername = (event) => {
    this.setState({
      user: event.target.value[0]
    })
  }

  handleClick = () => {
    if (document.getElementById('postInput').value === '') {

    } else {
      postsArr.push({ user: this.state.user, text: this.state.text, time: this.state.time, id: this.state.id })
      this.setState({
        updatedPostsArr: postsArr
      })
      document.getElementById('postInput').value = '';
      setTimeout(() => document.getElementById(this.state.id).scrollIntoView(), 100);
    }
    number++;
  }

  handleInput = (event) => {
    this.setState({
      text: event.target.value,
      time: (new Date()).toLocaleTimeString(),
      id: 'post' + number
    })
  }

  logout = () => {
    this.setState({
      hasSignedIn: false
    })
  }

  render() {
    if (!(this.state.hasSignedIn)) {
      return <SignIn
        handleUsername={this.handleUsername}
        handleSignIn={this.handleSignIn} />
    } else {
      return (
        <div>

          <Header />

          <div id='navBar'><p onClick={this.logout} className='text-white' id='logoutLink'>Logout</p></div>

          <hr></hr>

          <div id='postsDiv'>
            <Posts posts={this.state.updatedPostsArr} />
          </div>

          <hr></hr>

          <PostInput
            user={this.state.user}
            handleClick={this.handleClick}
            handleInput={this.handleInput}
            id={this.state.id} />
        </div>
      );
    }
  }
}

export default App;
