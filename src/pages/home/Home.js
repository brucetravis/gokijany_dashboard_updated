import React from 'react'
import './Home.css'
import BigDiv from '../../components/homecomponents/bigdiv/BigDiv'
import TrackingDiv from '../../components/homecomponents/tracking/TrackingDiv'
import { AlertCircle } from 'lucide-react'
import Payment from '../../components/homecomponents/payment/Payment'
import Kasnei from '../../components/homecomponents/kasnei/Kasnei'
import Music from '../../components/homecomponents/music/Music'
import Date from '../../components/homecomponents/date/Date'

export default function Home() {
  return (
    <div>
      <div className='home-page'>
        <div>
          <div className='home-one'>
            <div>
              <div className=''>
                <BigDiv />
              </div>

              <div className='d-flex align-items-center gap-2'>
                <Payment />
                <Kasnei />
              </div>
            </div>

            <div className='d-flex flex-column justify-content-center'>
              <div 
                className='d-flex align-items-center '
                style={{ gap: "80px" }}
              >
                <p className='tracking-text'>Tracking</p>

                <AlertCircle
                  size={25}
                  className=''
                  style={{ color: "rgba(161, 161, 161)" }}
                />
              </div>
              <TrackingDiv />
            </div>
          </div>
        </div>

      </div>
    
      <div className='home-two mt-4 mb-2 d-flex align-items-center justify-content-center gap-3 '>
        <Date />
        <Music />
      </div>
    </div>
  )
}
