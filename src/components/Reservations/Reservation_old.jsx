
import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero2 from '../Hero/Hero2'

import '../../App.css';
import "./Reservation.css";

const Reservation = () => {
  return (
    <div>
    <Navbar/>
        <div class="maincontent pt-0 pb-0">
        <div class="d-md-flex h-md-100 align-items-center">
            <div class="col-md-6 p-0 h-md-100">		
                <Hero2 subTitle={"Book a Table to experience the best flavours of Thai and Indian cuisine."}/>		
            </div>
        </div> 
        <div className="col-md-6 p-0 h-md-100 loginarea">
            <div className="d-md-flex align-items-center h-md-100 p-3 justify-content-center">
                <form>
                <h3 className="mb-4 text-center signin-text">Reserve Table</h3>
                <div className="form-group">
                    <input type="text" className="form-control signin-input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" required=""/>
                </div>
                <div className="form-group">
                <input type="number" className="form-control signin-input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Table No" required=""/>
                </div>
                <div className="form-group">
                <input type="date" className="form-control signin-input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Date" required=""/>
                </div>
                <div className="form-group">
                    <input type="time" className="form-control signin-input" id="exampleInputPassword1" placeholder="Time" required=""/>
                </div>
                <div className="form-group">
                <input type="text" className="form-control signin-input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Any Preferences" required=""/>
                </div>
                <div className='signin-button-box'>
                    <div>
                      <button type="submit" className="btn btn-dark btn-round btn-block signin-button">Book a Table</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Reservation