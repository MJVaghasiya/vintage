import React from 'react'
import img1 from '../image/vintage1.png';
import img2 from '../image/vintage2.png';
import img3 from '../image/vintage3.png';
import img4 from '../image/vintage4.png';
import img5 from '../image/vintage5.png';

const OurStory = () => {
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  
  return (
    <div>
      <div className='relative'>
        <div className='our-story'>
          <div className='container'>

            <h6 className='Our-title' >Our   <span style={{ color: "#FF9900" }} >Story</span></h6>
            <div className='row'>
              <div className='col-lg-4 text-left '>
                <img className=' img-up' src={img1} />
                <h6 className='title-name' >Passionate</h6>
                <p className='Passionate-concept' >Our concepts are crafted by passion in every single detail, designing lasting moments.</p>
                <img className=' img-down' src={img2} />
              </div>
              <div className='col-lg-4'>
                <h6 className='title-name' >Distinct</h6>
                <p className='Distinct-concept'>We deliver unique experiences in distinctive and elegant settings, ensuring that each visit is as memorable as the last.</p>
                <img className='img-up-3' src={img3} />
              </div>
              <div className='col-lg-4'>
                <img className=' img-up-4' src={img4} />
                <h6 className='title-name text-left' >World Class</h6>
                <p className='Passionate-concept'>Our collection consists of award - winning restaurants situated in premium dining destinations.</p>
                <img className=' img-down-2' src={img5} />
              </div>
            </div>
            <div className='button'>
              <button type='button' className='btn-readmore' >Read more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurStory








// <div className='col-lg-3  Passionate-up'>
// <img className=' Passionate-up' src={img1}/>
// <h6>Passionate</h6>
// <p>Our concepts are crafted by passion in every single detail, designing lasting moments.</p>
// <img className=' Passionate-up' src={img2}/>

// </div>
// <div className='col-lg-3  Passionate-up'>
// <h6>Distinct</h6>
// <p>We deliver unique experiences in distinctive and elegant settings, ensuring that each visit is as memorable as the last.</p>
// <img className=' Passionate-up' src={img3}/>
// </div>
// <div className='col-lg-3  Passionate-up'>
// <img className=' Passionate-up' src={img4}/>
// <h6>World Class</h6>
// <p>Our collection consists of award - winning restaurants situated in premium dining destinations.</p>
// <img className=' Passionate-up' src={img5}/>
// </div>