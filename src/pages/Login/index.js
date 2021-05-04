import React from 'react'
import { useHistory } from 'react-router'
import { LoginBg } from '../../assets'
import { Input, Button, Gap, Link } from '../../components'
// import './Login.scss'

const Login = () => {
    const history = useHistory()
    return (
        <div className="main-page">
            <div className="left"><img src={LoginBg} alt="imageBg" /></div>   
            <div className="right">
                <h1>Login</h1>
                <Input label="Email" placeholder="Email" />
                <Gap height={18} />
                <Input label="Password" placeholder="Password" />
                <Gap height={50} />
                <Button title="Login" />
                <Gap height={20} />
                <Link onClick={() => history.push('/register') } title="Belum punya akun? Daftar di sini" />

                </div>   
        </div>
    )
}

export default Login
