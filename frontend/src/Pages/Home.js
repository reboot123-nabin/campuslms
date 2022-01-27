 import React,{useState,useEffect} from 'react';

import "aos/dist/aos.css";
import AOS from "aos";
const Home = () => {

  

    useEffect(() => {
        
        AOS.init({
          duration : 2000
        });
      }, []);


      window.onload=function(){
        const texts=["hello i am nabin","welcome to my website","Do you want to enroll our course"];
        let count=0;
        let index=0;
        let currentText='';
        let letter='';
        (function type(){
        if(count===texts.length){
            count=0;
        }
        currentText=texts[count];
        letter=currentText.slice(0,++index);
        document.querySelector(".typing").textContent=letter;
        if(letter.length===currentText.length){
            count++;
            index=0;
        }
setTimeout(type,200);


    })();
        
        
    }
     
  return (<div>

<section id="header">

        <div className="learning ">
            <div className="container-fluid">
               
                        <div className="jumbotron jumbotron-fluid jumbodescription">
                            <div className="container">
                                <h1 className="display-4 text-center typing" style={{fontweight:'400',margintop:'60px'}}>Start Learning With Us Now</h1>
                                <p className="lead text-center">There are many variation of passages of Lorem ipsum available, but the <br/>majority have
                                    suffered alteration in some form, by injected human, or randomized words</p>
                            </div>
                            <div className="buttonsection mt-5">
                                <input type="text" name="" placeholder="Search Your Favourite Course" />
                                <button type="submit" className="Search" value="Search">Search <i className="fa fa-search"
                                        aria-hidden="true"></i> </button>
                            </div>
                        </div>
                     
                    </div>





                 
                
            </div>
     
 



        <div className="watchcourse ">
            <div className="container-fluid ">
                <div className="row">
                    <div className="col-lg-4 col-sm-8 col-md-4 col-8 offset-sm-2 offset-lg-0 offset-md-0">
                        <div className="toggle">
                            <i className="fa fa-play fa-2x" aria-hidden="true"></i>

                        </div>
                        <p className="watch ">Watch Courses Demo Video</p>
                    </div>

                    <div className="col-lg-4 col-sm-8 col-md-4 col-8 offset-sm-2 offset-lg-0 offset-md-0">

                        <div className="toggle">
                            <i className="fa fa-question fa-2x" aria-hidden="true"></i>

                        </div>
                        <p className="watch">Watch Courses Demo Video</p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-8 col-8  offset-sm-2 offset-lg-0 offset-md-0">
                        <div className="toggle">
                            <i className="fa fa-video fa-2x" aria-hidden="true"></i>

                        </div>
                        <p className="watch">Watch Courses Demo Video</p>
                    </div>
                </div>
            </div>


            <section id="sec-1">
                <div className="container">
                
                  <a href="#course">
                    <div className="scroll-down mx-auto"></div>
                  </a>
                </div>
              </section>
       
            
        </div>




  










    </section>
<section id="course" >

    


<div className="jumbotron jumbotron-fluid ">
    <div className="container-fluid " data-aos={"fade-left"}>
        <h1 className="display-8 text-center" style={{fontweight:'bold'}}>Our Course</h1>
        <p className="lead text-center mt-5">There are many variation of passages of Lorem ipsum available, but the majority have<br/>
            suffered alteration in some form, by injected human, or randomized words</p>
       
    
    </div>

</div>
<div className="container ">
    <div className="row ">
        <div className="col-md-4 col-lg-4 col-12 col-sm-12 px-4 py-4 " data-aos={"fade-left"} >

            <div className="card" style={{height: '35rem',background: 'linear-gradient(to right, #2D91C5,#2D91C5)'}}>
                <h2 className="text-center mt-5" style={{color:'White'}}><small>$</small>200. <small>00</small></h2>
                <p className="text-center"  style={{color:'White'}}>Start Learn</p>
                <h2 className="text-center"  style={{color:'White'}}>UI/UX Designer</h2>
                <p className="text-center mt-5"  style={{color:'White'}}>One Year Standard Access</p>
                <p className="text-center"  style={{color:'White'}}>Limited Courses</p>
                <p className="text-center"  style={{color:'White'}}>4G+ Lessons</p>
                <p className="text-center"  style={{color:'White'}}>Standard Tutorials</p>
                <button className="mt-5 signup" style={{background: '#F2F3F3', color:'#0099FF',borderradius:'4px'}}>SignUp</button>
              </div>

        </div>
        <div className="col-md-4 col-lg-4 col-12 col-sm-12 "  data-aos={"flip-up"} >
            <div className="card "  style={{height: '35rem',background: 'linear-gradient(to right, #2D91C5,#2D91C5)'}}>
                <h2 className="text-center mt-5"  style={{color:'White'}} ><small>$</small>200. <small>00</small></h2>
                <p className="text-center" style={{color:'White'}}>Start Learn</p>
                <h2 className="text-center"  style={{color:'White'}}>UI/UX Designer</h2>
                <p className="text-center mt-5"  style={{color:'White'}}>One Year Standard Access</p>
                <p className="text-center" style={{color:'White'}}>Limited Courses</p>
                <p className="text-center"  style={{color:'White'}}>4G+ Lessons</p>
                <p className="text-center" style={{color:'White'}} >Standard Tutorials</p>
                <button className="mt-5 signup" style={{background: '#F2F3F3', color:'#0099FF',borderradius:'4px'}}>SignUp</button>
              </div>
        </div>
        <div className="col-md-4 col-lg-4 col-12 col-sm-12 px-4 py-4"  data-aos={"flip-right"} >
            
            <div className="card"  style={{height: '35rem',background: 'linear-gradient(to right, #2D91C5,#2D91C5)'}}>
                <h2 className="text-center mt-5"  style={{color:'White'}}><small>$</small>200. <small>00</small></h2>
                <p className="text-center"  style={{color:'White'}}>Start Learn</p>
                <h2 className="text-center"  style={{color:'White'}}>UI/UX Designer</h2>
                <p className="text-center mt-5"  style={{color:'White'}}>One Year Standard Access</p>
                <p className="text-center"  style={{color:'White'}}>Limited Courses</p>
                <p className="text-center"  style={{color:'White'}}>4G+ Lessons</p>
                <p className="text-center"  style={{color:'White'}}>Standard Tutorials</p>
                <button className="mt-5 signup" style={{background: '#F2F3F3', color:'#0099FF',borderradius:'4px'}}>SignUp</button>
              </div>
        </div>
    </div>
</div>
</section>
 
<section id="education">

<div className="jumbotron jumbotron-fluid ">
    <div className="container-fluid " data-aos={"fade-right"}>
        <h1 className="display-8 text-center" style={{fontweight:'bold'}}>Our Course</h1>
        <p className="lead text-center mt-5">There are many variation of passages of Lorem ipsum available, but the majority have<br/>
            suffered alteration in some form, by injected human, or randomized words</p>

    
    </div>

</div>
<div className="container "  style={{color:'White'}}>
    <div className="row">
        <div className="col-md-4 col-12 col-sm-12 col-lg-4 p-4 ">

            <div className="card boxing" style={{ border:'none'}}  data-aos={'zoom-in-right'}>
                <img className="card-img-top elon p-md-30 p-sm-30" src='billgate.jpg' alt="Card image cap" />

           
                <div className="card-body" style={{background: '#02A696'}}>
                 <div className="container-row">
                     <div className="row">
                         <div className="col-md-6 col-lg-6 col-12">
                             <h5>Bill Gates</h5>
                             <p>UI/UX Designer</p>
                         </div>
                         <div className="col-md-6 col-lg-6 col-12  ">

                            <i className="fab fa-facebook fa-2x m-2"></i>
                            <i className="fab fa-twitter fa-2x m-2"></i>
                            <i className="fab fa-instagram fa-2x m-2"></i>
                    
                
                         </div>
                     </div>
                 </div>
                </div>
              </div>
        </div>
        <div className="col-md-4 col-12 col-sm-12 col-lg-4 p-2 mt-1  " data-aos={'zoom-in'} >
            <div className="card boxing" style={{ border:'none'}}  >
                <img className="card-img-top elon p-md-30 p-sm-30" src="mark.jpg" alt="Card image cap" style={{height:'20rem'}}/>

                <div className="card-body" style={{background: '#02A696'}}>
                    <div className="container-row">
                        <div className="row">
                            <div className="col-md-6 col-lg-6 col-12">
                                <h5>Bill Gates</h5>
                                <p>UI/UX Designer</p>
                            </div>
                            <div className="col-md-6 col-lg-6 col-12">

                                <i className="fab fa-facebook fa-2x m-2"></i>
                                <i className="fab fa-twitter fa-2x m-2"></i>
                                <i className="fab fa-instagram fa-2x m-2"></i>
                            </div>
                        </div>
                    </div>
                   </div>
              </div>
        </div>
        <div className="col-md-4 col-lg-4 col-sm-12 col-12 p-4 "  data-aos={'zoom-in-left'}>
            <div className="card boxing" style={{ border:'none'}} >
                <img className="card-img-top elon p-md-30 p-sm-30" src="mark.jpg"  alt="Card image cap"/>

                <div className="card-body" style={{background: '#02A696'}}>
                    <div className="container-row">
                        <div className="row">
                            <div className="col-md-6 col-lg-6 col-12">
                                <h5>Bill Gates</h5>
                                <p>UI/UX Designer</p>
                            </div>
                            <div className="col-md-6 col-lg-6 col-12">
                                <i className="fab fa-facebook fa-2x m-2"></i>
                                <i className="fab fa-twitter fa-2x m-2"></i>
                                <i className="fab fa-instagram fa-2x m-2"></i>
                            </div>
                        </div>
                    </div>
                   </div>
              </div>
        </div>
    </div>
</div>


<div className="threedot">
<div className="toggle2">
</div>

<div className="toggle3">
</div>
<div className="toggle2">
</div>
</div>
</section> 







 








 

 <section id="information" className="mt-5">
<div className="jumbotron jumbotron-fluid ">
    <div className="container-fluid " >
        <h1 className="display-8 text-center" style={{fontweight:'bold',fontfamily:'Times New Roman'}}>Get In Touch</h1>
        <p className="lead text-center mt-5" style={{color:'blue', fontweight:'400'}}>Feel free to drop us a line to contact us</p>
          
            
    </div>
<div className="container">
    <div className="row">
        <div className="col-md-6 col-lg-6 col-12 col-sm-12">
            <h2 className="text-center mt-5"style={{fontfamily:'Times New Roman'}}>Feel Free to Contact Us</h2>
            <p>Hello Everyone! Have a great day :) I am here to help you. If you want to know something or you have any suggestion then please mail me. Thank You</p>
      <div className="formleft">
            <form className="form-horizontal " action="/action_page.php">
                <div className="form-group">
                  <label className="control-label col-sm-2" for="email">Name:</label>
                  <div className="col-sm-10">
                    <input type="Name" className="form-control" id="Name" placeholder="Enter Name"/>
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" for="pwd">Email:</label>
                  <div className="col-sm-10">
                    <input type="Email" className="form-control" id="pwd" placeholder="Enter password"/>
                  </div>
                </div>

                <div className="form-group">
                    <label className="control-label col-md-2" for="pwd">Message:</label>
                    <div className="col-sm-10">
                        ​<textarea id="txtArea" rows="10" cols="70" className="form-control" style={{height: '80px'}}></textarea>
                    </div>
                  </div>
              
                <div className="form-group">
                  <div className="col-sm-offset-2 col-sm-10">
                    <button type="submit" className="btn btn-primary ml-5">Submit</button>
                  </div>
                </div>
              </form>  
            </div>
        </div>
        <div className="col-md-6 col-lg-6">

            <div className="logopage">
                <div className="container-fluid p-2 mt-5 d-flex justify-content-center">
                    
                    <i className="fab fa-facebook fa-3x" style={{color:'black'}}></i>
                    <i className="fab fa-twitter fa-3x ml-5"style={{color:'black'}}></i>
                    <i className="fab fa-instagram fa-3x  ml-5" style={{color:'black'}}></i>
                    <i className="fab fa-linkedin-in fa-3x  ml-5" style={{color:'black'}}></i>
        
                </div>


                <div className="googlemap d-flex justify-content-center">

                    <iframe className="mapsource" src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d393.43526914434494!2d85.3068999847664!3d27.688584043753625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e2!4m3!3m2!1d27.688566899999998!2d85.30713879999999!4m3!3m2!1d27.6885056!2d85.3069525!5e0!3m2!1sen!2snp!4v1641989063278!5m2!1sen!2snp"></iframe>
                </div>
               
            </div>
            
           
      
        </div>
    </div>
</div>
</div>
</section>  

  </div>
  );
};

export default Home;
