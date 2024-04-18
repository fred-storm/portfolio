import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css'
import ReorderIcon from '@mui/icons-material/Reorder';


function Navbar() {

    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks)
    }

  return (
    <div className='navbar'>
        <div className='leftSide' id={openLinks ? "open":"close"}>
            <div className='hiddenLinks'>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            </div>
        </div>
        <div className='rightSide'>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <button onClick={toggleNavbar}>
            <ReorderIcon />
            </button>
        </div>

    </div>
  )
}

export default Navbar