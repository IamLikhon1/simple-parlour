import { useContext } from "react";
import { Tilt } from 'react-tilt'
import { AuthContext } from "../../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const SingleServices = ({items}) => {
    const{title,img,price,des}=items;
    const {user}=useContext(AuthContext);
    const navigate=useNavigate()
    const handleService=()=>{
        if(!user){
            toast.error("You Have Login First")
            navigate('/login')
        }
    };
    const defaultOptions = {
      reverse:        false,  // reverse the tilt direction
      max:            35,     // max tilt rotation (degrees)
      perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
      scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
      speed:          2000,   // Speed of the enter/exit transition
      transition:     true,   // Set a transition on enter/exit.
      axis:           null,   // What axis should be disabled. Can be X or Y.
      reset:          true,    // If the tilt effect has to be reset on exit.
      easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    }
    return (
        <Tilt options={defaultOptions}>
            <div className="card w-full h-full bg-base-100 shadow-2xl">
  <figure><img className="w-16 my-5  h-16  rounded-full" src={img} alt="Shoes" /></figure>
  <div className="card-body text-center">
    <h2 className="card-title w-full">{title}</h2>
    <p className=" text-[#F63E7B] text-xl font-semibold">$ {price}</p>
    <p>{des}</p>
    <div className="card-actions justify-end">
      <button onClick={handleService} className="btn bg-[#F73E7B] hover:bg-[#F73E7B] text-white  mt-5 ">Select</button>
    </div>
  </div>
</div>
      </Tilt>
    );
};

export default SingleServices;