import { useCallback, useEffect, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
    const [isMobile, setIsMobile] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const getWindowSize = useCallback(() => {
        setIsMobile(window.innerWidth <= 768); 
    }, []);

    useEffect(() => {
        getWindowSize();
        window.addEventListener('resize', getWindowSize);

        return () => {
            window.removeEventListener('resize', getWindowSize);
        }
    }, [getWindowSize]);

    return (
        <div className="relative">
            <header className="header" id="home">
                {(isMobile === true && menuOpen === false) ? (
                    <div className="closed--nav">
                        <span className="text-2xl font-bold tracking-wider">Barley{"'"}s</span>
                        <nav className="bg-var-appColor p-[0.5rem] rounded-md cursor-pointer hamburger"
                            onClick={() => {setMenuOpen(true)}}
                        >
                            <CiMenuBurger size={25} className="font-bold"/>
                        </nav>
                    </div>
                    
                ) : (
                    <AnimatePresence>
                        <motion.ul className="nav--menu"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%'}}
                            transition={{ type: "spring", duration: 1 }}
                        >
                            <div className="flex gap-5 items-center nav--list">
                                <span className="logo">Barley{"'"}s</span>
                                <a href="" className="nav--link__active" onClick={() => {setMenuOpen(false)}}>
                                    <li>Events</li>
                                </a>
                                <a href="#specials" className="nav--link__active" onClick={() => {setMenuOpen(false)}}>
                                    <li>Specials</li>
                                </a>
                                <a href="#contact" className="nav--link__active" onClick={() => {setMenuOpen(false)}}>
                                    <li>Contact Us</li>
                                </a>
                            </div>
                            
                            <div className="flex nav--btns">
                                <button
                                    className='grow--btn'
                                    onClick={() => {setMenuOpen(false)}}
                                >Order {isMobile ? '' : 'Online'}</button>
                            </div>
                            <li className="hidden close hover:cursor-pointer" onClick={() => {setMenuOpen(false)}}><IoMdClose /></li>
                        </motion.ul>
                    </AnimatePresence>
                )}
            </header>
        </div>
    );
}