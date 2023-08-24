import React from 'react'
import img1 from '../image/footer.png'
import {
  MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon,
} from 'mdb-react-ui-kit';
import { MdCopyright } from 'react-icons/md';

import Typewriter from "typewriter-effect";


const Footer = () => {
  return (
    <div>
      <div className='footer'>
        <div className='footer-img-only'>
          <img src={img1} className='footer-img' />
          <div className='container position-setting'>
            
        <h6 className='Our-title' style={{ position: "relative", top: "0%", left: ".8rem" }} >Contact   <span style={{ color: "#FF9900" }} >information</span>   </h6>



          <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>


            <section className=''>
              <MDBContainer className='text-center text-md-start mt-5'>
                <MDBRow className='mt-3'>
                  <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                    <h6 className='Our-title' style={{ position: "relative", top: "0%" }} >Contact   <span style={{ color: "#FF9900" }} >with us</span></h6>

                  </MDBCol>
                  <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                    <h6 className='text-uppercase fw-bold mb-4'>
                      {/* <MDBIcon color='secondary' icon='gem' className='me-3' /> */}
                      LONDON OFFICE
                    </h6>
                    <p className='font-weight'>
                      15 Berkeley Street,<br /> Mayfair,<br /> United Kingdom <br />phn.no: 9999999999<br /> mail.id: vintage@gmail.com

                    </p>
                  </MDBCol>


                  <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                    <h6 className='text-uppercase fw-bold mb-4'>
                      {/* <MDBIcon color='secondary' icon='gem' className='me-3' /> */}
                      DUBAI OFFICE
                    </h6>
                    <p className='font-weight'>
                      15 Berkeley Street,<br /> Mayfair,<br /> United Kingdom <br />phn.no: 9999999999<br /> mail.id: vintage@gmail.com

                    </p>
                  </MDBCol>



                  <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                    <h6 className='text-uppercase fw-bold mb-4'>
                      {/* <MDBIcon color='secondary' icon='gem' className='me-3' /> */}
                      PARIS OFFICE
                    </h6>
                    <p className='font-weight'>
                      15 Berkeley Street,<br /> Mayfair,<br /> United Kingdom <br />phn.no: 9999999999<br /> mail.id: vintage@gmail.com
                    </p>
                  </MDBCol>


                  <MDBCol>

                  </MDBCol>
                  <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4 mr-lft'>
                    <h6 className='text-uppercase fw-bold mb-4'>
                      {/* <MDBIcon color='secondary' icon='gem' className='me-3' /> */}
                      NEWYORK OFFICE
                    </h6>
                    <p className='font-weight'>
                      15 Berkeley Street,<br /> Mayfair,<br /> United Kingdom <br />phn.no: 9999999999<br /> mail.id: vintage@gmail.com

                    </p>
                  </MDBCol>

                  <MDBCol>
                    <form>
                      <h6 className='text-uppercase fw-bold mb-4'>
                        {/* <MDBIcon color='secondary' icon='gem' className='me-3' /> */}
                        MAIL TO US
                      </h6>
                      <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Name*:</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                      </div>
                      <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email*:</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                      </div>
                      <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Phone*:</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                      </div>
                      <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">message*:</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                      </div>

                      <button type="submit" class="btn btn-primary width-medium">send</button>
                    </form>
                  </MDBCol>


                </MDBRow>
              </MDBContainer>
            </section>


          </MDBFooter>


          <hr style={{ border: "1px solid black", width: "113.4%", position: "relative",top:"3rem",left:"-5rem" }}></hr>
          {/* <div className='container'> */}
          <div className='copyright-Design'>
            
          <h6 className='copyright' ><MdCopyright />2022 vintage hospitality Services.All rights reserved
            <span style={{ marginLeft: "1rem" }}>|</span>
            <span style={{ marginLeft: "1rem" }}>Privacy Policy</span> </h6>
            <h6 className='copyright' style={{textAlign:"right",    marginInlineStart: "auto"}} >Design By MJ VAGHASIYA</h6>
          </div>

        </div>
        </div>


      </div>
    </div>

  )
}

export default Footer



