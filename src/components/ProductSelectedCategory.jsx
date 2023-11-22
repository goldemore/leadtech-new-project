import React from 'react'

const ProductSelectedCategory = () => {

    const data = [
        {id: 1, img: "/phoneImg/image1.png", name: "iPhone 15 128 GB Green", price: "2.399,99", sale: "2.099,00"},
        {id: 2, img: "/phoneImg/image2.png", name: "iPhone 15 128 GB Green", price: "2.399,99", sale: "2.099,00"},
        {id: 3, img: "/phoneImg/image3.png", name: "iPhone 15 128 GB Green", price: "2.399,99"},
        {id: 4, img: "/phoneImg/image4.png", name: "iPhone 15 128 GB Green", price: "2.399,99", sale: "2.099,00"},
        {id: 5, img: "/phoneImg/image5.png", name: "iPhone 15 128 GB Green", price: "2.399,99", sale: "2.099,00"},
        {id: 6, img: "/phoneImg/image6.png", name: "iPhone 15 128 GB Green", price: "2.399,99"},
        {id: 7, img: "/phoneImg/image2.png", name: "iPhone 15 128 GB Green", price: "2.399,99", sale: "2.099,00"},
        {id: 8, img: "/phoneImg/image1.png", name: "iPhone 15 128 GB Green", price: "2.399,99", sale: "2.099,00"},
        {id: 9, img: "/phoneImg/image3.png", name: "iPhone 15 128 GB Green", price: "2.399,99"},
        {id: 10, img: "/phoneImg/image6.png", name: "iPhone 15 128 GB Green", price: "2.399,99", sale: "2.099,00"},
        {id: 11, img: "/phoneImg/image5.png", name: "iPhone 15 128 GB Green", price: "2.399,99", sale: "2.099,00"},
        {id: 12, img: "/phoneImg/image4.png", name: "iPhone 15 128 GB Green", price: "2.399,99"},
        {id: 13, img: "/phoneImg/image1.png", name: "iPhone 15 128 GB Green", price: "2.399,99", sale: "2.099,00"},
        {id: 14, img: "/phoneImg/image2.png", name: "iPhone 15 128 GB Green", price: "2.399,99", sale: "2.099,00"},
        {id: 15, img: "/phoneImg/image3.png", name: "iPhone 15 128 GB Green", price: "2.399,99"},
    ]

  return (
    <div className="diff_prod_box">
        {data.map((item, index)=>(
            <div className="diff_prod_card" key={index}>
                <div className='diff_prod_img'>
                    <img src={item.img} alt="" />
                </div>
                <p className='diff_prod_name'>{item.name}</p>
                <div className='diff_prod_price_cont'>
                    {item.sale ? (
                        <div>
                            <del className='diff_prod_price'>
                                <p>{item.price} <span>₼</span></p>
                            </del>
                            <p className='diff_prod_sale1'>{item.sale} <span>₼</span></p>
                        </div>
                    ) : (
                        <p className='diff_prod_price1'>{item.price} <span>₼</span></p>
                    )}
                </div>
            </div>
        ))}
    </div>
  )
}

export default ProductSelectedCategory