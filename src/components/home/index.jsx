import React from 'react'
import { useAuth } from '../../contexts/authContext'
import './home.css'
const Home = () => {
    const { currentUser } = useAuth()
    return (
        
        <div class="card">
        <div class="bg">
        <div className='text'>Hello, {currentUser.displayName ? currentUser.displayName : currentUser.email},You are logged in.</div>
            </div>
            
        <div class="blob"></div>
    
        </div>
        
        
    )
}

export default Home