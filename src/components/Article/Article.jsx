import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

import "../../App.css";
import "./Article.css";

const Article = () => {
  return (
    <div>
    <Navbar className="navbar-box" />
    <div>
            <div className="maincontent">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <h1 className="main-text">Ways to deliver at your home and the measures we take</h1>

                        <div className="featured-img mt-5 mb-5 " >
                            <img data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-offset="0" src="https://images.pexels.com/photos/2814828/pexels-photo-2814828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            width={"200%"}/>
                            
                        </div>

                      <article className="article" data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-offset="0"
                        data-aos-delay="200">
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. 
                            </p>

                            <p>Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>

                            <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>                    
                        </article>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <Footer hideCart={1}/>
    </div>
  )
}

export default Article