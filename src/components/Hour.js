import React from 'react'
import img1 from '../image/hour-banner.png'
import img2 from '../image/hour-ballon.png'

const Hour = () => {
    return (
        <div>
            <div className='hour'>

                <img className='hour-banner' src={img1} />
                <div className='container'>
                    <h6 className='Our-title' style={{ position: "relative", top: "3rem" }} >Vintage  <span style={{ color: "#FF9900" }} >Hour</span></h6>

                    <div className='row hour-row '>
                        <div className='col-lg-6'>
                            <img className='hour-ballon' src={img2} />
                        </div>
                        <div className='col-lg-6'>
                            <h6 className='hour-title' >Areas of        <span style={{ color: "#FF9900" }} > Expertise</span>    </h6>
                            <p className='hour-para' >Our concepts are representations of real culinary journeys from different parts of the world. In building our brands, we travel across countries, we study the roots, we magnify the details, we immerse ourselves, and we tell a story.</p>
                            <div className='view-more' style={{right:"178px", top:"-1rem"}} >
        <button type='button' className='btn-view-more' >What we do</button>
      </div>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hour