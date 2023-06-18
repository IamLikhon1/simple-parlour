import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import create from '../../assets/create.json'

const SignUp = () => {
    return (
        <div>
            <div className="my-16 md:px-10">
            <div className="grid md:grid-cols-2 items-center">
               {/* animation */}
               <div className="w-full">
             <Lottie animationData={create} loop={true} />

                    
                </div>
               {/* animation */}
               {/* from */}

               <div className="w-full">
               <div className="hero min-h-screen">
  <div className="hero-content flex-col ">
    <div className="text-center">
      <h1 className="text-4xl font-bold">Create an Account</h1>
      
    </div>
    <div className="card md:w-96  shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" className="input input-bordered" />
        </div>
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
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input type="text" placeholder="Confirm password" className="input input-bordered" />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#F63E7B] hover:bg-[#F63E7B] text-white">Create Account</button>

          <p className="my-2">{"Already Have Account?"} <span className="font-bold text-[#F63E7B] underline"><Link to='/login'>Go to Login</Link> </span> </p>
        </div>
      </div>
    </div>
  </div>
</div>
               </div>

               {/* from */}

            </div>
            
        </div>
            
        </div>
    );
};

export default SignUp;