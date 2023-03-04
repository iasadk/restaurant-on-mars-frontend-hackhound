import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import RoutesPro from './Routes'

const LayoutMain = () => {
  return (
    <div>
        <Header/>
        <RoutesPro/>
        <Footer/>
    </div>
  )
}

export default LayoutMain