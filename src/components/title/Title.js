import React from 'react'
import './Title.css'
import { NavLink } from "react-router-dom";

export default function Title() {
  return (
    <div className='title'>
        <h3>Personal Cabinet</h3>
        <nav className='title-nav'>
            <NavLink 
                to="/emissions" 
                className={({ isActive }) => 
                isActive ? "btn active-btn" : "btn"
                }
            >
                My Cabinet
            </NavLink>
            
            <NavLink 
                to="/emissions" 
                className={({ isActive }) => 
                isActive ? "btn active-btn" : "btn"
                }
            >
                Portfolio
            </NavLink>
            
            <NavLink 
                to="/emissions" 
                className={({ isActive }) => 
                isActive ? "btn active-btn" : "btn"
                }
            >
                Statistics
            </NavLink>
        </nav>
    </div>
  )
}
