import React from 'react'

const Contact = () => {
  return (
    <div className="contact_body">
      <div className="contact_container">
        <div className="contact_title">
          <h2>Bizimlə əlaqə</h2>
          <p>
            Bizimlə əlaqə saxlayaraq suallarınıza cavab tapa və istədiyiniz
            məhsulusu sifariş edə bilərsiniz.
          </p>
        </div>
        <div className="contact_box">
          <div className="contact_card">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
            >
              <path
                d="M30 28.75C28.3424 28.75 26.7527 28.0915 25.5806 26.9194C24.4085 25.7473 23.75 24.1576 23.75 22.5C23.75 20.8424 24.4085 19.2527 25.5806 18.0806C26.7527 16.9085 28.3424 16.25 30 16.25C31.6576 16.25 33.2473 16.9085 34.4194 18.0806C35.5915 19.2527 36.25 20.8424 36.25 22.5C36.25 23.3208 36.0883 24.1335 35.7742 24.8918C35.4602 25.6501 34.9998 26.3391 34.4194 26.9194C33.8391 27.4998 33.1501 27.9602 32.3918 28.2742C31.6335 28.5883 30.8208 28.75 30 28.75ZM30 5C25.3587 5 20.9075 6.84374 17.6256 10.1256C14.3437 13.4075 12.5 17.8587 12.5 22.5C12.5 35.625 30 55 30 55C30 55 47.5 35.625 47.5 22.5C47.5 17.8587 45.6563 13.4075 42.3744 10.1256C39.0925 6.84374 34.6413 5 30 5Z"
                fill="#FED700"
              />
            </svg>
            <div className="contact_card_text">
              <h5>Ünvan</h5>
              <p>115 Forest Path, Lake Cesar,</p>
              <p>Montenegro, 65764-5451</p>
            </div>
          </div>
          <div className="contact_card">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
            >
              <path
                d="M50 10H10C7.25 10 5.025 12.25 5.025 15L5 45C5 47.75 7.25 50 10 50H50C52.75 50 55 47.75 55 45V15C55 12.25 52.75 10 50 10ZM50 20L30 32.5L10 20V15L30 27.5L50 15V20Z"
                fill="#FED700"
              />
            </svg>
            <div className="contact_card_text">
              <h5>Email</h5>
              <p>info@leadtech.az</p>
            </div>
          </div>
          <div className="contact_card">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
            >
              <path
                d="M12.5 24.65C17.2997 35.102 25.828 43.3861 36.415 47.88L38.115 48.6375C39.9976 49.4758 42.1156 49.6228 44.0959 49.0525C46.0762 48.4822 47.7917 47.2312 48.94 45.52L51.1625 42.21C51.5103 41.6909 51.6511 41.0604 51.5572 40.4427C51.4633 39.8249 51.1414 39.2648 50.655 38.8725L43.125 32.7975C42.8628 32.5861 42.5605 32.4298 42.2364 32.3382C41.9123 32.2465 41.5729 32.2212 41.2388 32.264C40.9047 32.3067 40.5826 32.4165 40.292 32.5868C40.0014 32.7571 39.7481 32.9844 39.5475 33.255L37.2175 36.3975C31.2366 33.4436 26.3953 28.6015 23.4425 22.62L26.5825 20.29C26.8532 20.0894 27.0804 19.8362 27.2507 19.5456C27.421 19.2549 27.5309 18.9329 27.5736 18.5988C27.6163 18.2646 27.5911 17.9253 27.4994 17.6012C27.4077 17.277 27.2515 16.9748 27.04 16.7125L20.965 9.18252C20.5728 8.69615 20.0126 8.3743 19.3949 8.28037C18.7772 8.18644 18.1466 8.32723 17.6275 8.67502L14.295 10.91C12.5735 12.0645 11.3178 13.7926 10.7514 15.7864C10.1851 17.7803 10.3449 19.9105 11.2025 21.7975L12.5 24.65Z"
                fill="#FED700"
              />
            </svg>
            <div className="contact_card_text">
              <h5>Telefon</h5>
              <p>(+994)51 515 51 15</p>
            </div>
          </div>
          <div className="contact_card">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
            >
              <path
                d="M38.125 33.75H28.125C27.6277 33.75 27.1508 33.5525 26.7992 33.2008C26.4475 32.8492 26.25 32.3723 26.25 31.875V16.875C26.25 16.3777 26.4475 15.9008 26.7992 15.5492C27.1508 15.1975 27.6277 15 28.125 15C28.6223 15 29.0992 15.1975 29.4508 15.5492C29.8025 15.9008 30 16.3777 30 16.875V30H38.125C38.6223 30 39.0992 30.1975 39.4508 30.5492C39.8025 30.9008 40 31.3777 40 31.875C40 32.3723 39.8025 32.8492 39.4508 33.2008C39.0992 33.5525 38.6223 33.75 38.125 33.75ZM30 5C16.195 5 5 16.195 5 30C5 43.805 16.195 55 30 55C43.805 55 55 43.805 55 30C55 16.195 43.805 5 30 5Z"
                fill="#FED700"
              />
            </svg>
            <div className="contact_card_text">
              <h5>İş saatları</h5>
              <p>Bazar Ertəsi-Şənbə: </p>
              <p>10:00-dan - 19:00-dək</p>
            </div>
          </div>
        </div>
        <div className="message_container">
          <h5>Sualınız var? Bizə yazın</h5>
          <div className="message_inp_area">
            <input className="inp_name" type="text" placeholder="Ad/Soyad" />
            <input className="inp_tel" type="tel" placeholder="Telefon" />
            <input className="inp_email" type="email" placeholder="Email" />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Mesaj"
            ></textarea>
          </div>
          <button className="send_btn">Göndər</button>
        </div>
      </div>
    </div>
  )
}

export default Contact