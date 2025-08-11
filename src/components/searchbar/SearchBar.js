import React from 'react'
import { Search, TextSearch } from 'lucide-react';
import './Search.css'

export default function SearchBar() {
  return (
    <form className='search'>
        <div className='search-container'>
            <Search />
            <input placeholder='Barcelona, Spain'/> 
        </div>
        <TextSearch />
    </form>
  )
}
