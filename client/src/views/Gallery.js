import React from 'react'
import NavMain from '../components/NavMain'
import Footer from '../components/Footer'
import GalleryGrid from '../components/GalleryGrid'

const Gallery = () => {

  return (
    <div>
        <NavMain/>
        <div className='pt-52'>
        <GalleryGrid/>
        </div>
        <Footer/>
    </div>
  )
}

export default Gallery