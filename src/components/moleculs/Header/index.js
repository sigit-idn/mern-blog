import React from 'react'
import { useHistory } from 'react-router'
import { Link } from '../../atoms'
import './header.scss'

const Header = () => {
    const history = useHistory()
    return (
        <div className="header">
            <p>MERN-BLOG</p>
            <Link title='Logout' onClick={() => history.push('/login')} />
        </div>
    )
}

export default Header
