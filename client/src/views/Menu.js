import React from 'react'
import DrinkMenu from '../components/DrinkMenu'
import DabMenu from '../components/DabMenu'
import Nav from '../components/Nav'
import MenuAbout from '../components/MenuAbout'
import { useEffect } from 'react'

const Menu = () => {

    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
      }, []);

  return (
<div className='w-3/4 md:w-2/4 flex flex-col mx-auto items-center'>
    <Nav/>
    <MenuAbout/>
    <DrinkMenu />
    <DabMenu/>
</div>
  )
}

export default Menu