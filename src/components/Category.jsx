import React from 'react'
import { IoIosArrowForward } from "react-icons/io";


const Category = () => {

  return (
    <div className='three_container'>
        <div className='three_card'>
            <div className='three_img'>
                <img src="/images/camera-1.png" alt="" />
            </div>
            <div className='three_text'>
                <p className='three_text_head'>Kameralarda yenİlİklərİ qaçırma</p>
                <div className="three_link">
                    <p>buradan bax</p>
                    <IoIosArrowForward className="icon_arrow" />
                </div>
            </div>
        </div>
        <div className='three_card'>
            <div className='three_img'>
                <img src="/images/laptop-1.png" alt="" />
            </div>
            <div className='three_text'>
                <p className='three_text_head'>Planşet və Smartfonlar <span className='three_span1'>119.99 AZN</span> başlayan qİymətlərlə</p>
                <div className="three_link">
                    <p>buradan bax</p>
                    <IoIosArrowForward className="icon_arrow" />
                </div>
            </div>
        </div>
        <div className='three_card'>
            <div className='three_img'>
                <img src="/images/desktop-1.png" alt="" />
            </div>
            <div className='three_text'>
                <p className='three_text_head'>Notbuklar, Personal komputerlər <span className='three_span2'>və daha çoxu</span></p>
                <div className="three_link">
                    <p>buradan bax</p>
                    <IoIosArrowForward className="icon_arrow" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Category