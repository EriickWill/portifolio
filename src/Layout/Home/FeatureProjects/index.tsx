
import Link from 'next/link'
import React from 'react'
import "./style.scss"
import DivProject from '@/components/DivProject'

export default function FeatureProjects() {
  return (
    <section id="featureProjects" className='container'>
      <h2>PROJETOS</h2>  
        <div className='containerProjects'>
          <DivProject imgSrc='/imgProject.png' route=''/>
          <DivProject imgSrc='/imgProject.png' route=''/>
        </div>
    </section>
  )
}
