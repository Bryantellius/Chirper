import React, { Component } from 'react';
import InitialPost from './components/Initial-Post';

const postsArr = [
  { user: 'W', text: 'Blah.. It has rained TOO much this year :/', time: (new Date()).toLocaleTimeString(), id: 'initial1' },
  { user: 'P', text: 'Sometimes I carry cash in my wallet just to make it seem full, even though I only pay with card. #confessions', time: (new Date()).toLocaleTimeString(), id: 'initial2' },
  { user: 'S', text: 'Pizza is the best. The. Best.', time: (new Date()).toLocaleTimeString(), id: 'initial3' }];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      time: '',
      updatedPostsArr: postsArr
    }



    this.handleClick = this.handleClick.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleClick() {
    postsArr.push({ user: 'B', text: this.state.text, time: this.state.time, id: this.state.time })
    this.setState({
      updatedPostsArr: postsArr
    })
    document.getElementById('postInput').value = '';
  }

  handleInput(event) {
    this.setState({
      text: event.target.value,
      time: (new Date()).toLocaleTimeString()
    })
  }

  render() {
    return (
      <div>

        <div className='jumbotron text-center'>
          <h1>Chirper</h1>
        </div>

        <hr></hr>

        <InitialPost posts={this.state.updatedPostsArr} />

        <hr></hr>

        <div className='row'>
          <div className='col-md-1'>
            <p className='rounded bg-success text-light text-center p-1'>B</p>
          </div>
          <div className='col-md-9 form-group'>
            <textarea className='form-control' placeholder='Penny for your thoughts?' id='postInput' onChange={this.handleInput}></textarea>
          </div>
          <div className='col-md-2 text-center form-group'>
            <button className='btn btn-primary w-100' type='submit' onClick={this.handleClick}>Post</button>
          </div>
        </div>

      </div>
    );
  }

}

export default App;
