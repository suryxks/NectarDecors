import React from 'react';
import "./Navbar.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { Link } from 'react-router-dom'
import { SearchBar } from '../Searchbar/SearchBar';
const Navbar = () => {
    return (<div>
        <nav className="header-nav">
            <div className="brand">
                <Link to='/'>
                    <h2 className="heading-lg">Nectar Decors</h2>
                </Link>
            </div>
            <SearchBar/>
            <div className="actions">
                <Link to='/wishlist'><FavoriteBorderIcon className="icon"/></Link>
                <Link to='/cart'><ShoppingBagIcon className="icon"/></Link>
                <Link to='/'><PermIdentityIcon className="icon"/></Link>
            </div>
        </nav>
    </div>)
}

export default Navbar;