import About from '@/Layout/Home/About'
import FeatureProjects from '@/Layout/Home/FeatureProjects'
import Hero from '@/Layout/Home/Hero'
import SliderText from '@/components/SliderText'
import React from 'react'
import ImgHome from '@/Layout/Home/ImgHome'
import Services from '@/Layout/Home/Services'

export default function Home() {
  return (
  <>
    
    <Hero/>
    <SliderText text1='WEB DESIGNER' text2='DESENVOLVEDOR WEB'/>
    <About/>
    <Services/>
    <SliderText text1='Projetos' text2='Services'/>
    <FeatureProjects/>
  </>
    
  )
}
