import React from 'react'
import hamburger from '../assets/hamburger.svg'
import microsoftlogo from '../assets/microsoft-icon.svg'
import searchicon from '../assets/search-line-icon.png'
import './Header.css'

function Header() {
  return (
    <div>
    <div className='app-header-mobile'>
        <div className='header-left'>
        <span className='hamburger'><img src={hamburger}></img></span>
        <span className='header-title'>Azure</span>
        </div>

        <span className='microsoft-icon'><img src={microsoftlogo}></img></span>

        <div className='header-right'>
        <span className='search'><img src={searchicon}></img></span>
        <span className='sign-in'>Sign In</span>
        </div>
    </div>
    <div className='app-header-tab'>
        <div className='tab-left'>
        <span className='microsoft'><img src={microsoftlogo}></img></span>
        <span className='title'>Azure</span>

        </div>
        <div className='tab-right'>

        </div>

    </div>
    </div>

  )
}
export default Header;