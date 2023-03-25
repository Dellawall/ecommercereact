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
        <form name='search' action='get' href='google.com'>
            <input placeholder='search items' />
            <button><AiOutlineSearch className='list-icons' /></button>
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