import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import React from "react";

interface CardProps {
    image: string;
}

const CarouselCard: React.FC<CardProps> = ({ image }) => {
    const [showOverlay, setShowOverlay] = useState(false);

    return (
        <motion.div className="relative overflow-hidden h-[20rem] rounded-xl flex justify-center items-center"
            onHoverStart={() => setShowOverlay(true)}
            onHoverEnd={() => setShowOverlay(false)}
        >
            <AnimatePresence>
            {showOverlay && (
                <motion.div className="absolute inset-0 z-10 flex justify-center items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <div className="absolute bg-black pointer-events-none opacity-50 h-full w-full"/>
                    <motion.h1 className="bg-white font-semibold text-sm z-10 px-3 py-2 rounded-full flex items-center gap-[0.5ch] hover:opacity-75"
                        initial={{ y: 10 }}
                        animate={{ y: 0 }}
                        exit={{ y: 10 }}
                    >
                        <span>Explore Now</span>
                        <BsArrowUpRightCircleFill />
                    </motion.h1>
                </motion.div>
            )}
            </AnimatePresence>
            <img src={image} alt="" className="object-cover object-center w-full h-full object-center" /> 
        </motion.div>
    )
}

export default CarouselCard;