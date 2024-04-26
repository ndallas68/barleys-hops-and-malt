import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { favoritesData } from '../data/favorites';
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Favorites() {
    const [selectedCategory, setSelectedCategory] = useState('Burgers');
    const [selected, setSelected] = useState(0);

    const categories = Object.keys(favoritesData);
    const transition = {type: 'spring', duration: '3'};

    function handleCategoryChange(category) {
        setSelectedCategory(category);
        setSelected(0);
    }

    function handleArrowClick(direction) {
        const currentIndex = categories.indexOf(selectedCategory);
        let newIndex;

        if (direction === 'right') {
            newIndex = (currentIndex + 1) % categories.length;
        } else {
            newIndex = (currentIndex - 1 + categories.length) % categories.length;
        }

        setSelectedCategory(categories[newIndex]);
    }

    const itemsToShow = favoritesData[selectedCategory].slice(selected, selected + 3);
    
    return (
        <article id="favorites">
            <div className="heading favorites--header" > 
                {categories.map((category) => (
                    <h1 
                        key={category} 
                        className={`
                            ${selectedCategory === category ? 'favorites--header__active' : ''}
                            cursor-pointer
                            `
                        } 
                        onClick={() => 
                            handleCategoryChange(category)
                        }
                    >
                        {category}
                    </h1>
                ))}
                
            </div>
            <div className="flex relative">
                <div 
                    className="
                        absolute 
                        h-[100%] 
                        2xl:w-[4vw] 2xl:left-[-1.5vw]
                        xl:w-[4vw] xl:left-[-3.5vw] 
                        w-[4vw] left-[-4vw] 
                        flex 
                        items-center 
                        justify-center
                        rounded-r-xl

                        hover:cursor-pointer 
                        hover:bg-[linear-gradient(-90deg,#65656550_40.14%,#00000090_100.75%)]
                        hover:scale-110 
                    "
                    onClick={() => {
                        handleArrowClick('left');
                    }}
                >
                    <MdKeyboardArrowLeft size={48} className="bg-blur text-black" />
                </div>
                <AnimatePresence mode="popLayout" >
                    <motion.div 
                        key={selectedCategory}
                        initial={{ x: 2500 }}
                        animate={{ x: 0 }}
                        exit={{ x: -2500 }}
                        transition={ transition }
                        className="flex gap-7 justify-center motion"
                    >
                        {itemsToShow.map((item, i) => (
                            <div
                                className="food--card" 
                                key={i}
                            >
                                <img 
                                    src={item.img} 
                                    alt={item.item} 
                                    className="
                                        rounded-[2rem] 
                                        object-cover 
                                        w-[100%] 
                                        h-[40vh]
                                        
                                    "
                                />
                                <div className="flex flex-col space-y-4 mt-5 p-5">
                                    <div className="flex justify-between">
                                        <h2 className="font-bold">{item.item}</h2>
                                        <h2 className="font-bold">${item.price}</h2>
                                    </div>
                                    <p>{item.description}</p>
                                    <span className="flex items-center hover:underline">Order now <MdKeyboardArrowRight /></span>
                                </div>
                            </div> 
                        ))}
                    </motion.div>
                </AnimatePresence>
                <div 
                    className="
                        absolute 
                        h-[100%] 
                        2xl:w-[4vw] 2xl:right-[-1.5vw]
                        xl:w-[4vw] xl:right-[-3.5vw] 
                        w-[4vw] right-[-4vw]  
                        flex items-center 
                        justify-center 
                        rounded-l-xl
                        
                        hover:cursor-pointer 
                        hover:bg-[linear-gradient(90deg,#65656550_40.14%,#00000090_100.75%)]
                        hover:scale-110
                    "
                    onClick={() => {
                        handleArrowClick('right');
                    }}
                >
                    <MdKeyboardArrowRight 
                        size={48} 
                        className="bg-blur text-black "
                    />
                </div>
            </div>
        </article>
    );
}
