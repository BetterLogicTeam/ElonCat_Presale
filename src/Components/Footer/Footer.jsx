import React from 'react'
import "./Footer.css"

export default function Footer() {
  return (
    <footer className='main_footer' style={{background:"black"}}>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-4 order-md-1 order-2">
          <div className="footer-links">
            <ul>
              <li>
                <a href="#">ABOUT</a>
              </li>
              <li>
                <a href="#">HOW TO BUY</a>
              </li>
              <li>
                <a href="#">ROADMAP</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">PRIVACY POLICY</a>
              </li>
              <li>
                <a href="#">COOKIES</a>
              </li>
              <li>
                <a href="#">TERMS &amp; CONDITIONS</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-4 order-md-2 order-1">
          <div className="text-center">
            <img src="images/footer-logo.png" alt="" className="img-fluid" />
          </div>
        </div>
        <div className="col-md-4 order-md-3 order-3">
          <div className="footer-left-para">
            <p>
              My ‘ELONCAT' Office PanamáTorre Inteligente, CrediCorp Bank, C. 20
              2101Panamá, Provincia de Panamá, PanamaCONTACT@ELONCAT.COM
            </p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Sponsored by CoinNews. Get the latest Bitcoin &amp; Crypto News</p>
        <p className="gray-text medium-spacer">
          Copyright 2024 ELONXCAT. All Rights Reserved.
        </p>
        <p className="gray-text">
          Disclaimer : ELONXCAT is a meme coin with speculative value derived only
          from the universal cultural capital of the ELONXCAT meme The value of
          cryptocurrencies may go down as well as up. Ape responsibly
        </p>
      </div>
    </div>
  </footer>
  
  )
}
