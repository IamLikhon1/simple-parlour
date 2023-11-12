import Swal from "sweetalert2";
import bannerImg from '../../../assets/bannerOne.png'
const Banner = () => {
    const handleAppointment=()=>{
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Appointment Implement Soon...',
            showConfirmButton: false,
            timer: 1000
          })
    }
    return (
        <>
        <div className="grid md:grid-cols-2 items-center px-10 py-16 bg-[#fde4f2] gap-10">
            <div className="w-full md:pl-10">
                <h2 className="text-5xl font-semibold font-[Poppins]">
                BEAUTY SALON <br /> FOR EVERY WOMEN
                </h2>
                <p className="mt-7 mb-8 text-base text-gray-500">Lorem ipsum dolor sit amet, consectetur  adipiscing elit. <br/> Purus commodo ipsum duis  laoreet maecenas. Feugiat </p>
                <button onClick={handleAppointment} className="btn  bg-[#F73E7B] hover:bg-[#F73E7B] text-white font-[poppins]" >Get an Appointment</button>
            </div>
            <div className="w-full">
                <img className="rounded-2xl h-full md:ml-10" src={bannerImg} alt="" />
            </div>

        </div>

            
        </>
    );
};

export default Banner;