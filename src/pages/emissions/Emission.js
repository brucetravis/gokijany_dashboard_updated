import React, { useState } from 'react'
import Navigation from '../../components/navbar/Navigation'
import './Emission.css'
import Statistics from '../../components/emissioncomponents/statistics/Statistics'
import Charts from '../../components/emissioncomponents/charts/Charts'
import Graph from '../../components/emissioncomponents/graphs/Graph'
import Information from '../../components/emissioncomponents/information/Information'
import Properties from '../../components/emissioncomponents/properties/Properties'

export default function Emission() {
  const [activeTab, setActiveTab] = useState('cabinet')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleTabChange = (tab) => {
    setActiveTab(tab)
    setIsMenuOpen(false) 
  }

  const renderMainContent = () => {
    switch(activeTab) {
      case 'cabinet':
        
        return (
          <>
            <div className='stats-cont'>
              <Statistics/>
              <Statistics />
              <Statistics/>
              <Statistics />
            </div>
            <Charts/>
            <Graph/>
          </>
        )
      
      case 'portfolio':
        return (
          <>
            <Charts/>
            <div className='stats-cont'>
              <Statistics/>
              <Statistics />
              <Statistics/>
              <Statistics />
            </div>
            <Graph/>
          </>
        )
      
      case 'statistics':
        return (
          <>
            <div className='stats-cont'>
              <Statistics/>
              <Statistics />
              <Statistics/>
              <Statistics />
            </div>
            <Graph/>
            <Charts/>
          </>
        )
      
      default:
        return null
    }
  }

  const getActiveTabLabel = () => {
    switch(activeTab) {
      case 'cabinet': return 'My Cabinet'
      case 'portfolio': return 'Portfolio'
      case 'statistics': return 'Statistics'
      default: return 'My Cabinet'
    }
  }

  return (
    <div className='emissions'>
        <div className='emissions-container'>
          <div className='emission'>
            <div className='emission-stats'>
              <div className='title'>
                <h3>Personal Cabinet</h3>
                <nav className='title-nav desktop-nav'>
                  <button 
                    className={activeTab === 'cabinet' ? "btn active-btn" : "btn"}
                    onClick={() => handleTabChange('cabinet')}
                  >
                    My Cabinet
                  </button>
                  
                  <button 
                    className={activeTab === 'portfolio' ? "btn active-btn" : "btn"}
                    onClick={() => handleTabChange('portfolio')}
                  >
                    Portfolio
                  </button>
                  
                  <button 
                    className={activeTab === 'statistics' ? "btn active-btn" : "btn"}
                    onClick={() => handleTabChange('statistics')}
                  >
                    Statistics
                  </button>
                </nav>
                <div className='mobile-nav'>
                  <button 
                    className='hamburger-btn'
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                  >
                    <span className='current-tab'>{getActiveTabLabel()}</span>
                    <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </button>
                  
                  <nav className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                    <button 
                      className={activeTab === 'cabinet' ? "btn active-btn" : "btn"}
                      onClick={() => handleTabChange('cabinet')}
                    >
                      My Cabinet
                    </button>
                    
                    <button 
                      className={activeTab === 'portfolio' ? "btn active-btn" : "btn"}
                      onClick={() => handleTabChange('portfolio')}
                    >
                      Portfolio
                    </button>
                    
                    <button 
                      className={activeTab === 'statistics' ? "btn active-btn" : "btn"}
                      onClick={() => handleTabChange('statistics')}
                    >
                      Statistics
                    </button>
                  </nav>
                </div>
              </div>
              
              {renderMainContent()}
            </div>
            <div className='emission-personal'>
              <Information/>
              <Properties/>
            </div>
          </div>
        </div>

        {/* Mobile menu overlay */}
        {isMenuOpen && <div className='menu-overlay' onClick={() => setIsMenuOpen(false)}></div>}
    </div>
  )
}