import { MdKeyboardArrowRight } from "react-icons/md";
import Burger from '/images/monster_burger.jpg';

export default function Specials() {
    return (
        <main className="specials"> 
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
                    <div className="flex">
                        <button className='btn--main'>Order</button>
                        <span className="ml-5 flex items-center hover:cursor-pointer hover:underline hover:scale-105">
                            <a href="/" />
                                All Specials
                            <MdKeyboardArrowRight />
                        </span>
                    </div>
                </div>
            </section>
            <div>
                <img 
                    src={Burger} 
                    alt='' 
                    className="hover:cursor-pointer p-10 w-[100%] min-h-[60vh] min-w-[60vh] max-w-[70vh] object-cover rounded-[10rem] shadow-2xl"/>
            </div>
        </main>
    );
}