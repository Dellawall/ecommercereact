import React from 'react'
import {BsFillGridFill, BsList} from 'react-icons/bs'
import {AiOutlineSearch} from 'react-icons/ai'
import './Search.scss';

const Search = () => {
  return (
    <div className='search'>
        <div className='list-icons'>
            <BsFillGridFill size={16}/>
            <BsList size={20}/>
        </div>
        <div className='form-select'>
        <form name="search" role="search" method="get" action="https://www.jodaxattorneys.com.ng/">
        {/* <input class="search-field" placeholder="Search "  /> */}
            <input type="search" placeholder='search items &hellip;' name="search" />
            
            {/* <input  class="search-submit" /> */}
            <button type="submit" value="Search"><AiOutlineSearch className='list-icons' /></button>
        </form>
        <select>
            <option>List price</option>
            <option>A-Z</option>
            <option>least price - highest price</option>
            <option>highest price - least price</option>
        </select>
        </div>
    </div>
  )
}

export default Search