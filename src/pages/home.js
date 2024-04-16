import React from 'react';
import bg_photo from '../assets/bg_photo.png';

export default function home() {
  return (
    <div className='home' style={{backgroundImage: `url(${bg_photo})`}}>
        <div className='main'>
            <h1>Welcome</h1>
            <p>This is my portofloi of projects that I have created or contributed to.
                please feel free to browse around and explore.
            </p>
        </div>
    </div>
  )
}