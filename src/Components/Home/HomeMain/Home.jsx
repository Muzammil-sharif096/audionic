import React from 'react'
import HomeHeader from '../HomeHeader/HomeHeader'
import Products from '../Products/Products'
import Gallery from '../Gallery/Gallery'
import AudionicBlog from '../AudionicBlog/AudionicBlog'
import WhatAbout from '../WhatAbout/WhatAbout'
import Shipping from '../Shipping/Shipping'

const Home = () => {
    return (
        <div>
            <HomeHeader />
            <Products />
            <Gallery />
            <AudionicBlog />
            <WhatAbout />
            <Shipping />
        </div>
    )
}

export default Home
