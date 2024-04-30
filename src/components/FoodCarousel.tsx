import React, { useEffect, useState } from "react";
import useMeasure from 'react-use-measure';
import CarouselCard from "./CarouselCard";
import { animate, useMotionValue, motion } from "framer-motion";


export default function FoodCarousel() {
    const images = [
        '/images/food/bacon_burger.jpg',
        '/images/food/brek_burger.jpg',
        '/images/food/club.jpg',
        '/images/food/egg.jpg',
        '/images/food/everything_za.jpg',


    ];
    const images2 = [
        '/images/food/hawaiian.jpg',
        '/images/food/mediteranian.jpg',
        '/images/food/food1.jpg',
        '/images/food/food2.jpg',
        '/images/food/food3.jpg',
        '/images/food/food4.jpg',
    ];

    const FAST_DURATION = 25;
    const SLOW_DURATION = 75;

    const [duration, setDuration] = useState(FAST_DURATION);
    const [duration2, setDuration2] = useState(FAST_DURATION);
    
    let [ref, { height }] = useMeasure();

    const yTranslation = useMotionValue(0);
    const yTranslation2 = useMotionValue(0);

    const [mustFinish, setMustFinish] = useState(false);
    const [rerender, setRerender] = useState(false);

    const [mustFinish2, setMustFinish2] = useState(false);
    const [rerender2, setRerender2] = useState(false);

    useEffect(() => {
        let finalPosition = -height / 2 - 8  // height received from useMeasure / number of copies - gap of 8
        let controls;

        if (mustFinish) {
            controls = animate(yTranslation, [yTranslation.get(), finalPosition], {
                ease:'linear',
                duration: duration * (1 - yTranslation.get() / finalPosition),
                onComplete: () => {
                    setMustFinish(false);
                    setRerender(!rerender);
                }
            })
        } else {
            controls = animate(yTranslation,  [0, finalPosition], {
            ease: "linear",
            duration: 25,
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 0,
        });
        }

        let finalPosition2 = height / 2 + 8  // height received from useMeasure / number of copies - gap of 8
        let controls2;

        if (mustFinish2) {
            controls2 = animate(yTranslation2, [yTranslation2.get(), finalPosition2], {
                ease:'linear',
                duration: duration * (1 - yTranslation2.get() / finalPosition2),
                onComplete: () => {
                    setMustFinish2(false);
                    setRerender2(!rerender2);
                }
            })
        } else {
            controls2 = animate(yTranslation2, [0, finalPosition2], {
            ease: "linear",
            duration: 25,
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 0,
        });
        }

        return controls2?.stop;
        return controls?.stop;



    }, [yTranslation, height, duration, rerender, yTranslation2, duration2, rerender2]);

    

    return (
        <main className="py-8 h-[80vh] overflow-hidden flex gap-5">
            <motion.div 
                className="flex flex-col gap-4 w-[20rem] h-[120rem]" 
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
            <motion.div 
                className="flex flex-col gap-4 w-[20rem] h-[120rem]" 
                ref={ref} 
                style={{ y: yTranslation2 }}
                onHoverStart={() => {
                    setMustFinish2(true);
                    setDuration2(SLOW_DURATION);
                }}
                onHoverEnd={() => {
                    setMustFinish2(true);
                    setDuration2(FAST_DURATION);
                }}
            >
                {[...images2, ...images2].map((item, i) => (
                    <CarouselCard image={item} key={i} />
                ))}
            </motion.div>
        </main>
    )
}