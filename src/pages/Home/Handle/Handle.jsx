
const Handle = () => {
    return (
        <>
        <div className="grid overflow-x-hidden md:grid-cols-2 px-20 py-16 bg-[#fde4f2] ">
            <div data-aos="fade-right"
     data-aos-offset="500"
     data-aos-easing="ease-in-sine">
                <img className=" h-full rounded-2xl" src="https://img.freepik.com/free-photo/cosmetology-doctor-patien_624325-1650.jpg?w=360&t=st=1686988695~exp=1686989295~hmac=06afe4dddc48fc6cd770a39dd8b04223a4bbbaaf41e8e809928926cd53e9d2a3" alt="" />
            </div>

            <div className="mt-10"  data-aos="fade-left"
     data-aos-offset="500"
     data-aos-easing="ease-in-sine">
                <h2 className="text-4xl font-semibold font-[Poppins]">Let us handle your <br /> screen <span className="text-[#F63E7B]">Professionally</span>.</h2>
                <p className="my-7">With well written codes, we build amazing apps for all platforms, mobile and web apps in general ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum.</p>

                <div className="flex justify-around">
                    <div>
                        <h2 className="text-4xl text-[#F63E7B] font-bold font-[Poppins] ">500 +</h2>
                        <p className="text-xl my-5 font-[Poppins]">Happy Customer</p>
                    </div>

                    <div>
                        <h2 className="text-4xl text-[#F63E7B] font-bold font-[Poppins] ">16 +</h2>
                        <p className="text-xl my-5 font-[Poppins]">Total Service</p>
                    </div>

                </div>

            </div>

        </div>
            
        </>
    );
};

export default Handle;