import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

export default function Favorites() {

    return (
        <div id='menuCard'>
        <div className='menuCard--container'>
            <img src={Menu} alt='' href='' />
            <div className="menuCard--text">
                <h1>Discover Our</h1>
                <h1>Delicious</h1>
                <h1>Food Menu</h1>
                <p className='mt-5'>Indulge in our mouthwatering dishes made with fresh, local ingredients.</p>
                <div className="flex gap-5 mt-8">
                    <button className='btn--main'>Menu</button>
                    <button className='btn--secondary'>Order</button>
                </div>
            </div>
        </div>
    </div>
    )
}