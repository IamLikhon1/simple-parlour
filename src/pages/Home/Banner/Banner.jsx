import Swal from "sweetalert2";

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
        <div className="grid md:grid-cols-2 gap-10 px-20 py-16 bg-[#fde4f2]">
            <div className="w-full">
                <h2 className="text-4xl font-semibold font-[Poppins]">
                BEAUTY SALON <br /> FOR EVERY WOMEN
                </h2>
                <p className="mt-7 mb-8">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Purus commodo ipsum duis <br /> laoreet maecenas. Feugiat </p>
                <button onClick={handleAppointment} className="btn  bg-[#F73E7B] hover:bg-[#F73E7B] text-white font-[poppins]" >Get an Appointment</button>
            </div>
            <div className="w-full">
                <img className="w-full h-full rounded-2xl" src="https://img.freepik.com/free-photo/surprised-happy-girl-pointing-left-recommend-product-advertisement-make-okay-gesture_176420-20191.jpg?w=740&t=st=1686986693~exp=1686987293~hmac=d353fe2b073b68e8c23325593181e7a2beea94edc760fe523d045c3ff64bdd4a" alt="" />
            </div>

        </div>

            
        </>
    );
};

export default Banner;