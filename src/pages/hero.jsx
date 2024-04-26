
export default function Hero() {
    return (
        <div className='hero'>
            <section className='hero--container bg-fade'>
                <div className='hero--header'>
                    <span>Experience the warm</span>
                    <span>and inviting</span>
                    <span>atmosphere at</span>
                    <span className='stroke-text'>Barley{"'"}s Hops & Malt</span>
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
                        <button className=' bg-white px-3 py-2 text-sm border border-black w-[5rem] text-black hover:scale-110 rounded-xl'>Order</button>
                    </div>
                </div>
            </section>
        </div>
    );
}