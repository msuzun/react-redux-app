import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaSignInAlt, FaUser, FaSignOutAlt } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
export default function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth)
    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/login')

    }
    return (
        <header className='header'>
            <div className='Logo'>
                <Link to="/">MSUZUN Yapılacaklar</Link>
            </div>
            <ul>
                {user ? (
                    <>
                        <ul>
                            <li>
                                <span>Merhaba {user.displayName}</span>
                            </li>
                            <li>
                                <button onClick={onLogout} className='btn'><FaSignOutAlt />Çıkış</button>
                            </li>
                        </ul>
                    </>
                ) : (
                    <>
                        <ul>
                            <li>
                                <Link to="/Login"><FaSignInAlt />Giriş</Link>
                            </li>
                            <li>
                                <Link to="/register"><FaSignInAlt />Üye Ol</Link>
                            </li>
                        </ul>

                    </>
                )}
            </ul>
        </header>

    )
}
