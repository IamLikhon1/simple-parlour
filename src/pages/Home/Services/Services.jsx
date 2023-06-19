import { useEffect, useState } from "react";
import SingleServices from "./SingleServices";
// import Lottie from "lottie-react";
// import login from '../../../assets/login.json'

const Services = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res=>res.json())
        .then(data=>{
            setServices(data)
        })
    },[])


    return (
        <div className="overflow-x-hidden" id="services" data-aos="fade-up"
        data-aos-duration="1000">
            <h2 className="text-4xl font-[Poppins] font-semibold text-center my-20">Our Awesome <span className="text-[#F63E7B] ">Services</span></h2>

            <div className="grid md:grid-cols-3 gap-5 mx-16 my-12 ">
                {
                    services.map(items=><SingleServices key={items.id}items={items}></SingleServices>)
                }
              
             <div className="md:ml-96 w-full">
             <button className="btn   bg-[#F73E7B] hover:bg-[#F73E7B] text-white  my-5 ">Explore More</button>
             {/* <Lottie animationData={login} loop={true} />; */}
             </div>
              
            </div>
            
        </div>
    );
};

export default Services;