
export default function Hero() {
    return (
        <div className='hero' id="hero">
            <section className='hero--container bg-fade'>
                <div className='hero--header'>
                    <h1 className="title">Experience the warm</h1>
                    <h1 className="title">and inviting</h1>
                    <h1 className="title">atmosphere at</h1>
                    <h1 className='stroke-text title'>Barley{"'"}s Hops & Malt</h1>
                    <p className='text-base font-normal mt-2'>Indulge in delicious food and drinks while surrounded by friendly faces</p>
                    <div className='flex gap-5 mt-10'>
                        <button className='btn--main' >Reservations</button>
                        <button className='btn--secondary'>Menu</button>
                    </div>
                </div>
            </section>
        </div>
    );
}