// FoodCarousel2.js
import React, { useEffect, useState } from "react";
import useMeasure from 'react-use-measure';
import CarouselCard from "./CarouselCard";
import { animate, useMotionValue, motion } from "framer-motion";

const FoodCarousel2 = ({ images }) => {
    const FAST_DURATION = 50;
    const SLOW_DURATION = 80;

    const [duration, setDuration] = useState(FAST_DURATION);
    const [mustFinish, setMustFinish] = useState(false);
    const [rerender, setRerender] = useState(false);        // tell DOM when we need to rerender and set new animation object

    const [ref2, { height }] = useMeasure();
    const yTranslation = useMotionValue(0);

    useEffect(() => {
        let finalPosition = -height / 2 - 8; 

        let controls;
        if (mustFinish) {
            controls = animate(yTranslation, [yTranslation.get(), 0], {
                ease: 'linear',
                duration: duration,
                onComplete: () => {
                    setMustFinish(false);
                    setRerender(!rerender);
                }
            });
        } else {
            controls = animate(yTranslation, [finalPosition, 0], {
                ease: "linear",
                duration: duration,
                repeat: Infinity,
                repeatType: 'loop',
                repeatDelay: 0,
            });
        }
        return controls.stop;
    }, [yTranslation, height, duration, mustFinish, rerender, ref2]);

    return (
        <motion.div 
            className="flex flex-col gap-4 w-[20rem] h-[180rem]" 
            ref={ref2} 
            style={{ y: yTranslation}}
            onHoverStart={() => {
                setMustFinish(true);
                setDuration(SLOW_DURATION);
            }}
            onHoverEnd={() => {
                setMustFinish(true);
                setDuration(FAST_DURATION);
            }}
        >
            {[...images, ...images].map((item, i) => (
                <CarouselCard image={item} key={i} />
                
            ))}
        </motion.div>
    );
};

export default FoodCarousel2;
