import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './searchbar.css'
export const SearchBar = () => {
    return (
        <div className="search-bar">
             <SearchIcon className='icon'/>
            <input type="text" />
           
        </div>
    );
};
