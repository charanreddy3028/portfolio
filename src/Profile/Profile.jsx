import React from 'react'
import './Profile.css'
import profile from './Photo copy.jpg'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <div  style={{backgroundColor:'grey'}}>
        
        <div className='profile'>
            <div className='profile-left'>
                <h1> Welcome to <i className='profile-name'>Sricharan Gunupati's</i> portfolio</h1>
                <h2><i className='profile-tag'>Software Engineer intern </i></h2>
            </div>
            <div className='profile-right'>
                <img className='profile-img' src={profile} alt=''  width='250px' height='325px' />
            </div>
        </div>
        
      
    </div>
  )
}

export default Profile
