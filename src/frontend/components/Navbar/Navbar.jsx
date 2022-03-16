import React from 'react';
import "./Navbar.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom'
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
                <Link to='/wishlist'><FavoriteBorderIcon /></Link>
                <Link to='/cart'><ShoppingBagIcon /></Link>
                <Link to='/'><PermIdentityIcon /></Link>
            </div>
        </nav>
    </div>)
}

const SearchBar = () => {
    return (
        <div className="search-bar">
            <input type="text" />
            <SearchIcon />
        </div>
    )
}
export default Navbar;