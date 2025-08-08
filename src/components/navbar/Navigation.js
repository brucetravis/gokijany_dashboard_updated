import React from "react";
import './Navigation.css';
import { House, Bell } from 'lucide-react';
import SearchBar from "../searchbar/SearchBar";


export default function Navigation() {
    return(
        <div className="Navigation">
            <div className="nav-links nav">
                <li>
                    <a href="">
                        <House
                        color="orange" 
                        />
                    </a>
                </li>
                <li>
                    <a href="">Properties List</a>
                </li>
                <li>
                    <a href="">Analytics</a>
                </li>
                <li>
                    <a href="">What is Horizon?</a>
                </li>
                <li>
                    <a href="">Tools&Calculators</a>
                </li>
            </div>
            <div className="nav">
                <SearchBar />
            </div>
            <div className="nav nav-profile">
                <Bell 
                    size={25}
                />
                <div className="profile">
                    <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" alt="Cornelius Greenfilder" />
                    <div className="prof-dets">
                        <p><strong>Cornelius Greenfilder</strong></p>
                        <p>Ukrane</p>
                    </div>
                </div>
            </div>
        </div>
    )
}