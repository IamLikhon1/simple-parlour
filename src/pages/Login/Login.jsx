import Lottie from "lottie-react";
import loginAnimation from '../../assets/login.json'
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="my-16 md:px-10">
            <div className="grid md:grid-cols-2 items-center">
               {/* animation */}
               <div className="w-full">
             <Lottie animationData={loginAnimation} loop={true} />

                    
                </div>
               {/* animation */}
               {/* from */}

               <div className="w-full">
               <div className="hero min-h-screen">
  <div className="hero-content flex-col ">
    <div className="text-center">
      <h1 className="text-4xl font-bold">Login</h1>
      
    </div>
    <div className="card md:w-96  shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#F63E7B] hover:bg-[#F63E7B] text-white">Login</button>

          <p className="my-2">{"Don't Have Account?"} <span className="font-bold text-[#F63E7B] underline"><Link to='/signup'>create account</Link> </span> </p>
        </div>
      </div>
    </div>
  </div>
</div>
               </div>

               {/* from */}

            </div>
            
        </div>
    );
};

export default Login;