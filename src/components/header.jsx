import { useCallback, useEffect, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";

export default function Header() {
    const [isMobile, setIsMobile] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const getWindowSize = useCallback(() => {
        setIsMobile(window.innerWidth <= 850); 
    }, []);

    useEffect(() => {
        getWindowSize();
        window.addEventListener('resize', getWindowSize);

        return () => {
            window.removeEventListener('resize', getWindowSize);
        }
    }, [getWindowSize]);

    return (
        <header className="flex bg-white py-2 px-5 justify-between header">
            {(isMobile === true && menuOpen === false) ? (
                <div className="flex w-full items-center justify-between pt-2">
                    <span className="text-xl font-bold tracking-wider">Barley{"'"}s</span>
                    <nav className="bg-var-appColor p-[0.5rem] rounded-md cursor-pointer hamburger"
                        onClick={() => {setMenuOpen(true)}}
                    >
                        <CiMenuBurger />
                    </nav>
                </div>
                
            ) : (
                <ul className="flex gap-5 ml-5 w-full justify-between nav--menu">
                    <div className="flex gap-5 items-center nav--list">
                        <span className="text-xl font-bold flex items-center justify-center tracking-wider logo">Barley{"'"}s</span>
                        <a href="" onClick={() => {setMenuOpen(false)}}>
                            <li>Events</li>
                        </a>
                        <a href="#contact" onClick={() => {setMenuOpen(false)}}>
                            <li>Specials</li>
                        </a>
                        <a href="" onClick={() => {setMenuOpen(false)}}>
                            <li>Contact Us</li>
                        </a>
                    </div>
                    
                    <div className="flex gap-3 nav--btns">
                        <button
                            className='btn--secondary btn--mobile'
                            onClick={() => {setMenuOpen(false)}}
                        >Order</button>
                        <button 
                            className='
                                btn--main btn--mobile
                            '
                            onClick={() => {setMenuOpen(false)}}
                        >Menu</button>
                    </div>
                    <li className="hidden close hover:cursor-pointer" onClick={() => {setMenuOpen(false)}}>Close</li>
                </ul>
            )}
        </header>
    );
}