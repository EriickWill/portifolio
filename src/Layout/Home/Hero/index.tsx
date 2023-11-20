
import Link from 'next/link'
import React from 'react'
import "./style.scss"
import Button from '@/components/Button'
import ImgHome from '../ImgHome'

export default function Hero() {
  return (
    <section id="heroHome" className='container'>
        <div className='heroText '>
            <h1>Web Designer & <br/> Programador</h1>
            <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new.</p>
            <Button target="" name={"click"} route=''/>
          
        </div>
      <ImgHome/>
    </section>
  )
}
