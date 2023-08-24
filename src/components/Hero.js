import React from 'react'
import img1 from '../image/banner 1.png'




const Hero = () => {
    return (
        <div>
            <div className='hero'>

                <img src={img1} className='hero-img' />





                <div className='container'>
                    <div className='row position-top'>
                        <div className='col-md-5 hero-left'>
                            <h1>

                                Vintage
                                <br />
                                <span className='hero-down' > Hospitality </span>
                            </h1>
                        </div>
                        <div className='col-md-5 flo-an '>
                            <p className='hero-right'>The reason for our success is no secret. It comes down to one single principle that transcends time and geography, religion and culture. It’s the Golden Rule – the simple idea that if you treat people well, the way you would like to be treated, they will do the same.
                            </p>      <br />      <span className='artist-name' >MJ VAGHASIYA  </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Hero













