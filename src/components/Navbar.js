import React from 'react'
import {NavLink,withRouter} from 'react-router-dom'
const Navbar = (props)=>{
    console.log('navbar',props);
    return(
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <NavLink to="" className="brand-logo left">Poke Times</NavLink>
                <ul className="right">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/todo">Todo</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar);
// export default Navbar;
