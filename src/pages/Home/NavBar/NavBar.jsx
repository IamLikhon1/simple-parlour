
const NavBar = () => {

    const navItems=<>
        <li className="mx-2 text-lg font-semibold font-[Poppins]">Home</li>
        <li className="mx-2 text-lg font-semibold font-[Poppins]">Our Team</li>
        <li className="mx-2 text-lg font-semibold font-[Poppins]">Contact Us</li>
        <li className="mx-2 text-lg font-semibold font-[Poppins]">Dashboard</li>

    </>
        
    
    return (
        <>
            <div className="navbar bg-[#fde4f2] px-10 py-10 ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu items-start menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 cursor-pointer">
        {navItems}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl font-[Poppins]">Simple <span className="text-[#F63E7B]">Parlour</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal items-start px-1 cursor-pointer">
      {navItems}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-[#F73E7B] hover:bg-[#F73E7B] text-white">Login</a>
  </div>
  
</div>
            
        </>
    );
};

export default NavBar;