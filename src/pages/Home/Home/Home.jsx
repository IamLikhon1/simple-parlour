import WelcomePage from "../../WelcomePage/WelcomePage";
import Banner from "../Banner/Banner";
import Handle from "../Handle/Handle";
import Inbox from "../Inbox/Inbox";

import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";
import FunFact from "./FunFact/FunFact";
import Impressed from "./Impressed/Impressed";
import Opening from "./OPENING/Opening";
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
        <Opening/>
        <FunFact/>
        <Testimonial></Testimonial>
        <Inbox></Inbox>
            
        </>
    );
};

export default Home;