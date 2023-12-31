import { Link, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import create from '../../assets/create.json'
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-hot-toast";
import SocialLogin from "../../component/SocailLogin/SocialLogin";

const SignUp = () => {
  const{createUsers,updateUserProfile}=useContext(AuthContext)
  const navigate=useNavigate()
  const createSubmit=(event)=>{
    event.preventDefault()
    const form=event.target;
    const name=form.name.value;
    const email=form.email.value;
    const password=form.password.value;
    const photo=form.photo.value;
    createUsers(email,password)
    .then(result=>{
      const loggedUser=result.user;
      console.log(loggedUser);
      updateUserProfile(name,photo)
      .then(()=>{
        toast.success(`Welcome ${loggedUser?.displayName} You successfully create account`)
        navigate('/')

      })
      .catch(error=>{
        toast.error(error.message)
      })

    })
    .catch(error=>{
      console.log(error)
      toast.error(error.message)
    })
    console.log(name,email,password,photo)
  }
    return (
        <div>
            <div className="my-16 md:px-20 md:py-">
            <div className="grid md:grid-cols-2 items-center">
               {/* animation */}
               <div className="w-full h-full">
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
     <form onSubmit={createSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input name="name" type="text" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required/>
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" />
          
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn bg-[#F63E7B] hover:bg-[#F63E7B] text-white">Create Account</button>

        </div>
     </form>
     <SocialLogin></SocialLogin>
          <p className="my-2">{"Already Have Account?"} <span className="font-bold text-[#F63E7B] underline"><Link to='/login'>Go to Login</Link> </span> </p>
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