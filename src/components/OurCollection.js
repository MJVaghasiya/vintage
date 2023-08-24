import React from 'react'
import img1 from '../image/London.png';
import img2 from '../image/Dubai.png';
import img3 from '../image/Paris.png';
import img4 from '../image/NewYork.png';





const OurCollection = () => {

  return (
    <div>

      <div className='our-collection-box'>
        <div className='container'>
        <h6 className='Our-title' >Our   <span style={{ color: "#FF9900" }} >Collection</span></h6>
       </div>
       <hr className='up-hr' ></hr>       
      <div className='container'>



<div className='collection-box'>


<div class="flip-card flip-1">
  <div class="flip-card-inner">
    <div class="flip-card-front">
    <div style={{ backgroundColor: "black" }} class="card bg-dark text-white">
                <img src={img1} class="card-img our-collection" alt="..." />
                <div class="card-img-overlay">
                  <h5 class="card-title">London</h5>
                  <p class="card-text">Il Borro Tuscan Bistro London’s cuisine is a modern interpretation of Tuscan classics and stays true to Il Borro’s farm-to-table concept.</p>

                </div>
              </div>
    </div>
    <div class="flip-card-back">
    <h5 class="card-title">London</h5>
                  <p class="card-text">Il Borro Tuscan Bistro London’s cuisine is a modern interpretation of Tuscan classics and stays true to Il Borro’s farm-to-table concept.</p>

    </div>
  </div>
</div>







<div class="flip-card flip-2">
  <div class="flip-card-inner">
    <div class="flip-card-front">
    <div style={{ backgroundColor: "black" }} class="card bg-dark text-white">
                <img src={img2} class="card-img our-collection" alt="..." />
                <div class="card-img-overlay">
                  <h5 class="card-title">Dubai</h5>
                  <p class="card-text">Il Borro Tuscan Bistro London’s cuisine is a modern interpretation of Tuscan classics and stays true to Il Borro’s farm-to-table concept.</p>

                </div>
              </div>
    </div>
    <div class="flip-card-back">
    <h5 class="card-title">Dubai</h5>
                  <p class="card-text">Il Borro Tuscan Bistro London’s cuisine is a modern interpretation of Tuscan classics and stays true to Il Borro’s farm-to-table concept.</p>

    </div>
  </div>
</div>







<div class="flip-card flip-3">
  <div class="flip-card-inner">
    <div class="flip-card-front">
    <div style={{ backgroundColor: "black" }} class="card bg-dark text-white">
                <img src={img3} class="card-img our-collection" alt="..." />
                <div class="card-img-overlay">
                  <h5 class="card-title">Paris</h5>
                  <p class="card-text">Il Borro Tuscan Bistro London’s cuisine is a modern interpretation of Tuscan classics and stays true to Il Borro’s farm-to-table concept.</p>

                </div>
              </div>
    </div>
    <div class="flip-card-back">
    <h5 class="card-title">Paris</h5>
                  <p class="card-text">Il Borro Tuscan Bistro London’s cuisine is a modern interpretation of Tuscan classics and stays true to Il Borro’s farm-to-table concept.</p>

    </div>
  </div>
</div>







<div class="flip-card flip-4">
  <div class="flip-card-inner">
    <div class="flip-card-front">
    <div style={{ backgroundColor: "black" }} class="card bg-dark text-white">
                <img src={img4} class="card-img our-collection" alt="..." />
                <div class="card-img-overlay">
                  <h5 class="card-title">NewYork</h5>
                  <p class="card-text">Il Borro Tuscan Bistro London’s cuisine is a modern interpretation of Tuscan classics and stays true to Il Borro’s farm-to-table concept.</p>

                </div>
              </div>
    </div>
    <div class="flip-card-back">
    <h5 class="card-title">NewYork</h5>
                  <p class="card-text">Il Borro Tuscan Bistro London’s cuisine is a modern interpretation of Tuscan classics and stays true to Il Borro’s farm-to-table concept.</p>

    </div>
  </div>
</div>
</div>     

<hr className='down-hr' ></hr>
      </div>
      </div>
 <div className='view-more'>
        <button type='button' className='btn-view-more' >View more</button>
      </div>

    </div>

  )
}

export default OurCollection