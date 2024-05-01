import React from "react";
import FoodCarousel1 from "../components/carousel/FoodCarousel1";
import FoodCarousel2 from "../components/carousel/FoodCarousel2";
import FoodCarousel3 from "../components/carousel/FoodCarousel3";

export default function FoodCarousel() {
    const images1 = [
        '/images/food/bacon_burger.jpg',
        '/images/food/egg.jpg',
        '/images/food/brek_burger.jpg',
        '/images/food/meat_sand.jpg',
        '/images/food/everything_za.jpg',
    ];

    const images2 = [
        '/images/food/hawaiian.jpg',
        '/images/food/mediteranian.jpg',
        '/images/food/food1.jpg',
        '/images/food/food2.jpg',
        '/images/food/food3.jpg',
        
    ];

    const images3 = [
        '/images/food/food4.jpg',
        '/images/food/pulled_pork.jpg',
        '/images/food/steak.jpg',
        '/images/food/meat.jpg',
        '/images/food/club.jpg',
        '/images/food/wings.jpg',
        '/images/food/meatballs.jpg',

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
