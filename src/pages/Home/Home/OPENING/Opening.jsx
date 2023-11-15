import './Opening.css'
const Opening = () => {
    return (
        <div className='openingImg  bg-fixed'>
            <div className='h-full w-full bg-[rgba(0,0,0,.8)] py-10 px-5'>

                <div className='text-white mt-10 md:ml-16'>
                    <h1 className='text-3xl italic' >OPENING HOURS</h1>
                    <h4 className='text-xl italic'>WHEN WE WORK</h4>
                    <p className='text-sm font-light mt-5'>Ut consequat velit a metus accumsan, vel tempor nulla blandit. Integer euismod magna vel mi congue suscipit. Ut consequat velit a metus accumsan, vel tempor <br /> nulla blandit. Integer euismod magna vel mi congue suscipit.</p>
                </div>

                <div className='grid md:grid-cols-12 mt-10 md:ml-28'>
                    {/* time */}
                    <div className='col-span-7'>
                        <div className='grid md:grid-cols-3 gap-10'>

                            <div className='bg-[#f9a392] py-10'>
                                <div className='text-white text-center'>
                                    <h1>MON</h1>
                                    <h1>08:00-15:00</h1>
                                </div>

                            </div>
                            <div className='bg-[#f9a392] py-10'>
                                <div className='text-white text-center'>
                                    <h1>TUE</h1>
                                    <h1>10.00-16.00
                                    </h1>
                                </div>

                            </div>
                            <div className='bg-[#f9a392] py-10'>
                                <div className='text-white text-center'>
                                    <h1>WED</h1>
                                    <h1>08:00-15:00
                                    </h1>
                                </div>

                            </div>
                            <div className='bg-[#f9a392] py-10'>
                                <div className='text-white text-center'>
                                    <h1>THU</h1>
                                    <h1>08:00-18:00</h1>
                                </div>

                            </div>
                            <div className='bg-[#f9a392] py-10'>
                                <div className='text-white text-center'>
                                    <h1>FRI</h1>
                                    <h1>07:00-19:00</h1>
                                </div>

                            </div>
                            <div className='bg-[#f9a392] py-10'>
                                <div className='text-white text-center'>
                                    <h1>SAT+SUN</h1>
                                    <h1>Closed</h1>
                                </div>

                            </div>

                        </div>
                    </div>
                    {/* time */}

                    {/* text */}
                    <div className='col-span-5 text-white md:ml-10 mt-5 md:mt-0'>
                        <h2 className='text-xl'>WE ARE CREATIVE</h2>
                        <p className='text-base mt-5 md:w-1/2'>Ut fringilla ac metus rhoncus sollicitudin. Curabitur at sagittis justo, eu laoreet lectus. Mauris augue ex, consectetur ac pellentesque ac, feugiat lacinia eros. Ut bibendum mi in imperdiet feugiat. Duis porttitor dapibus odio vitae rutrum. Nullam viverra risus et lacus scelerisque laoreet.</p>
                    </div>
                    {/* text */}



                </div>

            </div>

        </div>
    );
};

export default Opening;