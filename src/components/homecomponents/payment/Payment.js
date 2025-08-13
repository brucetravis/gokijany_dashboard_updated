import React from 'react'
import './Payment.css'
import { ChevronLeft } from 'lucide-react'

export default function Payment() {
  return (
    <div className='payment-div'>
      <div className='payment-method'>

      </div>

      <div className='left-arrows'>
        <ChevronLeft
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
