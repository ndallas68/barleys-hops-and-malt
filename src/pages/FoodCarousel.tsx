import React from "react";
import FoodCarousel1 from "../components/carousel/FoodCarousel1";
import FoodCarousel2 from "../components/carousel/FoodCarousel2";
import FoodCarousel3 from "../components/carousel/FoodCarousel3";

export default function FoodCarousel() {
    const images1 = [
        '/optimized-images/bacon_burger.jpg',
        '/optimized-images/egg.jpg',
        '/optimized-images/brek_burger.jpg',
        '/optimized-images/meat_sand.jpg',
        '/optimized-images/everything_za.jpg',
    ];

    const images2 = [
        '/optimized-images/hawaiian.jpg',
        '/optimized-images/mediteranian.jpg',
        '/optimized-images/food1.jpg',
        '/optimized-images/food2.jpg',
        '/optimized-images/food3.jpg',
        
    ];

    const images3 = [
        '/optimized-images/food4.jpg',
        '/optimized-images/pulled_pork.jpg',
        '/optimized-images/steak.jpg',
        '/optimized-images/meat.jpg',
        '/optimized-images/club.jpg',
        '/optimized-images/wings.jpg',
        '/optimized-images/meatballs.jpg',

    ]

    return (
        <div className="relative">
            <div className='blur-st w-[22rem] h-[30rem] left-[40%] bottom-[-200px]'></div>
            <div className='blur-st w-[22rem] h-[30rem] top-[-200px] right-[-200px]'></div>
            <main className="py-8 px-10 h-[90vh] overflow-hidden flex gap-5">
                <section className="flex gap-5 carousel--container">
                    <FoodCarousel1 images={images1} />
                    <FoodCarousel2 images={images2} />
                    <FoodCarousel3 images={images3} /> 
                </section>
                
                <section className="flex-1 text-white flex flex-col justify-center items-center">
                    <div>
                        <h1>Discover Our Delicious</h1>
                        <h1>Food Menu</h1> 
                        <p className="max-w-[80%] mt-5">Indulge in our mouthwatering dishes made with fresh, local ingredients.</p>
                        <div className="flex mt-5 gap-5">
                            <button className="btn--main">Menu</button>
                            <button className="btn--secondary">Order</button>
                        </div>
                    </div>
                </section>
                
            </main>
        </div>
        
    )
}
