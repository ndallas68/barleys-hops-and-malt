import { useState } from "react";
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import Profile from '../assets/default_profile.png';
import { reviews } from '../data/reviews.js';
import { wrap } from "popmotion";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const variants = {
    enter: (direction) => {
        return {
            x: direction > 0 ? 100 : -100,
            opacity: 0,
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
    },
    exit: (direction) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 100 : -100,
            opacity: 0,
        };
    },
};

const swipeConfidenceThreshold = 1000000;
const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
};

export default function Reviews() {
    const [isOpen, setIsOpen] = useState(false);
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    const [[page, direction], setPage] = useState([0,0]);
    const reviewIndex = wrap(0, reviews.length, page);

    const pageinate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
    }

    return (
        <div id="reviews" className="flex flex-col"> 
            <article className="reviews--container bg-[#f2f2f2]">
                {/* light blurs */}
                <div className='spotlight w-[50%] h-[80%] left-[-20rem] top-[-5rem] z-[-1] opacity-40'></div>
                <div className='spotlight w-[50%] h-[80%] right-[-20rem] top-[-5rem] z-[-1] opacity-40'></div>
                <div className='blur-st w-[50%] h-[80%] left-[-20rem] top-[10rem] z-[-1]'></div>
                <div className='blur-st w-[50%] h-[80%] right-[-20rem] top-[10rem] z-[-1]'></div>

                {/* Heading */}
                <div className="reviews--heading">
                    <h1 className="">What Our Customers Say</h1>
                    <span>Delicious food, great atmosphere, and friendly service!</span>
                </div>
                
                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                    <motion.div 
                        className="reviews--card"

                        key={page}
                        src={reviews[reviewIndex]}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ 
                            x: { type: 'spring', stiffness: 300, damping: 30 },
                            opacity: { duration: .2 }
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        drapElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = swipePower(offset.x, velocity.x);

                            if (swipe < -swipeConfidenceThreshold) {
                                pageinate(2);
                            } else if (swipe > swipeConfidenceThreshold) {
                                pageinate(-2);
                            }
                        }}
                    >

                        {/* First Review */}
                        <div className="gap-5 flex flex-col flex-1">
                            <span className="flex">
                                {[...Array(5)].map(star => {
                                    return <FaStar size={30} />
                                })}
                            </span>
                            <p>{reviews[reviewIndex].content}</p>
                            <div className="reviews--user">
                                <img 
                                    src={reviews[reviewIndex].img || Profile} 
                                    alt={reviews[reviewIndex].heading} 
                                    className="w-[3rem] h-[3rem] object-cover rounded-[50%]" 
                                />
                                <div className="flex gap-5">
                                    <p className="text-sm"> {reviews[reviewIndex].name} </p>
                                    <hr className="h-[25px] border border-gray-500"/>
                                    <p className="text-sm"> {reviews[reviewIndex].title} </p>
                                </div>
                            </div>
                        </div>

                        {/* Second Review */}
                        <div className="gap-5 flex flex-col flex-1 mobile--hide">
                            <span className="flex">
                                {[...Array(5)].map(star => {
                                    return <FaStar size={30} />
                                })}
                            </span>
                            <p>{reviews[reviewIndex+1].content}</p>
                            <div className="reviews--user">
                                <img 
                                    src={reviews[reviewIndex+1].img || Profile} 
                                    alt={reviews[reviewIndex+1].heading} 
                                    className="w-[3rem] h-[3rem] object-cover rounded-[50%]" 
                                />
                                <div className="flex gap-5">
                                    <p className="text-sm"> {reviews[reviewIndex+1].name} </p>
                                    <hr className="h-[25px] border border-gray-500"/>
                                    <p className="text-sm"> {reviews[reviewIndex+1].title} </p> 
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
                {/* Arrows */}
                <div className="reviews--footer">
                    <div className="reviews--dots" >
                        <div className={`dots dot--one ${reviewIndex === 0 ? 'dot--active' : 'dot--inactive'} `}></div>
                        <div className={`dots dot--two ${reviewIndex === 2 ? 'dot--active' : 'dot--inactive'} `}></div>
                        <div className={`dots dot--three ${reviewIndex === 4 ? 'dot--active' : 'dot--inactive'} `}></div>
                    </div>
                    <div className="reviews--arrows">
                        <IoArrowBackCircleOutline 
                            size={48} 
                            className="hover:cursor-pointer hover:scale-110"
                            onClick={() => pageinate(-2)}
                        />
                        <IoArrowForwardCircleOutline 
                            size={48} 
                            className="hover:cursor-pointer hover:scale-110"
                            onClick={() => pageinate(2)}
                        />
                    </div>
                </div>
                {isOpen && (
                    <>
                        <div className="fixed top-0 left-0 w-[100vw] h-[100vh] z-[99] bg-black/30 backdrop-blur-sm flex justify-center items-center transform:ease duration-900">
                            <div className=" relative bg-white w-[20vw] rounded-2xl p-5">
                                <h2 className="text-2xl">Leave a review</h2>
                                <p className="text-[1em]">How'd we do?</p>
                                <span className="flex p-2 mt-5 justify-center">
                                    {[...Array(5)].map((star, index) => {
                                        const currentRating = index + 1;
                                        return (
                                            <label>
                                                <input 
                                                    type="radio" name="rating" value={currentRating} 
                                                    onClick={() => {
                                                        setRating(currentRating);
                                                    
                                                    }} 
                                                    className="hidden"
                                                />
                                                <FaStar className="hover:cursor-pointer" size={50} 
                                                    color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                                                    onMouseEnter={() => setHover(currentRating)}
                                                    onMouseLeave={() => setHover(null)}
                                                /> 
                                            </label>
                                        )
                                    })}
                               
                                </span>
                                {rating <= 3 && rating != null && (
                                    <textarea 
                                        id='review--input' 
                                        placeholder="How can we improve?" 
                                        className="rate mt-7 w-full border border-black/30 rounded-2xl p-3"
                                    />
                                )}
                                <IoMdClose 
                                    size={30} 
                                    className="absolute top-5 right-5 hover:cursor-pointer" 
                                    onClick={() => {
                                        setRating(null);
                                        if (rating !== null && rating > 3) document.getElementById("review--input").value = '';
                                        setIsOpen(false);
                                    }}
                                />
                                <button 
                                    className='bg-black text-white p-2 rounded-2xl mt-2 flex w-full justify-center'
                                    onClick={() => {
                                        // Store rating and review
                                        setRating(null);
                                        setIsOpen(false);
                                    }}
                                >
                                    
                                    Submit
                                </button>
                            </div>
                        </div>
                    </>
                )}
                <button className="absolute bottom-0 ml-5 translate-y-[1.7rem] hover:cursor-pointer w-[15rem] z-[1] flex justify-center font-bold leave--review " 
                    onClick={() => setIsOpen(true)}
                >Leave a review</button>
                <div className="leave--review absolute bottom-0 ml-5 translate-y-[2rem] h-[3.5rem] w-[15rem] bg-white z-[-1] rounded-2xl" />
            </article>
        </div>
    );
}