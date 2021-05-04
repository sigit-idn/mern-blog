import React from 'react'
import { useHistory } from 'react-router'
import { RegisterBg } from '../../assets'
import { Input, Button, Gap, Link } from '../../components'
import './register.scss'

const Register = () => {
    const history = useHistory()
    return (
        <div className="main-page">
            <div className="left"><img src={RegisterBg} alt="imageBg" /></div>   
            <div className="right">
                <h1>Register</h1>
                <Input label="Full Name" placeholder="Full Name" />
                <Gap height={18} />
                <Input label="Email" placeholder="Email" />
                <Gap height={18} />
                <Input label="Password" placeholder="Password" />
                <Gap height={50} />
                <Button title="Register" />
                <Gap height={20} />
                <Link title="Kembali ke Login" onClick={() => history.push('/login')} />

                </div>   
        </div>
    )
}

export default Register
