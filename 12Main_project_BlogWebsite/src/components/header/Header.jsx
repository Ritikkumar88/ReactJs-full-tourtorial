import React from 'react'
import { Container, Logo, LogOutBtn } from '../index'
import { Link, Navigate } from 'react-router-dom'
import { useSelector, UseSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: "home",
      slug: "/",
      active: true
    },
    {
      name: "Login",
      slug: "/Login",
      active: !authStatus
    },
    {
      name: "signup",
      slug: "/signup",
      active: !authStatus
    },
    {
      name: "all posts",
      slug: "/all-posts",
      active: authStatus
    },
  ]
  return (
    <header className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex'>
          <div className='me-4'>
            <Link to='/'>
              <Logo width='70px' />
            </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item) => 
            item.active ? (
              <li key = {item.name}>
                <button onClick={() => {navigate(item.slug)}}
                className='inline-block px-6 py-2 duration-200 hover::bg-blue-100 rounded-full'
                >{item.name}</button>
              </li>
            ) : null
            )}
            {authStatus && (
              <li>
                <LogOutBtn/>
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header