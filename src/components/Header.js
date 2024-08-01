import React from 'react'
import { Link } from 'react-router-dom'
import { FaSignInAlt, FaUser } from 'react-icons/fa'
export default function Header() {
    return (
        <header className='header'>
            <div className='Logo'>
                <Link to="/">Aos Yapılacaklar</Link>
            </div>
            <ul>
                <li>
                    <Link to="/Login"><FaSignInAlt/>Giriş</Link>
                </li>
                <li>
                    <Link to="/register"><FaSignInAlt/>Üye Ol</Link>
                </li>
            </ul>
        </header>

    )
}
