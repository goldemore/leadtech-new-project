import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className='footer_container'>
            <div className='contact'>
                <h6>Əlaqə</h6>
                <p className='contact_num'>(+994)51 532 26 23</p>
                <p className='contact_email'>info@leadtech.az</p>
            </div>
            <div className='social_net'>
                <h6>Bizimlə qalın</h6>
                <ul className='stay_with_us'>
                    <li>
                        <a href="#">
                            <img src="/images/instagram.svg" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="/images/telegram.svg" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="/images/watsapp.svg" alt="" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer