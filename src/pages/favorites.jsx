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
            {/* CATEGORIES */}
            <div className="favorites--header">
            {categories.map((category) => (
                <h1 
                    key={category} 
                    className={`${selectedCategory === category ? 'favorites--header__active' : ''} cursor-pointer`} 
                    onClick={() => handleCategoryChange(category)}
                >
                    {category}
                </h1>
            ))}
            </div>

            {/* CARD */}
            <div className="foodCard--container">
                <AnimatePresence mode="popLayout" >
                    <motion.div 
                        key={selectedCategory}
                        initial={{ x: 2000 }}
                        animate={{ x: 0 }}
                        exit={{ x: -2000 }}
                        transition={ transition }
                        className="flex gap-7 justify-center"
                    >
                        {itemsToShow.map((item, i) => (
                            <div className="foodCard" key={i}>
                                <img src={item.img} alt={item.item} />
                                <div className="flex justify-between">
                                    <h2>{item.item}</h2>
                                    <h2>${item.price}</h2>
                                </div>
                                <p>{item.description}</p>
                                <span className="flex items-center hover:underline">Order now <MdKeyboardArrowRight /></span>
                            </div> 
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </article>
    );
}
