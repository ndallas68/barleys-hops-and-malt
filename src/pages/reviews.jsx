import { useEffect, useState } from "react";
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from "react-icons/io5";
import { RiStarSFill } from "react-icons/ri";
import Profile from '../assets/default_profile.png';
import { reviews } from '../data/reviews.js';

export default function Reviews() {
    const [images, setImages] = useState([]);
    const [selected, setSelected] = useState(0);
    const rLength = Reviews.length;

    useEffect(() => {
        const loadImage = async () => {
            try {
                const imageUrls = await Promise.all(reviews.map(async (item) => {
                    const image = await item.img;
                    return image.default;
                }));
                setImages(imageUrls);
            } catch (error) {
                console.error('There was an issue loading images: ', error)
                setImages(reviews.map(() => Profile))
            }
        }
        
        loadImage();
    }, []);

    return (
        <div className="h-[50vh] flex items-center justify-center bg-white" id="reviews"> 
        <article className="w-[100vw] p-10 flex flex-col relative shadow-[0_35px_60px_100px_rgba(0,0,0,0.3)] rounded-2xl max-w-[2000px]">
            <div className="flex flex-col gap-5 mx-5 mb-10">
                <span className="font-bold xl:text-[5rem] md:text-[3rem] ">What Our Customers Say</span>
                <span>Delicious food, great atmosphere, and friendly service!</span>
            </div>
            
            <div className="mx-5">
                <div className="flex gap-8">
                    <div className="w-[40vw] gap-5 flex flex-col">
                        <span className="flex">
                            <RiStarSFill size={30}/>
                            <RiStarSFill size={30}/>
                            <RiStarSFill size={30}/>
                            <RiStarSFill size={30}/>
                            <RiStarSFill size={30}/>
                        </span>
                        <p>{reviews[selected].content}</p>
                        <div className="flex items-center gap-5">
                            <img 
                                src={images[selected] || Profile} 
                                alt={reviews[selected].heading} 
                                className="w-[3rem] h-[3rem] object-cover rounded-[50%]" 
                            />
                            <div className="flex gap-5">
                                <p className="text-sm"> {reviews[selected].reviewer} </p>
                                <hr className="h-[25px] w-[] border border-gray-500"/>
                                <p className="text-sm"> {reviews[selected].title} </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[40vw] space-y-5">
                        <span className="flex">
                            <RiStarSFill size={30}/>
                            <RiStarSFill size={30}/>
                            <RiStarSFill size={30}/>
                            <RiStarSFill size={30}/>
                            <RiStarSFill size={30}/>
                        </span>
                        <p>{reviews[selected+1].content}</p>
                        <div className="flex items-center gap-5">
                            <img 
                                src={images[selected+1] || Profile} 
                                alt={reviews[selected+1].heading} 
                                className="w-[3rem] h-[3rem] object-cover rounded-[50%]" 
                            />
                            <div className="flex gap-5">
                                <p className="text-sm"> {reviews[selected+1].reviewer} </p>
                                <hr className="h-[25px] w-[] border border-gray-500"/>
                                <p className="text-sm"> {reviews[selected+1].title} </p> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 right-5 flex">
                <IoArrowBackCircleOutline 
                    size={48} 
                    className="hover:cursor-pointer hover:scale-110"
                    onClick={() => {
                        selected === 0
                        ? setSelected(rLength - 1)
                        : setSelected((prev) => prev - 1)
                    }}
                />
                <IoArrowForwardCircleOutline 
                    size={48} 
                    className="hover:cursor-pointer hover:scale-110"
                    onClick={() => {
                        selected === 0
                        ? setSelected(rLength - 1)
                        : setSelected((prev) => prev - 1)
                    }}
                />
            </div>
        </article>
        </div>
    );
}