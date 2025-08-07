import React from 'react'
import './Header.css'
import { RefreshCcw } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faDoorOpen, faMicrophone } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  return (
    <header className='dashboard-header'>
        <div className='d-flex align-items-center gap-2'>
            <FontAwesomeIcon 
                icon={faDoorOpen} 
                size="lg" 
                className='text-white'
            />

            <RefreshCcw
                size={20}
                className='text-white'
            />
        </div>

        <div className='siri'>
            <div className='siri-ball'></div>
            <input 
                type='text'
                placeholder='Hey, Siri...'
            />

            <FontAwesomeIcon 
                icon={faMicrophone}
                size='lg'
                className='microphone '
            />

            {/* <Mic 
                size={20}
                className='text-white' 
            /> */}
        </div>
        <div className='profile'>
            <div className='d-flex gap-2'>
                <div className='profile-img'></div>
                <div className='mt-2'>
                    <p className='text-white fs-5'>Rudy Chanton</p>
                </div>
            </div>
            <div>
                <FontAwesomeIcon icon={faCaretDown} className="text-white mt-3" />
            </div>
        </div>
    </header>
  )
}
