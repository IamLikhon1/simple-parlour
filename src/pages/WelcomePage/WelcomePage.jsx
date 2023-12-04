import RealxImg from '../../assets/Realx.png'
import BodyImg from '../../assets/Body.png'
import MedinationImg from '../../assets/Medination.png'
import umbrella from '../../assets/umbrella.png'
import ModelImg from '../../assets/Model.png'

const WelcomePage = () => {
    return (
        <div className="mt-16 mx-5 md:mx-0">
            {/* title */}
            <div className="text-center" data-aos="zoom-in" data-aos-duration="1000">
                
                <h2 className="text-4xl  font-semibold">WELCOME TO</h2>
                <h4 className="text-xl mt-2  text-[#f9a392]">MASSAGE THERAPHY CENTER</h4>
               <span className='flex justify-center mb-7 mt-2'><hr className='border-gray-800 w-28' /></span>
                <div className="w-full">
                    <p className="md:w-1/2 mx-auto mb-3">
                        Ut consequat velit a metus accumsan, vel tempor nulla blandit. Integer euismod magna vel mi congue suscipit. Ut consequat velit a metus accumsan, vel tempor nulla blandit. Integer euismod magna vel mi congue suscipit.</p>
                </div>
            </div>
            {/* title */}

            <div className="grid md:grid-cols-2 items-center md:px-20 md:mt-3">
                {/* img */}
                <div>
                    <img className='w-full h-full' src={ModelImg} alt="" />
                </div>
                {/* img */}

                {/* left-Text */}
                <div className="">
                    {/* title */}
                    <div>
                        <h2 className="text-2xl font-medium">WE BELIEVE IN CUSTOMER SATISFACTION</h2>
                        <p className="mt-2 mb-10  text-gray-500 pr-12">In order to achieve results from the fear layer, or time no flattery. A great performance or my homework takes over. Its not easy for anyone. Until then, it is possible to decorate the style of life. No interest in the valley.</p>
                    </div>

                    {/* RELAX YOUR BODY */}
                    <div className='flex gap-5 'data-aos="zoom-in" data-aos-duration="2000">
                        {/* img */}
                        <div>
                            <img className='w-16' src={RealxImg} alt="" />

                        </div>
                        <div>
                            <h2 className='text-lg font-medium hover:text-orange-300 duration-300 cursor-pointer'>RELAX YOUR BODY</h2>
                            <p className='mt-2 text-base text-gray-600'>Donec dignissim enim id urna fermentum, non hendrerit sem volutpat ellentesque pretium sapien nec metus.</p>
                        </div>
                    </div>
                    {/* REFRESH YOUR MIND */}
                    <div className='flex gap-5 my-8'data-aos="zoom-in" data-aos-duration="2000">
                        {/* img */}
                        <div>
                            <img  className='w-20' src={BodyImg} alt="" />

                        </div>
                        <div>
                            <h2 className='text-lg font-medium hover:text-orange-300 duration-300 cursor-pointer '>REFRESH YOUR MIND</h2>
                            <p className='mt-2 text-base text-gray-600'>Donec dignissim enim id urna fermentum, non hendrerit sem volutpat ellentesque pretium sapien nec metus.</p>
                        </div>
                    </div>
                    {/* FREE MEDITATION */}
                    <div className='flex gap-5 my-8'data-aos="zoom-in" data-aos-duration="2000">
                        {/* img */}
                        <div>
                            <img className='w-20' src={MedinationImg} alt="" />

                        </div>
                        <div>
                            <h2 className='text-lg font-medium hover:text-orange-300 duration-300 cursor-pointer '>FREE MEDITATION</h2>
                            <p className='mt-2 text-base text-gray-600'>Donec dignissim enim id urna fermentum, non hendrerit sem volutpat ellentesque pretium sapien nec metus.</p>
                        </div>
                    </div>
                    {/* BEAUTY & WAXING */}
                    <div className='flex gap-5 my-8'data-aos="zoom-in" data-aos-duration="2000">
                        {/* img */}
                        <div>
                            <img className='w-20' src={umbrella} alt="" />

                        </div>
                        <div>
                            <h2 className='text-lg font-medium hover:text-orange-300 duration-300 cursor-pointer '>BEAUTY & WAXING</h2>
                            <p className='mt-2 text-base text-gray-600'>Donec dignissim enim id urna fermentum, non hendrerit sem volutpat ellentesque pretium sapien nec metus.</p>
                        </div>
                    </div>
                </div>
                {/* left-Text */}
            </div>
        </div>
    );
};

export default WelcomePage;