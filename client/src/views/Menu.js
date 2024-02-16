import React from 'react'
import DrinkMenu from '../components/DrinkMenu'
import NavMain from '../components/NavMain'
import Footer from '../components/Footer'
import { useEffect } from 'react'

const Menu = () => {

    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
      }, []);

  return (
<div>
    <NavMain/>
    <DrinkMenu />
    <Footer/>
</div>
  )
}

export default Menu