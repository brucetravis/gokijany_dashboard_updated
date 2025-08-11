import React from 'react'
import './TrackingDiv.css'
import { ChevronRight } from 'lucide-react'

export default function TrackingDiv() {
  return (
    <div className='tracking-div'>
      <div className='right-arrows'>
        <ChevronRight
          size={20}
          className='text-white'
        />

        {/* <ChevronRight
          size={20}
          className='text-white'
        /> */}
      </div>

    </div>
  )
}
