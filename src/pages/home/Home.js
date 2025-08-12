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
    <div className='home-page'>
      <div className='home-one'>
        <div>
          <BigDiv />

          <div className='d-flex align-items-center gap-2 m-2'>
            <Payment />
            <Kasnei />
          </div>
        </div>
        
        <div>
          <div className='tracking-alert-div d-flex align-items-center gap-5 '>
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

      <div className='home-two'>
        <Music />
        <Date />
      </div>

    </div>
  )
}
