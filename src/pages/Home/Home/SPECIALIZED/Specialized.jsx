import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import stoneMeassage from '../../../../assets/Realx.png';
import Armora from '../../../../assets/Armora.png';
import Oil from '../../../../assets/Oil.png';
import Facial from '../../../../assets/Facial.png';
import StoneImg from '../../../../assets/StoneImg.png';
import ArmoraImg from '../../../../assets/ArmoraImg.png';
import OilImg from '../../../../assets/OilImg.png';
import FacialImg from '../../../../assets/FacialImg.png';
const Specialized = () => {
    return (
        <div className='mt-16 mx-5'>
            {/* title */}
            <div className="text-center">
                <h2 className="text-4xl  font-semibold">WE SPECIALIZED IN</h2>
                <h4 className="text-xl mt-2  text-[#f9a392]">OUR HOT SERVICES</h4>
                <span className='flex justify-center mb-7 mt-2'><hr className='border-gray-800 w-28' /></span>
                <div className="w-full">
                    <p className="md:w-1/2 mx-auto mb-3">
                        Ut consequat velit a metus accumsan, vel tempor nulla blandit. Integer euismod magna vel mi congue suscipit. Ut consequat velit a metus accumsan, vel tempor nulla blandit. Integer euismod magna vel mi congue suscipit.</p>
                </div>
            </div>
            {/* title */}
            <Tabs className="mt-10 w-full text-center">
                <TabList className="flex justify-center bg-[#f5f5f5] w-fit mx-auto">
                    <Tab className="border-x-2 cursor-pointer group">
                        <div className='md:px-16 md:py-10 group-hover:border-b-8 border-[#f9a392] group-focus:border-b-8 group-focus:border-[#f9a392] duration-500'>
                            <img className='w-12 mx-auto h-[66.34px]' src={stoneMeassage} alt="" />
                            
                            <h2 className='uppercase mt-3 text-center font-medium group-hover:text-[#f9a392]'>Stone Massage</h2>
                        </div>
                    </Tab>

                    <Tab className="border-x-2 cursor-pointer group">
                        <div className='md:px-16 md:py-10 group-hover:border-b-8 border-[#f9a392] group-focus:border-b-8 group-focus:border-[#f9a392] duration-500'>
                            <img className='w-24 mx-auto h-[66.34px]' src={Armora} alt="" />
                            <h2 className='uppercase mt-3 text-center font-medium group-hover:text-[#f9a392]'>Armor Therapy</h2>
                        </div>
                    </Tab>
                    <Tab className="border-x-2 cursor-pointer group">
                        <div className='md:px-16 md:py-10 group-hover:border-b-8 border-[#f9a392] group-focus:border-b-8 group-focus:border-[#f9a392] duration-500'>
                            <img className='w-20 mx-auto' src={Oil} alt="" />
                            <h2 className='uppercase mt-3 text-center font-medium group-hover:text-[#f9a392]'>Oil Massage</h2>
                        </div>
                    </Tab>
                    <Tab className="border-x-2 cursor-pointer group">
                        <div className='md:px-16 md:py-10 group-hover:border-b-8 border-[#f9a392] group-focus:border-b-8 group-focus:border-[#f9a392] duration-500'>
                            <img className='w-24 mx-auto' src={Facial} alt="" />
                            <h2 className='uppercase mt-12 md:mt-3 text-center font-medium group-hover:text-[#f9a392]'>Facial</h2>
                        </div>
                    </Tab>
                </TabList>

                <TabPanel className="w-full">
                    <div className='grid md:grid-cols-2 items-center md:mx-64 mt-10'>
                        {/* text */}
                        <div className=''>
                            <h2 className='text-start'>Na aliqua dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat <br /> <br /> Na aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat te irure dolor in reprehenderit.</h2>
                        <div className="flex justify-start mt-10">
                            <button className="uppercase px-4 py-3 bg-black text-white border hover:bg-rose-300 duration-500">get an appointment</button>
                        </div>
                        </div>
                        {/* text */}
                        {/* img */}
                        <div>
                            <img className='w-full h-full mt-8 md:mt-0' src={StoneImg} alt="" />
                        </div>
                        {/* img */}

                    </div>
                </TabPanel>
                <TabPanel className="w-full">
                    <div className='grid md:grid-cols-2 items-center md:mx-64 mt-10'>
                        {/* text */}
                        <div className=''>
                            <h2 className='text-start'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat <br /> <br /> Na aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat te irure dolor in reprehenderit.</h2>
                        <div className="flex justify-start mt-10">
                            <button className="uppercase px-4 py-3 bg-black text-white border hover:bg-rose-300 duration-500">get an appointment</button>
                        </div>
                        </div>
                        {/* text */}
                        {/* img */}
                        <div>
                            <img className='w-full h-full mt-8  md:mt-0' src={ArmoraImg} alt="" />
                        </div>
                        {/* img */}

                    </div>
                </TabPanel>
                <TabPanel className="w-full">
                    <div className='grid md:grid-cols-2 items-center md:mx-64 mt-10'>
                        {/* text */}
                        <div className=''>
                            <h2 className='text-start'>Aliqua nulam dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat <br /> <br /> Na aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat te irure dolor in reprehenderit.</h2>
                        <div className="flex justify-start mt-10">
                            <button className="uppercase px-4 py-3 bg-black text-white border hover:bg-rose-300 duration-500">get an appointment</button>
                        </div>
                        </div>
                        {/* text */}
                        {/* img */}
                        <div>
                            <img className='w-full h-full mt-8  md:mt-0' src={OilImg} alt="" />
                        </div>
                        {/* img */}

                    </div>
                </TabPanel>
                <TabPanel className="w-full">
                    <div className='grid md:grid-cols-2 items-center md:mx-64 mt-10'>
                        {/* text */}
                        <div className=''>
                            <h2 className='text-start'>Aliqua nulam dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat <br /> <br /> Na aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat te irure dolor in reprehenderit.</h2>
                        <div className="flex justify-start mt-10">
                            <button className="uppercase px-4 py-3 bg-black text-white border hover:bg-rose-300 duration-500">get an appointment</button>
                        </div>
                        </div>
                        {/* text */}
                        {/* img */}
                        <div>
                            <img className='w-full h-full mt-8 md:mt-0' src={FacialImg} alt="" />
                        </div>
                        {/* img */}

                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Specialized;