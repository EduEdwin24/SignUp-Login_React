import React, { useState } from 'react'
import { Navigate, Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../contexts/authContext'
import { doCreateUserWithEmailAndPassword } from '../../../firebase/auth'
import './reg.css'
const Register = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')
    const [isRegistering, setIsRegistering] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const { userLoggedIn } = useAuth()

    const onSubmit = async (e) => {
        e.preventDefault()
        if(!isRegistering) {
            setIsRegistering(true)
            await doCreateUserWithEmailAndPassword(email, password)
        }
    }

    return (
        <>
            {userLoggedIn && (<Navigate to={'/home'} replace={true} />)}

            <main>
                <div>
                    <div >
                        <div>
                            <h3 className="singup">Create a New Account</h3>
                        </div>

                    </div>
                    <form
                        onSubmit={onSubmit}
                    >
                        <div class="inputBox1">
                            
                            <input
                                type="email"
                                autoComplete='email'
                                required
                                value={email} onChange={(e) => { setEmail(e.target.value) }}
                                  />
                                  <span>Email</span>
                        </div>

                        <div class="inputBox">
                           
                            <input
                                disabled={isRegistering}
                                type="password"
                                autoComplete='new-password'
                                required
                                value={password} onChange={(e) => { setPassword(e.target.value) }}
                                />
                                <span>Password</span>
                        </div>

                        <div class="inputBox1">
                            
                            <input
                                disabled={isRegistering}
                                type="password"
                                autoComplete='off'
                                required
                                value={confirmPassword} onChange={(e) => { setconfirmPassword(e.target.value) }}
                                />
                                <span>Confirm Password</span>
                        </div>

                        {errorMessage && (
                            <span className='err'>{errorMessage}</span>
                        )}

                        <button
                            type="submit"
                            disabled={isRegistering}
                            class="signin"
                        >
                            {isRegistering ? 'Signing Up...' : 'Sign Up'}
                        </button>
                        <div className="already">
                            Already have an account? {'   '}
                            <Link to={'/login'}>Continue</Link>
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}

export default Register