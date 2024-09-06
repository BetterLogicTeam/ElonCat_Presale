import React from 'react'
import "./Landing_page.css"
import hero from "../Assets/hero-img.png"
import banner_logp from "../Assets/banner-logo.png"
import Header from "../Header/Header"

export default function Landing_page() {
    return (
        <div className='main_landing_page'>
            <section className="hero-sec">
            <Header/>
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-6 order-lg-1 order-2 " data-aos="fade-right">
                            <div className="image-holder">
                                <img src={hero} alt="" className="img-fluid" />
                                <h2 className='head_is'>Enjoy space travel <br /> with cool cats!</h2>
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-2 order-1" data-aos="fade-left">
                            <div className="banner-logo">
                                <img src={banner_logp} alt="" className="img-fluid" />
                                {/* <div className="x-logo">
            <img src="images/x-shape.png" alt="" />
          </div> */}
                                <div className="textbox">
                                    <h1>ELONXCAT is real ELONMUSK &amp; X meme project</h1>
                                    <p>
                                        Advanced Web3 Ecosystem : STAKING | DEX | AI | GAME | NFT MARKET
                                        KYC+ , Audited
                                    </p>


                                    <div className="row my-3">
                                        <div className="col-4">
                                            <div className='box_landing'>

                                                <h6> Potential of project</h6>
                                                <span>750+</span>
                                            </div>

                                        </div>
                                        <div className="col-4">
                                            <div className='box_landing'>

                                                <h6>  Market cap Target</h6>
                                                <span>$150.52M</span>
                                            </div>

                                        </div>
                                        <div className="col-4">
                                            <div className='box_landing'>

                                                <h6>  Investors</h6>
                                                <span>1750</span>
                                            </div>

                                        </div>
                                    </div>


                                    <div className='d-flex gap-3 mt-4 align-items-center'>
                                        <button className='white_paer_btn'>White Paper</button>
                                        <button className='white_paer_btn' style={{background:"#00ccff"}}>Audit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
