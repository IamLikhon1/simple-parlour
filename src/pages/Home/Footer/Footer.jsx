import {  FaFacebook, FaGithub, FaInstagram, FaLinkedin,  FaTwitter, FaYoutube } from 'react-icons/fa';


const Footer = () => {
  
    return (
        <div className="">
            <footer className="footer p-10 bg-[#F73E7B] text-white   px-28 py-20">
  <div className='flex'>
    
   <p>H#000 (0th Floor), Road #00,<br/>New DOHS, Mohakhali, Dhaka, Bangladesh</p>
  </div> 
  <div className="mx-10">
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About</a> 
    <a className="link link-hover">Project</a> 
    <a className="link link-hover">Our Team</a> 
    <a className="link link-hover">Terms Conditions</a>
    <a className="link link-hover">Submit Listing</a>
  </div> 
  <div className="mx-10">
    <span className="footer-title">Quick Links</span> 
    <a className="link link-hover">Rentals
</a> 
    <a className="link link-hover">Sales
</a> 
    <a className="link link-hover">Contact
</a> 
    <a className="link link-hover">Our blog
</a>
  </div> 
  <div>
    <span className="footer-title">About us</span> 
    
    <span className='flex text-2xl my-2 cursor-pointer'>
      <FaFacebook className='mx-1'></FaFacebook>
      <FaInstagram className='mx-1'></FaInstagram>
      <FaTwitter className='mx-1'></FaTwitter>
      <FaYoutube className='mx-1'></FaYoutube>
      <FaLinkedin className='mx-1'></FaLinkedin>
      <FaGithub className='mx-1'></FaGithub>

    </span>
   
   <p>Lorem ipsum dolor sit amet, consectetur
adipiscing elit. Purus commodo ipsum
duis laoreet maecenas. Feugiat </p>
  </div>
  {/* icon */}
  <div>

  </div>
</footer>
            
        </div>
    );
};

export default Footer;





