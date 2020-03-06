import React from 'react';

function InitialPost(props) {

    const initialPostsList = 
        props.posts.map((post) =>
            <div className='row' key={post.id}>
                <div className='col-md-1'>
                    <p className='rounded bg-success text-light text-center p-1'>{post.user}</p>
                </div>
                <div className='col-md-9'>
                    <p className='rounded bg-light p-3'>{post.text}</p>
                </div>
                <div className='col-md-2'>
                    <p className='rounded text-light text-right p-1'>{post.time}</p>
                </div>
            </div >
        );

    return (
        <div>{initialPostsList}</div>
    );

}

export default InitialPost; 