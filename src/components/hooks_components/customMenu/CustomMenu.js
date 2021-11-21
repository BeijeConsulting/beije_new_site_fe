import React, { useState } from 'react'

import './CustomMenu.css'

const BurgerMenu = (props) => {
    const [state, setState] = useState({
        openMenu: false
    })

    const changeStateMenu = () => {
        setState({
            openMenu: !state.openMenu
        })
    }

    return (
        // <nav className='burger-menu-nav'>
        <div className={'burger-menu-container'} onClick={changeStateMenu}>
            <i className={state.openMenu ? 'burger-menu-open' : 'burger-menu-close'}></i>
            <i className={state.openMenu ? 'burger-menu-open' : 'burger-menu-close burger-menu-middle-line'}></i>
            <i className={state.openMenu ? 'burger-menu-open' : 'burger-menu-close'}></i>
        </div>
        // </nav>

    )
}

export default BurgerMenu