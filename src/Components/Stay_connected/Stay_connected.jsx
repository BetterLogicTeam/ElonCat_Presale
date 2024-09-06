import React from 'react'
import "./Stay_connected.css"
import { FaTelegram, FaTelegramPlane, FaTwitter } from 'react-icons/fa'
import { FaSquareTwitter, FaSquareXTwitter, FaXTwitter } from 'react-icons/fa6'
export default function Stay_connected() {
  return (
    <section className="contact-sec py-5 " style={{background:"black"}}>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="title text-center">
            <h2>STAY CONNECTED</h2>
          </div>
          <ul className="contact-list" data-aos="fade-up"  data-aos-duration="1000">
            <li>
              <a href="#">
                
                  <FaXTwitter  className='fs-3'/>
                {/* <img src="images/twiter.svg" alt="" className="img-fluid" /> */}
                TWITTER
              </a>
            </li>
            <li>
              <a href="#">
              <FaTelegramPlane />
                {/* <img src="images/telegram.svg" alt="" className="img-fluid" /> */}
                telegram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  
  )
}
