import React from 'react'

const HomeSlide = () => {

  return (
    <div className='img_slider'>
        <div className="slide active">
            <img src="/slide/home-slider-1.png" alt="" />
        </div>
        <div className="slide">
            <img src="/slide/home-slider.png" alt="" />
        </div>
        <div className="slide">
            <img src="/slide/home-slider-2.png" alt="" />
        </div>
        <div className="navigation">
            <div className="btn active"></div>
            <div className="btn"></div>
            <div className="btn"></div>
        </div>
    </div>
  )
}

export default HomeSlide