import React, { useState, useEffect } from "react";
import './Navigation.css';
import { House, Bell } from 'lucide-react';
import SearchBar from "../searchbar/SearchBar";

export default function Navigation() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    
    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return(
        <div className="Navigation">
            <div 
                className={`hamburger-menu ${isMobileMenuOpen ? 'active' : ''}`}
                onClick={toggleMobileMenu}
            >
                <div className="hamburger-line"></div>
                <div className="hamburger-line"></div>
                <div className="hamburger-line"></div>
            </div>
            
            
            <ul className="nav-links">
                <li>
                    <a href="" className="home-icon">
                        <House size={20} color="#ff6b35" />
                    </a>
                </li>
                <li>
                    <a href="">
                        <span>Properties List</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <span>Analytics</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <span>What is Horizon?</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <span>Tools&Calculators</span>
                    </a>
                </li>
            </ul>
            
    
            <div className="nav-center">
                <SearchBar />
            </div>
            
     
            <div className="nav-right">
                <div className="notification-bell">
                    <Bell size={20} color="#ffffff" />
                </div>
                <div className="profile">
                    <img 
                        src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" 
                        alt="Cornelius Greenfilder" 
                    />
                    <div className="prof-dets">
                        <p><strong>Cornelius Greenfilder</strong></p>
                        <p>Ukraine</p>
                    </div>
                </div>
            </div>
            
            
            <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                <ul className="nav-links">
                    <li>
                        <a href="" onClick={closeMobileMenu}>
                            <House size={20} color="#ff6b35" />
                            <span>Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="" onClick={closeMobileMenu}>
                            <span>Properties List</span>
                        </a>
                    </li>
                    <li>
                        <a href="" onClick={closeMobileMenu}>
                            <span>Analytics</span>
                        </a>
                    </li>
                    <li>
                        <a href="" onClick={closeMobileMenu}>
                            <span>What is Horizon?</span>
                        </a>
                    </li>
                    <li>
                        <a href="" onClick={closeMobileMenu}>
                            <span>Tools&Calculators</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}