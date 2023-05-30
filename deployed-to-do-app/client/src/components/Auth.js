import {useState} from 'react'
import { useCookies } from 'react-cookie'
import logo from './taskzy.png'


const Auth = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['user'])
    const [isLogin, setIsLogin] = useState(true)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [error, setError] = useState(false)


  const handleSubmit = async (e, endpoint) => {
    e.preventDefault()
    console.log(endpoint)
        if (!isLogin && password !== confirmPassword) {
            setError(" Make sure passwords match")
            return
        }

      const response = await fetch(`http://localhost:8000/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password})
      })

    const data = await response.json()
    
    console.log(data)

    if (data.detail) {
      setError(data.detail)
    } else {
      setCookie('Email', data.email)
      setCookie('AuthToken', data.token)

      window.location.reload()
    }
  }
  
  const viewLogin = (status) => {
    setError(null)
    setIsLogin(status)
  }

    return (
        <div className="auth-container">
        <div><img className="logoImg" src={logo} alt="Taskzy" /></div>
            <div className="auth-container-box">
          <form className="auth-container-form">
            <h2>{isLogin ? 'Please log in' : 'Please sign up!'}</h2>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {!isLogin && <input
                        type="password"
                        id="password-check"
                        name="password-check"
                        placeholder="confirm password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />}
            {error  && <p>* {error}</p>}
                    <input type="submit" text="GO!" className='create' onClick={(e) => handleSubmit(e, isLogin ? 'login' : 'signup')} required/>
                </form>
                <div className="auth-options">
                    <button
                        className='auth-btn'
                        onClick={() => viewLogin(false)}
                        style={{ backgroundColor: !isLogin ? '#4175d75d' : '#1d1d1d', color: !isLogin ? '#4176d7' : '#2e5397'}}
                    >Sign up</button>
                    <button
                        className='auth-btn'
                        onClick={() => viewLogin(true)}
                        style={{ backgroundColor: isLogin ? '#5ec79270' : '#1d1d1d', color: !isLogin ? '#4a9771' : '#5EC793'}}
                    >Login</button>
                </div>
            </div>
        </div>
    )
}

export default Auth