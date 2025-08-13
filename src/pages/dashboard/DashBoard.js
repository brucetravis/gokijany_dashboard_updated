import React, { useState } from 'react'
import './DashBoard.css'
import Home from '../home/Home'
import Emission from '../emissions/Emission'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function DashBoard() {
    
    // states to control the  page that is seen
    const [ currentPage, setCurrentPage ] = useState(0) // Initial state is the first page which is in index 0
    // An array of pages
    const pages = [<Home />, <Emission/> ]
    
    // previous arrow function
    const prevPage = () => {
        setCurrentPage((prev) => (prev - 1 + pages.length) % pages.length)
    }

    // Next Page
    const nextPage = () => {
        setCurrentPage((prev) => (prev + 1) % pages.length)
    }

    // next page arrow function
  return (
    <div className='dashboard-page'>

        <button
            onClick={prevPage}
            className='chevron-left'
        >
            <ChevronLeft
                size={30}
            />
        </button>
        
        <div>
            {pages[currentPage]}

            <div className='carousel-indicators'>
                {pages.map((_, index) => (
                    <span 
                        key={index}
                        className={`indicator ${currentPage === index ? 'active' : ''}`}
                    />
                ))}
            </div>
        </div>

        <button
            onClick={nextPage}
            className='chevron-right'
        >
            <ChevronRight
                size={30}
            />
        </button>

    </div>
  )
}
