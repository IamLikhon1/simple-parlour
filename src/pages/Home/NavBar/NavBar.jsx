import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { toast } from "react-hot-toast";

const NavBar = () => {
  const {user,logOut}=useContext(AuthContext);
  const handleLogout=()=>{
    logOut()
    .then(()=>{
      toast.success('LogOut Successfully')

    })
    .catch(error=>console.log(error))
  }

    const navItems=<>
       <Link to='/'> <li className="mx-2 text-lg font-semibold font-[Poppins]">Home</li></Link>
        <a href="#services" className="mx-2 text-lg font-semibold font-[Poppins]">Services</a>
        <a href="#testimonial" className="mx-2 text-lg font-semibold font-[Poppins]">Testimonial</a>
        <a href="#contact" className="mx-2 text-lg font-semibold font-[Poppins]">Contact Us</a>
       { user?<><li className="mx-2 text-lg font-semibold font-[Poppins]">Dashboard</li> <p className="md:ml-5 "> <img className="w-10 h-10 rounded-full" src={user?.photoURL} alt="" /></p></>:<></>}

    </>
        
    
    return (
        <>
            <div className="navbar items-center bg-[#fde4f2] px-10 py-10 ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu items-start menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 cursor-pointer">
        {navItems}
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost normal-case text-xl font-[Poppins]">Simple <span className="text-[#F63E7B]">Parlour</span></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal items-start px-1 cursor-pointer mt-5">
      {navItems}
    </ul>
  </div>
  <div className="navbar-end">
   { user?<button onClick={handleLogout} className="btn bg-[#F73E7B] hover:bg-[#ff6f9f] text-white">LogOut</button> :<Link to='login' className="btn bg-[#F73E7B] hover:bg-[#F73E7B] text-white">Login</Link>}
  </div>
  
</div>
            
        </>
    );
};

export default NavBar;