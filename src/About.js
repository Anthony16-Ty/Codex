import React from "react";

function About()


{
    return (
        <div>
        <div className='container'>
           <div className='row justify-content-evenly py-5'>
               <div className='col-sm-8 col-md-5'>
                   <img className='img-fluid' src="https://www.impactbnd.com/hubfs/blog-image-uploads/best-about-us-pages.jpg" alt="about us img"/>
               </div>
               <div className='col-12 col-md-6 mt-5 mt-md-0'>
                 <h2 className='mb-0'>CODEX</h2>
                 <h1 style={{fontWeight:1000}}>Codex is the real deal</h1>
                 <p style={{fontWeight: 600}}>A reliable learning management system that can be used by schools to get and create a variety of student information.</p>
                </div>
               </div>
           </div>
        </div>
    );
}
    


export default About;