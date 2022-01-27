import React from 'react';

const Footer = () => {
  return <div>
    <footer class="page-footer font-small blue ">


        <div class="container-fluid text-align-center">

            <div class="row">

            

                <div class="p-5 col-md-3 col-6 col-lg-3 col-sm-6 mt-md-0 mt-3 offset-lg-0 offset-md-0 offset-sm-3">

                   
                    <img src="think.png"  style={{height:'130px'}} class="footerlogo" alt=""/>
                    
                </div>
               
              
            
                <div class="p-5 col-md-3 col-lg-3 mb-md-0 mb-3 col-sm-6  offset-lg-0 offset-md-0 offset-sm-3">

                 
                    <h5 class="text-uppercase">Solutions</h5>

                    <ul class="list-unstyled">
                        <li>
                            Cloud Native
                        </li>
                        <li>
                            Kubernetes Solutions
                        </li>
                        <li>
                            AWS Security Review
                        </li>
                        <li>
                            AWS Well-Architected
                        </li>
                        <li>
                            Review
                        </li>
                    </ul>

                </div>
              
          
                <div class="p-5 col-md-3 col-lg-3 mb-md-0 mb-3 col-sm-6  offset-lg-0 offset-md-0 offset-sm-3">

              
                    <h5 class="text-uppercase">Company</h5>

                    <ul class="list-unstyled">

                        <li>
                            Blog
                        </li>
                        <li>
                            News
                        </li>
                        <li>
                            Brochures
                        </li>
                        <li>
                            Whitepaper & Reports
                        </li>
                    </ul>

                </div>
         
  
                <div class="p-5 col-md-3 col-lg-3 col-sm-6 col-sm-6  mb-md-0 mb-3 offset-lg-0 offset-md-0 offset-sm-3">

                  
                    <h5 class="text-uppercase">Subscribe</h5>

                    <ul class="list-unstyled">

                        <li>
                            Your Email
                            <div className="form-group" >
                            <input type="text" className="form-control"></input>
                            </div>
                        </li>

                    </ul>

                </div>
            </div>
          

        </div>
    
        <div class="footer-copyright mt-5 ml-5 py-3">
            <p class="text-center">Copyright © 2020 01cloud. All Rights Reserved.</p>

        </div>
    

    </footer>

  </div>;
};

export default Footer;
