import { useEffect, useState } from "react";
import { RiStarSFill } from "react-icons/ri";
import { Reviews } from '../data/reviews.js'
import Profile from '../assets/default_profile.png';

export default function ReviewCard() {
    const [images, setImages] = useState([]);
    const [selected, setSelected] = useState(0);
    const rLength = Reviews.length;

    useEffect(() => {
        const loadImage = async () => {
            try {
                const imageUrls = await Promise.all(Reviews.map(async (item) => {
                    const image = await item.img;
                    return image.default;
                }));
                setImages(imageUrls);
            } catch (error) {
                console.error('There was an issue loading images: ', error)
                setImages(Reviews.map(() => Profile))
            }
        }
        
        loadImage();
    }, [])
    return (
        <div className="flex gap-8 relative w-[100vw]">
            <div className="w-[50%] space-y-5">
                <span className="flex">
                    <RiStarSFill size={30}/>
                    <RiStarSFill size={30}/>
                    <RiStarSFill size={30}/>
                    <RiStarSFill size={30}/>
                    <RiStarSFill size={30}/>
                </span>
                <p>{Reviews[selected].content}</p>
                <div className="flex items-center gap-5">
                    <img 
                        src={images[selected] || Profile} 
                        alt={Reviews[selected].heading} 
                        className="w-[3rem] h-[3rem] object-cover rounded-[50%]" 
                    />
                    <div className="">
                        <p className="text-sm"> {Reviews[selected].reviewer} </p>
                        <p className="text-sm"> {Reviews[selected].title} </p>
                    </div>
                </div>
            </div>
            <div className="w-[50%] space-y-5 flex flex-col justify-between">
                <span className="flex">
                    <RiStarSFill size={30}/>
                    <RiStarSFill size={30}/>
                    <RiStarSFill size={30}/>
                    <RiStarSFill size={30}/>
                    <RiStarSFill size={30}/>
                </span>
                <p>{Reviews[selected+1].content}</p>
                <div className="flex items-center gap-5">
                    <img 
                        src={images[selected+1] || Profile} 
                        alt={Reviews[selected+1].heading} 
                        className="w-[3rem] h-[3rem] object-cover rounded-[50%]" 
                    />
                    <div className="">
                        <p className="text-sm"> {Reviews[selected+1].reviewer} </p>
                        <p className="text-sm"> {Reviews[selected+1].title} </p> 
                    </div>
                </div>
            </div>
        </div>
    );
}