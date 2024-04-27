import { useEffect, useState } from "react";
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from "react-icons/io5";
import { RiStarSFill } from "react-icons/ri";
import Profile from '../assets/default_profile.png';
import { reviews } from '../data/reviews.js';
import Slider from 'react-slick';

export default function Reviews() {
    const [selected, setSelected] = useState(0);
    const rLength = Reviews.length;

    return (
        <div id="reviews"> 
            <article className="reviews--container">
                <div className="reviews--heading">
                    <h1 className="">What Our Customers Say</h1>
                    <span>Delicious food, great atmosphere, and friendly service!</span>
                </div>
                
                {/* First Review */}
                <div className="reviews--card">
                    <div className="gap-5 flex flex-col flex-1">
                        <span className="flex">
                            <RiStarSFill size={30}/>
                            <RiStarSFill size={30}/>
                            <RiStarSFill size={30}/>
                            <RiStarSFill size={30}/>
                            <RiStarSFill size={30}/>
                        </span>
                        <p>{reviews[selected].content}</p>
                        <div className="flex items-center gap-5 mt-auto">
                            <img 
                                src={reviews[selected].img || Profile} 
                                alt={reviews[selected].heading} 
                                className="w-[3rem] h-[3rem] object-cover rounded-[50%]" 
                            />
                            <div className="flex gap-5">
                                <p className="text-sm"> {reviews[selected].name} </p>
                                <hr className="h-[25px] border border-gray-500"/>
                                <p className="text-sm"> {reviews[selected].title} </p>
                            </div>
                        </div>
                    </div>

                    {/* Second Review */}
                    <div className="w-[40vw] space-y-5 flex-1 mobile--hide">
                        <span className="flex">
                            <RiStarSFill size={30}/>
                            <RiStarSFill size={30}/>
                            <RiStarSFill size={30}/>
                            <RiStarSFill size={30}/>
                            <RiStarSFill size={30}/>
                        </span>
                        <p>{reviews[selected+1].content}</p>
                        <div className="flex items-center gap-5">
                            <img 
                                src={reviews[selected+1].img || Profile} 
                                alt={reviews[selected+1].heading} 
                                className="w-[3rem] h-[3rem] object-cover rounded-[50%]" 
                            />
                            <div className="flex gap-5">
                                <p className="text-sm"> {reviews[selected+1].name} </p>
                                <hr className="h-[25px] border border-gray-500"/>
                                <p className="text-sm"> {reviews[selected+1].title} </p> 
                            </div>
                        </div>
                    </div>
                </div>

                {/* Arrows */}
                <div className="reviews--arrows">
                    <IoArrowBackCircleOutline 
                        size={48} 
                        className="hover:cursor-pointer hover:scale-110"
                        onClick={() => {
                            selected === 0
                            ? setSelected(rLength - 1)
                            : setSelected((prev) => prev - 1)
                        }}
                    />
                    <IoArrowForwardCircleOutline 
                        size={48} 
                        className="hover:cursor-pointer hover:scale-110"
                        onClick={() => {
                            selected === 0
                            ? setSelected(rLength - 1)
                            : setSelected((prev) => prev - 1)
                        }}
                    />
                </div>
            </article>
        </div>
    );
}