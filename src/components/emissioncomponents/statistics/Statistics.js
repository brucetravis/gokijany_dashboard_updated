import React from 'react'
import './Statistics.css'

export default function Statistics({ title,count,percentage }) {
  return (
    <div className='stats'>
        <div className='stats-content'>
            <h5>{title}</h5>
            <div className='count-cont'>
                {count}
                <div className='stats-btn'>{percentage}</div>
            </div>
        </div>
    </div>
  )
}
