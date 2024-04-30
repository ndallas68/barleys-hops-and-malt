import { useEffect, useState } from "react";
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from "react-icons/io5";
import { RiStarSFill } from "react-icons/ri";
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
    const [[page, direction], setPage] = useState([0,0]);
    const reviewIndex = wrap(0, reviews.length, page);

    const pageinate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
    }

    return (
        <div id="reviews"> 
            <article className="reviews--container">
                <div className="reviews--heading">
                    <h1 className="">What Our Customers Say</h1>
                    <span>Delicious food, great atmosphere, and friendly service!</span>
                </div>
                
                {/* First Review */}
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
                        <div className="gap-5 flex flex-col flex-1">
                            <span className="flex">
                                <RiStarSFill size={30}/>
                                <RiStarSFill size={30}/>
                                <RiStarSFill size={30}/>
                                <RiStarSFill size={30}/>
                                <RiStarSFill size={30}/>
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
                                <RiStarSFill size={30}/>
                                <RiStarSFill size={30}/>
                                <RiStarSFill size={30}/>
                                <RiStarSFill size={30}/>
                                <RiStarSFill size={30}/>
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
            </article>
        </div>
    );
}