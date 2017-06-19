import React from 'react';

const Footer = () => {
  return(
     <footer className="black">
       <div className="container">
         <div className="row m-b-0">
           <div className="col s6">
             <a className="grey-text text-lighten-4 left" href="http://jonwaldsteinweb.com" target="_blank">&copy; {new Date().getFullYear()} Jon Waldstein</a>
           </div>
           <div className="col s6">

           </div>
         </div>
       </div>
     </footer>

  )
}
export default Footer;
