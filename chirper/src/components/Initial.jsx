import React, { Component } from 'react';
import InitialPost from './Initial-Post';
import PostAction from './Post-Action';

class Initial extends Component {
    render() {
        return (
            <div>
                <div className='jumbotron text-center'>
                    <h1>Chirper</h1>
                </div>

                <hr></hr>

                <InitialPost user='W' text='Blah.. It has rained TOO much this year :/' time='9:28 am' />

                <InitialPost user='P' text='Sometimes I carry cash in my wallet just to make it seem full, even though I only pay with card. #confessions' time='12:28pm' />

                <InitialPost user='S' text='Pizza is the best. The. Best.' time='2:28 pm' />

                <PostAction />
            </div>
        );
    }
}

export default Initial;