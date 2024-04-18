import React from 'react';
import bg_photo from '../assets/bg_photo.png';
import '../styles/home.css'

export default function home() {
  return (
    <div className='home' style={{backgroundImage: `url(${bg_photo})`}}>
        <div className='main'>
            <div className='title'>
                <h1>Hello</h1>
                <h2>My name is Adam</h2>
            </div>
            <div className='body'>
            <p>This is my portofloi of projects that I have created or contributed to.
                please feel free to browse around and explore.
            </p>
            </div>
        </div>
    </div>
  )
}