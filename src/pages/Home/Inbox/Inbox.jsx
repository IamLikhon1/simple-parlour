
const Inbox = () => {
    return (
        <div id="contact" className="px-20 py-20 bg-[#fde4f2]">
            <h2 className="text-4xl text-center my-10 font-semibold font-[Poppins]">Let us handle your <br /> 
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
        <button className="btn   bg-[#F73E7B] hover:bg-[#F73E7B] text-white  my-5 md:ml-96 ">Send Message</button>
            
        </div>
    );
};

export default Inbox;