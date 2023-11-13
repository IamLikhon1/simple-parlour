import image from '../../../assets/bannerTwo.png'

const Handle = () => {
    return (
        <>
            <div className="grid md:grid-cols-2 items-center px-20 py-20 bg-[#fde4f2] overflow-x-hidden ">
                <div data-aos="fade-right"
                    data-aos-offset="500"
                    data-aos-easing="ease-in-sine">
                    <img className="h-fit w-fit rounded-2xl" src={image} alt="" />
                </div>

                <div data-aos="fade-left"
                    data-aos-offset="500"
                    data-aos-easing="ease-in-sine">
                    <h2 className="text-4xl font-semibold  ">Let us handle your <br /> screen <span className="text-[#F63E7B]">Professionally</span>.</h2>
                    <p className="my-7">With well written codes, we build amazing apps for all platforms, mobile and web apps in general ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum.</p>

                    <div className="flex gap-5">
                        <div>
                            <h2 className="text-4xl text-[#F63E7B] font-bold   ">500 +</h2>
                            <p className="text-xl my-5  ">Happy Customer</p>
                        </div>

                        <div>
                            <h2 className="text-4xl text-[#F63E7B] font-bold   ">16 +</h2>
                            <p className="text-xl my-5  ">Total Service</p>
                        </div>

                    </div>

                </div>

            </div>

        </>
    );
};

export default Handle;