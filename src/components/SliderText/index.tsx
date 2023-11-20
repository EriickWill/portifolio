import React from 'react'
import "./style.scss"
import Link from 'next/link'

interface IProps{
  text1:string,
  text2:string
}
export default function SliderText({text1,text2}:IProps) {
  return (
    <section className='slider'>
        <p>·</p>
        <div className='sliderContent'>
           <p>{text1}</p>
           <p>·</p>
           <p>{text2}</p>
           <p>·</p>
           <p>{text1}</p>
           <p>·</p>
           <p>{text2}</p>
           <p>·</p>
           <p>{text1}</p>
           <p>·</p>
           <p>{text2}</p>
           <p>·</p>
           <p>{text1}</p>
           <p>·</p>
           <p>{text2}</p>
           <p>·</p>
           <p>{text1}</p>
           <p>·</p>
           <p>{text2}</p>
           <p>·</p>
        </div>
        <p>·</p>
        <div className='sliderContent'>
           <p>{text1}</p>
           <p>·</p>
           <p>{text2}</p>
           <p>·</p>
           <p>{text1}</p>
           <p>·</p>
           <p>{text2}</p>
           <p>·</p>
           <p>{text1}</p>
           <p>·</p>
           <p>{text2}</p>
           <p>·</p>
           <p>{text1}</p>
           <p>·</p>
           <p>{text2}</p>
           <p>·</p>
           <p>{text1}</p>
           <p>·</p>
           <p>{text2}</p>
           <p>·</p>
        </div>
        <p>·</p>
        <div className='sliderContent'>
           <p>{text1}</p>
           <p>·</p>
           <p>{text2}</p>
           <p>·</p>
           <p>{text1}</p>
           <p>·</p>
           <p>{text2}</p>
           <p>·</p>
           <p>{text1}</p>
           <p>·</p>
           <p>{text2}</p>
           <p>·</p>
           <p>{text1}</p>
           <p>·</p>
           <p>{text2}</p>
           <p>·</p>
           <p>{text1}</p>
           <p>·</p>
           <p>{text2}</p>
           <p>·</p>
        </div>
        <p>·</p>

    </section>
  )
}
