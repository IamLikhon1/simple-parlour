import { useEffect, useState } from "react";
import SingleTesti from "./SingleTesti";
import Marquee from "react-fast-marquee";

const Testimonial = () => {
    const [items,setItems]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/testimonial')
        .then(res=>res.json())
        .then(data=>{
            setItems(data)
        })
    },[])
    return (
        <div>
            <h2 className="text-4xl my-16 text-center font-semibold">Testimonial</h2>

            <Marquee className="my-20  ">
            {
                items.map(single=><SingleTesti key={single.id} single={single}></SingleTesti>)
            }
            </Marquee>
            
        </div>
    );
};

export default Testimonial;