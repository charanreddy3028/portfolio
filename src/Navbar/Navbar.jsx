import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import {BsLinkedin,BsGithub} from 'react-icons/bs'
import {SiTableau} from 'react-icons/si'

const Navbar = () => {
  const [menu,setMenu] = useState('/')


  return (
    <div>
        <nav className='nav'>
            <h1 className='head'>Charan's Portfolio</h1>
            <div className="nav-icons" >
              
                <li ><a href='https://www.linkedin.com/in/sricharangunupati/' target='_blank' ><BsLinkedin /></a></li>
                <li><a href="https://github.com/charanreddy3028"><BsGithub/></a></li>
                <li><a href="https://public.tableau.com/app/profile/sricharan.gunupati/vizzes"><SiTableau/></a></li>

              
            </div>
            <p className='nav-list'>
                <li onClick={() => setMenu('/')}><Link to='/'  >Home</Link>{menu ==='/' && <hr/>}</li>
                <li onClick={() => setMenu('about')}><Link to='/about'>About</Link>{menu ==='about' && <hr/>}</li>
                <li onClick={() => setMenu('skills')}><Link to='/skills' >Skils</Link>{menu ==='skills' && <hr/>}</li>
                <li onClick={() => setMenu('education')}><Link to='/education' >Education</Link>{menu ==='education' && <hr/>}</li>
                <li onClick={() => setMenu('projects')}><Link to='/projects' >Projects</Link>{menu ==='projects' && <hr/>}</li>
                <li onClick={() => setMenu('resume')}><Link to='/resume' >  Resume</Link>{menu ==='resume' && <hr/>}</li>
                <li onClick={() => setMenu('contact')}><Link to='/contact' >  Contact</Link>{menu ==='contact' && <hr/>}</li>
            </p>
        </nav>
      
    </div>
  )
}

export default Navbar
