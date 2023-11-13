import HairDry from '../../../../assets/HairDry.png';
import oldWomen from '../../../../assets/oldWomen.png';
import cutImg from '../../../../assets/cut.png';
import comb from '../../../../assets/cironi.png';
import footerImg from '../../../../assets/footerBanner.png';
// import { useCountUp } from 'react-countup';
import CountUp from 'react-countup';
const FunFact = () => {
    return (
        <div className="mt-16 px-2">
            {/* title */}
            <div className="text-center">
                <h2 className="text-4xl font-semibold">FUN FACTS</h2>
                <h4 className="text-xl mt-2  text-[#f9a392]">OUR STATISTICS</h4>
               <span className='flex justify-center mb-7 mt-2'><hr className='border-gray-800 w-28' /></span>
                <div className="w-full">
                    <p className="md:w-1/2 mx-auto mb-3">
                        Ut consequat velit a metus accumsan, vel tempor nulla blandit. Integer euismod magna vel mi congue suscipit. Ut consequat velit a metus accumsan, vel tempor nulla blandit. Integer euismod magna vel mi congue suscipit.</p>
                </div>
            </div>
            {/* title */}

            {/* category */}
            <div className='grid grid-cols-2 md:grid-cols-4 items-center py-10 md:px-40'>

                {/* hairDry */}
                <div className='text-center'>
                    <img className='h-20 mx-auto mb-2' src={HairDry} alt="" />
                    <CountUp className='text-3xl' delay={2} end={1356} />
                    <p className='text-gray-600 text-lg font-medium mt-2'>AROMATHERAPY</p>
                </div>
                {/* SKIN CARE */}
                <div className='text-center'>
                    <img className='h-20 mx-auto mb-2' src={oldWomen} alt="" />
                    <CountUp className='text-3xl' delay={2} end={105} />
                    <p className='text-gray-600 text-lg font-medium mt-2'>SKIN CARE</p>
                </div>
                {/* hairDry */}
                <div className='text-center'>
                    <img className='pl-2 h-20 mx-auto mb-2' src={cutImg} alt="" />
                    <CountUp className='text-3xl' delay={2} end={248} />
                    <p className='text-gray-600 text-lg font-medium mt-2'>HERBAL SPA</p>
                </div>
                {/* STONE THERAPHY */}
                <div className='text-center'>
                    <img className='pl-4 h-20 mx-auto mb-2' src={comb} alt="" />
                    <CountUp className='text-3xl' delay={2} end={368} />
                    <p className='text-gray-600 text-lg font-medium mt-2'>STONE THERAPHY</p>
                </div>

            </div>
            {/* category */}

            {/* banner */}
            <div className='mt-3 mb-10'>
                <img className='w-full h-full' src={footerImg} alt="" />
            </div>

        </div>
    );
};

export default FunFact;