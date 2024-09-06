import React from 'react'
import "./Youtube_section.css"

export default function Youtube_section() {
  return (
    <section className='main_youtube_section'>
        <div className="container">
            <h1 className='yt_head'> Watch our latest videos </h1>
            <div className="row mt-5">
                <div className="col-md-3 col-6 mt-3 mt-md-0"  data-aos="fade-up"  data-aos-duration="1000">
                    <div className="yout_box">
                    <iframe  src="https://www.youtube.com/embed/1YyAzVmP9xQ?si=vUAH7cbeX9hEyH_q" title="YouTube video player" 
                    className="w-100 yt_vd h-100" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
                <div className="col-md-3 col-6 mt-3 mt-md-0"  data-aos="fade-up"  data-aos-duration="1200">
                    <div className="yout_box">
                    <iframe className="w-100 yt_vd h-100" src="https://www.youtube.com/embed/NDetuRLQso8?si=Zhycsi8NL04Nzt5n" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
                <div className="col-md-3 col-6 mt-3 mt-md-0"  data-aos="fade-up"  data-aos-duration="1400">
                    <div className="yout_box">
                    <iframe  className='w-100 yt_vd h-100' src="https://www.youtube.com/embed/MFw8Ax0p7dA?si=4jMLA0vjZwH-xi5T" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
                <div className="col-md-3 col-6 mt-3 mt-md-0"  data-aos="fade-up"  data-aos-duration="1600">
                    <div className="yout_box">
                    <iframe className='w-100 yt_vd h-100' src="https://www.youtube.com/embed/JZk6T1TmIrs?si=ByQEAW6eadCtFT2j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
