// FoodCarousel1.js
import React, { useEffect, useState } from "react";
import useMeasure from 'react-use-measure';
import CarouselCard from "./CarouselCard";
import { animate, useMotionValue, motion } from "framer-motion";

const FoodCarousel3 = ({ images }) => {
    const FAST_DURATION = 40;
    const SLOW_DURATION = 75;

    const [duration, setDuration] = useState(FAST_DURATION);
    const [mustFinish, setMustFinish] = useState(false);
    const [rerender, setRerender] = useState(false);

    const [ref, { height }] = useMeasure();
    const yTranslation = useMotionValue(0);

    useEffect(() => {
        let finalPosition = -height / 2 - 8; 

        let controls;
        if (mustFinish) {
            controls = animate(yTranslation, [yTranslation.get(), finalPosition], {
                ease: 'linear',
                duration: duration * (1 - yTranslation.get() / finalPosition),
                onComplete: () => {
                    setMustFinish(false);
                    setRerender(!rerender);
                }
            });
        } else {
            controls = animate(yTranslation, [0, finalPosition], {
                ease: "linear",
                duration: duration,
                repeat: Infinity,
                repeatType: 'loop',
                repeatDelay: 0,
            });
        }

        return controls.stop;
    }, [yTranslation, height, duration, mustFinish, rerender, ref]);

    return (
        <motion.div 
            className="flex flex-col gap-4 w-[17rem] h-[140rem]" 
            ref={ref} 
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

export default FoodCarousel3;


