import Link from 'next/link'
import React from 'react'
import "./style.scss"
export default function Services() {
  return (
    <section id='services'>
      <div className='container'>
        <div className="text">
          <h2>Services</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui saepe dicta tempora eveniet minus, non illo cupiditate blanditiis voluptas repellendus!</p>
        </div>
        
        <div className='links'>
          <Link href={""}>Web Design <span>a</span></Link>
          <Link href={""}>UI UX Design<span>a</span></Link>
          <Link href={""}>Desenvolvimento de Aplicativos<span>a</span></Link>
          <Link href={""}>Desenvolvimento de sites<span>a</span></Link>
          
        </div>
      </div>
        
    </section>
  )
}
