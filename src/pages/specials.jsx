import { MdKeyboardArrowRight } from "react-icons/md";
import { motion } from "framer-motion";
import Burger from '/optimized-images/monster_burger.jpg';

export default function Specials() {
    return (
        <div className="relative">
            <main id="specials"> 
                <section className="specials--container">
                    <div className="specials--container__text">

                        {/* Heading */}
                        
                        <div className="specials--header">
                        
                            <span className="text-sm">Specials</span>
                            <div className="flex flex-col">
                                <h1>Todays Mouthwatering</h1>
                                <h1 className="mb-4">Special:</h1>
                            </div>
                            <p>Indulge in our chef{"'"}s daily specialty, crafted with the freshest ingredients and bursting with flavor. Each dish is carefully curated to tantalize your taste buds and leave you craving for more.</p>
                        </div>
                        
                        {/* Dishes */}
                        <div className="specials--dishes">
                            <div>
                                <h2 className="subheading">Monster Burger</h2>
                                <p>Try our mouthwatering dish of the day, prepared with love and served with a smile.</p>
                            </div>
                            <div>
                                <h2 className="subheading">Waffle Fries</h2>
                                <p>Try our mouthwatering dish of the day, prepared with love and served with a smile.</p>
                            </div>   
                        </div>

                        {/* Call to Action */}
                        <div className="specials--callToAction">
                            <button className='btn--main'>Order</button>
                            <span className="specials--callToAction__link hover:cursor-pointer hover:underline hover:scale-105">
                                <a href="/" />
                                    All Specials
                                <MdKeyboardArrowRight />
                            </span>
                        </div>
                    </div>
                </section>
                <img src={Burger} alt='' className="shadow-2xl hover:cursor-pointer bg-white" />
            </main>
            <div className='spotlight w-[50%] h-[80%] left-0 top-[10%]'></div>
            <div className='spotlight w-[40rem] h-[30rem] right-[-10rem] top-[-10rem] opacity-75'></div>
            {/* Orange left -> right */}
            <div className='blur-st w-[50%] h-[80%] left-[-40rem] top-[-40rem] z-[-1] opacity-50'></div>
            <div className='blur-st w-[40rem] h-[30rem] right-[-20rem] top-[-20rem] z-[-1]'></div>
        </div>
    );
}