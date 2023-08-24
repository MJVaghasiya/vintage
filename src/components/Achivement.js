import React from 'react'
import img1 from '../image/award 1.png'
import img2 from '../image/award 2.png'
import img3 from '../image/award 3.png'
import img4 from '../image/award 4.png'
import img5 from '../image/award 5.png'

const Achivement = () => {
  return (
    <div>
        <div className='award'>
            <div className='container'>

        <h6 className='Our-title' style={{ position: "relative", top: "2rem", marginBottom:"8rem" }} > Achivements &  <span style={{ color: "#FF9900" }} > Awards</span></h6>
          <div className='row'>
            <div className='col-lg-4 ds-flx'>
                <img className='width' src={img1}/>
                <img className='width-down' src={img2}/>
            </div>
            <div className='col-lg-4'>
                <img src={img3} className='po-left'/>

            </div>
            <div className='col-lg-4 award-last '>
                <img src={img4} className='award-bk-img' />
                <img src={img5} className='award-up-img' />
            </div>
          </div>
          
          
          
            </div>
       

        </div>
    </div>
  )
}

export default Achivement