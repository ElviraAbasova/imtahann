import React from 'react'
import "./home.scss"
import Hero from './components/Hero'
import Courses from './components/Courses'
import Form from './components/Form'
import Services from './components/Services'
import Events from './components/Events'




const Home = () => {
  return (
    <>
    <Hero/>
    <Courses/>
    <Form/>
    <Services/>
    <Events/>
    </>
    
  )
}

export default Home