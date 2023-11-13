const Inbox = () => {
    return (
        <div id="contact" className="px-20 overflow-x-hidden py-20 bg-[#fde4f2]" data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="2000">
            <h2 className="text-4xl text-center my-10 font-semibold  ">Let us handle your <br />
                project, professionally.</h2>

            <section className="">
                <div className="grid md:grid-cols-2 gap-8">
                    <input type="text" placeholder="First Name" className="input input-bordered input-md w-full " />

                    <input type="text" placeholder="Last Name" className="input input-bordered input-md w-full " />
                </div>
                <div className="grid md:grid-cols-2 gap-8 my-8">
                    <input type="text" placeholder="Email Address" className="input input-bordered input-md w-full " />

                    <input type="text" placeholder="Phone Number" className="input input-bordered input-md w-full" />
                </div>
                <textarea placeholder="Your Message" className="textarea textarea-bordered textarea-lg w-full" ></textarea>
            </section>
         <div className="text-center">
         <button className="btn bg-[#F73E7B] hover:bg-[#F73E7B] text-white  my-5">Send Message</button>
         </div>

        </div>
    );
};

export default Inbox;