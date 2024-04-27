
export default function Hero() {
    return (
        <div className='hero' id="hero">
            <section className='hero--container bg-fade'>
                <div className='hero--header'>
                    <h1 className="title">Experience the warm</h1>
                    <h1 className="title">and inviting</h1>
                    <h1 className="title">atmosphere at</h1>
                    <h1 className='stroke-text title'>Barley{"'"}s Hops & Malt</h1>
                    <p className='text-base font-normal mt-5'>Indulge in delicious food and drinks while surrounded by friendly faces</p>
                    <div className='flex gap-5 my-7'>
                        <button 
                            className='
                                w-[7rem]
                                bg-black 
                                px-3 py-2 
                                text-white 
                                text-sm 
                                border
                                border-white
                                rounded-xl
                                hover:scale-110                
                            '
                        >Reservations</button>
                        <button 
                            className=' 
                                bg-white 
                                px-3 py-2 
                                text-sm 
                                border-black
                                w-[7rem] 
                                text-black 
                                rounded-xl

                                hover:scale-110 '>Menu</button>
                    </div>
                </div>
            </section>
        </div>
    );
}