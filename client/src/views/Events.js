import React from 'react'
import CalendarEvents from '../components/CalendarEvents'
import NavMain from '../components/NavMain'
import Footer from '../components/Footer'
const Events = () => {
  return (
    <div>
    <NavMain/>
        <CalendarEvents/>
        <Footer/>
    </div>
  )
}

export default Events