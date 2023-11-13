import WelcomePage from "../../WelcomePage/WelcomePage";
import Banner from "../Banner/Banner";
import Handle from "../Handle/Handle";
import Inbox from "../Inbox/Inbox";

import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";
import FunFact from "./FunFact/FunFact";
import Impressed from "./Impressed/Impressed";

const Home = () => {
    return (
        <>
      
        <Banner></Banner>
        <WelcomePage/>
        <Impressed/>
        <Services></Services>
        <Handle></Handle>
        <Testimonial></Testimonial>
        <Inbox></Inbox>
        <FunFact/>
            
        </>
    );
};

export default Home;