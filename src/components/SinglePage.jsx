import React from 'react'
import Characteristic from './Characteristic';

const SinglePage = () => {

    // const images = [
    //     "/singleImg/slide1.png",
    //     "/singleImg/slide2.png",
    //     "/singleImg/slide3.png",
    //     "/singleImg/slide4.png",
    //     "/singleImg/slide5.png",
    //     "/singleImg/slide6.png",
    //     "/singleImg/slide7.png",
    //     "/singleImg/slide8.png"
    //   ];

  return (
    <div className="single_container">
      <h2 className="single_head">iPhone 15 Pro 256 GB Natural</h2>
      <div className="single_box">
        <div className="single_prod_img">
          <img src="/singleImg/iphone15.png" alt="" />
        </div>
        <div className="single_slide_container">
          <div className="single_slide_img active_single">
            <img src="/singleImg/slide1.png" alt="" />
          </div>
          <div className="single_slide_img">
            <img src="/singleImg/slide2.png" alt="" />
          </div>
          <div className="single_slide_img">
            <img src="/singleImg/slide3.png" alt="" />
          </div>
          <div className="single_slide_img">
            <img src="/singleImg/slide4.png" alt="" />
          </div>
          <div className="single_slide_img">
            <img src="/singleImg/slide5.png" alt="" />
          </div>
          <div className="single_slide_img">
            <img src="/singleImg/slide6.png" alt="" />
          </div>
          <div className="single_slide_img">
            <img src="/singleImg/slide7.png" alt="" />
          </div>
          <div className="single_slide_img">
            <img src="/singleImg/slide8.png" alt="" />
          </div>
        </div>
        <div className="order_num">
          <p className="order_price">4.549,99 AZN</p>
          <div className="call_order">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.29813 13.2031C10.4348 16.3398 13.3415 16.6833 14.1948 16.7151C15.226 16.7526 16.2783 15.9107 16.7336 15.0485C16.0075 14.1968 15.062 13.536 14.026 12.8197C13.4157 13.4299 12.6636 14.5639 11.6602 14.1576C11.0899 13.9284 9.68187 13.2798 8.45166 12.0488C7.22063 10.8186 6.5729 9.41053 6.34203 8.84111C5.93577 7.83687 7.07298 7.08227 7.684 6.47124C6.96774 5.41887 6.31837 4.4489 5.46832 3.75956C4.59379 4.2164 3.747 5.26061 3.78534 6.30563C3.81716 7.15895 4.16061 10.0656 7.29813 13.2031ZM14.1344 18.3451C12.9597 18.3018 9.63048 17.8425 6.14379 14.3558C2.65792 10.87 2.19863 7.54156 2.15458 6.366C2.08932 4.57453 3.46148 2.83445 5.04655 2.1549C5.23743 2.07248 5.44646 2.0411 5.65312 2.06384C5.85978 2.08658 6.05698 2.16266 6.22537 2.28461C7.53716 3.24153 8.44187 4.69119 9.21932 5.82677C9.38105 6.0629 9.45514 6.34814 9.42877 6.63313C9.4024 6.91812 9.27723 7.18492 9.07492 7.38737L7.96871 8.4944C8.22569 9.06137 8.74861 10.0387 9.60519 10.8953C10.4618 11.7518 11.4391 12.2748 12.0069 12.5317L13.1123 11.4255C13.3155 11.2228 13.5834 11.0978 13.8693 11.0723C14.1553 11.0468 14.4411 11.1224 14.6769 11.286C15.8354 12.0888 17.1961 12.9804 18.1881 14.2506C18.32 14.4202 18.4038 14.6221 18.431 14.8352C18.4581 15.0483 18.4275 15.2648 18.3423 15.4621C17.6595 17.0553 15.9316 18.4111 14.1344 18.3451Z"
                fill="white"
              />
            </svg>
            <p>Sifariş et</p>
          </div>
        </div>
      </div>
      <Characteristic/>
    </div>
  )
}

export default SinglePage