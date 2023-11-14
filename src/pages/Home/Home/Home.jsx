import WelcomePage from "../../WelcomePage/WelcomePage";
import Banner from "../Banner/Banner";
import Handle from "../Handle/Handle";
import Inbox from "../Inbox/Inbox";

import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";
import FunFact from "./FunFact/FunFact";
import Impressed from "./Impressed/Impressed";
import Specialized from "./SPECIALIZED/Specialized";

const Home = () => {
    return (
        <>
      
        <Banner></Banner>
        <WelcomePage/>
        <Impressed/>
        <Specialized/>
        <Services></Services>
        <Handle></Handle>
        <Testimonial></Testimonial>
        <Inbox></Inbox>
        <FunFact/>
            
        </>
    );
};

export default Home;