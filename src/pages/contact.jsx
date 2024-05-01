import { CiMail, CiLocationOn } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { FaArrowUp } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";


export default function Contact() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const currentTime = hours + ':' + minutes;

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDayOfWeek = daysOfWeek[date.getDay()].toString();

    const weekdayOpenTime = '15:00';
    const weekendOpenTime = '11:00';
    const closeTime = '22:00'; 

    return (
        <div className="flex justify-center align-center my-10">
            <div id="contact" className="w-[80%] bg-[#f2f2f2] contact--test">
            <div className='spotlight w-[50%] h-[80%] left-[-20rem] top-[-5rem] opacity-40'></div>
                <div className='spotlight w-[50%] h-[80%] right-[-20rem] top-[-5rem] opacity-40'></div>

                <div className='blur-st w-[50%] h-[80%] left-[-20rem] top-[20rem] z-[-1]'></div>
                <div className='blur-st w-[50%] h-[80%] right-[-20rem] top-[20rem] z-[-1]'></div>
                <div className="contact--header">
                    <header className="font-medium text-xs">East Troy, WI</header>
                    <hr className="border border-gray-500 rounded-xl w-[7vw] mt-5"/>
                    <h1>Contact us</h1>
                    <p>Discover our locals favorite spot!</p>
                </div>
                <div className="contact--container">
                    <div className="contact--mediums">
                        <div className="flex flex-col space-y-3">
                            <BsTelephone size={24} />
                            <h2>Phone</h2>
                            <span>Call us for more information</span>
                            <span>(262) 642-7811</span>
                        </div>
                        <div className="flex flex-col space-y-3">
                            <CiMail size={30} />
                            <h2>Email</h2>
                            <span>Send us a message</span>
                            <span>barleys@gmail.com</span>
                        </div>
                        <div className="flex flex-col space-y-3">
                            <CiLocationOn size={30} />
                            <h2>Address</h2>
                            <span>N8720 County Hwy N, </span>
                            <span>East Troy, WI 53120</span>
                        </div>
                    </div>
                    <iframe width="100%" height="550" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=N8720%20County%20Hwy%20N,%20East%20Troy,%20WI%2053120+(Barley's%20Hops%20&amp;%20Malt)&amp;t=&amp;z=11&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" 
                        className="map border border-black shadow-xl">
                            <a href="https://www.gps.ie/">gps tracker sport</a>
                    </iframe>
                    <div className="hours--container">
                            <FaRegClock size={25} />
                            <h2 className="mb-2 mt-2">Hours</h2>
                            <div className="flex gap-3">
                                <span className={`${currentDayOfWeek === daysOfWeek[1] ? ((weekdayOpenTime <= currentTime && currentTime < closeTime) ? "isOpen" : 'isClosed' )  : ''} hours`}>Monday:</span>
                                <span className="ml-auto">3-10PM</span>
                            </div>
                            <div className="flex gap-5">
                                <span className={`${currentDayOfWeek === daysOfWeek[2] ? ((weekdayOpenTime <= currentTime && currentTime < closeTime) ? "isOpen" : 'isClosed' )  : ''} hours`}>Tuesday:</span>
                                <span className="ml-auto">3-10PM</span>
                            </div>
                            <div className="flex gap-5">
                                <span className={`${currentDayOfWeek === daysOfWeek[3] ? ((weekdayOpenTime <= currentTime && currentTime < closeTime) ? "isOpen" : 'isClosed' )  : ''} hours`}>Wednesday:</span>
                                <span className="ml-auto">3-10PM</span>
                            </div>
                            <div className="flex gap-5">
                                <span className={`${currentDayOfWeek === daysOfWeek[4] ? ((weekdayOpenTime <= currentTime && currentTime < closeTime) ? "isOpen" : 'isClosed' )  : ''} hours`}>Thursday:</span>
                                <span className="ml-auto">3-10PM</span>
                            </div>
                            <div className="flex gap-5">
                                <span className={`${currentDayOfWeek=== daysOfWeek[5] ? ((weekdayOpenTime <= currentTime && currentTime < closeTime) ? "isOpen" : 'isClosed' )  : ''} hours`}>Friday:</span>
                                <span className="ml-auto">3-10PM</span>
                            </div>
                            <div className="flex gap-5">
                                <span className={`${currentDayOfWeek === daysOfWeek[6] ? ((weekendOpenTime <= currentTime && currentTime < closeTime) ? "isOpen" : 'isClosed' )  : ''} hours`}>Saturday:</span>
                                <span className="ml-auto">11-10PM</span>
                            </div>
                            <div className="flex gap-5">
                                <span className={`${currentDayOfWeek === daysOfWeek[0] ? ((weekendOpenTime <= currentTime && currentTime < closeTime) ? "isOpen" : 'isClosed' )  : ''} hours`}>Sunday:</span>
                                <span className="ml-auto">11-10PM</span>
                            </div>
                        </div>
                </div>
                <a href="#home" className="my-10 self-center">
                    <button className="backToTop text-white mobile-hide">
                        <FaArrowUp className="top--btn"/>
                    </button>
                </a>

            </div>
        </div>

    );
}

                // {/* <div className='spotlight w-[50%] h-[50%] left-[40rem] top-[-5rem]'></div>
                // <div className='spotlight w-[40%] h-[90%] left-0 top-[8%]'></div>
                // <div className='spotlight w-[30%] h-[60%] right-[8rem] top-[10%]'></div>
                // <div className='spotlight w-[50%] h-[40%] left-[40rem] bottom-[-15rem]'></div> */}
                // {/* <div className='spotlight w-[100%] h-[120%] left-[0] top-[-7rem]'></div> */}