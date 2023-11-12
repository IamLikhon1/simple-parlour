import {  useEffect, useState } from "react";
import SingleServices from "./SingleServices";
import { toast } from "react-hot-toast";


const Services = () => {
    const [services,setServices]=useState([]);
   
    useEffect(()=>{
        fetch('https://parlaur-sever.vercel.app/service')
        .then(res=>res.json())
        .then(data=>{
            setServices(data)
        })
    },[]);
    const handleExplore=()=>{
        toast.success('More Services Coming Soon...')

    }

    return (
        <div className="overflow-x-hidden" id="services" data-aos="fade-up"
        data-aos-duration="1000">
            <h2 className="text-4xl font-[Poppins] font-semibold text-center my-20">Our Awesome <span className="text-[#F63E7B] ">Services</span></h2>

            <div className="grid md:grid-cols-3 gap-5 mx-16 my-12 ">
                {
                    services.map(items=><SingleServices key={items.id}items={items}></SingleServices>)
                }
              
            </div>
             <div className="text-center mb-5">
             <button onClick={handleExplore} className="btn   bg-[#F73E7B] hover:bg-[#F73E7B] text-white  my-5 ">Explore More</button>
             {/* <Lottie animationData={login} loop={true} />; */}
             </div>
              
            
        </div>
    );
};

export default Services;