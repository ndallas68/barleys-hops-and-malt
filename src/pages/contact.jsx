import { CiMail, CiLocationOn } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { FaArrowUp } from "react-icons/fa";


export default function Contact() {
    return (
        <div id="contact">
            <div className="contact--header">
                <header className="font-medium text-xs">East Troy, WI</header>
                <hr className="border border-gray-500 rounded-xl w-[10vw] mt-5"/>
                <h1>Contact us</h1>
                <p>Discover our locals favorite spot!</p>
            </div>
            <div className="contact--container">
                <div className="contact--mediums">
                    <div className="flex flex-col space-y-3">
                        <BsTelephone size={24} />
                        <span>Phone</span>
                        <span>Call us for more information</span>
                        <span>(262) 642-7811</span>
                    </div>
                    <div className="flex flex-col space-y-3">
                        <CiMail size={30} />
                        <span>Email</span>
                        <span>Send us a message</span>
                        <span>barleys@gmail.com</span>
                    </div>
                    <div className="flex flex-col space-y-3">
                        <CiLocationOn size={30} />
                        <span>Address</span>
                        <span>N8720 County Hwy N, </span>
                        <span>East Troy, WI 53120</span>
                    </div>
                </div>
                <iframe width="100%" height="550" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=N8720%20County%20Hwy%20N,%20East%20Troy,%20WI%2053120+(Barley's%20Hops%20&amp;%20Malt)&amp;t=&amp;z=11&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" 
                    className="map border border-black shadow-xl mb-10">
                        <a href="https://www.gps.ie/">gps tracker sport</a>
                </iframe>
                
            </div>
            <a href="#home" className="my-10 self-center">
                    <button className="backToTop text-white mobile-hide">
                        <FaArrowUp className="top--btn"/>
                    </button>
                </a>
        </div>
    );
}