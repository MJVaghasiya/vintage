import React from 'react'
import img1 from '../image/service 1.png';
import img2 from '../image/service 2.png';
import img3 from '../image/service 3.png';
import img4 from '../image/service 4.png';
import img5 from '../image/service 5.png';
import img6 from '../image/service 6.png';
import img7 from '../image/service 7.png';
import img8 from '../image/service 8.png';
import img9 from '../image/service 9.png';
import img10 from '../image/service 10.png';

const Purpose = () => {
    return (
        <div>
            
            <div className='container'>

                <div className='gallery'>
                <h6 className='Our-title' style={{position:"relative",top:"0%"}} >Our diversity fuels   <span style={{ color: "#FF9900" }} >our purpose</span>   </h6>
        <hr className='up-hr' style={{position:"relative",width:"113%", left:"-5rem",top:"3rem"}}></hr>
                   <div className='row'>
                    <div className='col-md-4 left-an'>
                        <img src={img1} style={{height:"13.2rem"}} />
                        <div className='row' style={{marginTop:"1.5rem"}} >
                        <div className='col-lg-6'>
                            <img src={img2} style={{height:"8rem"}}/>
                        </div>
                        <div className='col-lg-6'>
                            <img src={img3} style={{height:"8rem"}}/>
                        </div>
                        </div>
                        <img src={img4} style={{marginTop:"1.5rem"}}/>
                    </div>

                    {/* second row */}
                    <div className='col-lg-3 up-an '>
                        <img src={img5} style={{height:"33.4rem"}} />
                    </div>


                    {/* third-row */}
                    <div className='col-lg-5 right-an'>
                    <img src={img6}/>
                    <div className='row' style={{marginTop:"1.5rem"}} >
                    <div className='col-lg-4'>
    <img src={img7} style={{height:"15.3rem"}}/>
</div>
<div className='col-lg-4'>
    <img src={img8}/>
    <img src={img9} style={{marginTop:"1.9rem"}} />
</div>
<div className='col-lg-4'>
    <img src={img10} style={{height:"15.2rem"}} />
</div>
                    </div>
                    </div>


                   </div>
                   <hr className='up-hr' style={{position:"relative",width:"113%", left:"-5rem",top:"-3rem"}}></hr>

                </div>
            </div>
        </div>
    )
}

export default Purpose








// <div className='row'>
// <div className='col-lg-6' style={{width:"30%", height:"33%"}}>
//     <img src={img1} />
//     <div className='row' style={{marginTop:"1.5rem"}}>
//         <div className='col-lg-6'>
//             <img src={img2} style={{height:"8.5rem"}} />
//         </div>
//         <div className='col-lg-6'>
//             <img src={img3} />
//         </div>
//     </div>

//     <img src={img4}  style={{marginTop:"1.5rem"}}/>

// </div>


// {/* SECOND-ROW */}
// <div className='col-lg-6'>
//     <img src={img5} style={{height:"33.6rem"}} />

// </div>
// {/* THIIRD-ROW */}
// <div className='col-lg-6' >
//     <img src={img6} />
//     <div className='row' style={{lineHeight:"7rem", marginTop:"1.5rem"}}>
//         <div className='col-lg-6'>

//             <img src={img7} style={{height:"16rem"}} />
//         </div>
//         <div className='col-lg-6'>

//             <img src={img8} />
//             <img src={img9} />
//         </div>
//         <div className='col-lg-6'>
//             <img src={img10} style={{height:"16rem"}} />

//         </div>
//     </div>


// </div>
// </div>