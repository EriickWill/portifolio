import Link from 'next/link'
import React from 'react'
import "./style.scss"
import Button from '@/components/Button'
export default function About() {
  return (
    <section id='about' className="container">
        <div className="text">
          <h2>Sobre</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui saepe dicta tempora eveniet minus, non illo cupiditate blanditiis voluptas repellendus!</p>
          <Button name='Ler mais' route='' target=''/>
        </div>
        <img src="/imgAboutSec.jpg" alt="" />
    </section>
  )
}
