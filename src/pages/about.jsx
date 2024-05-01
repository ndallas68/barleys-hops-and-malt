import Barleys from '../assets/barleys_sign.jpg';

export default function About() {
    return (
        <div className="relative">
            <div className='blur-st w-[22rem] h-[30rem] top-[-200px] right-[-200px]'></div>
            <main className="about">
                <section className="about--container">
                    <div className="flex flex-col justify-center align-center p-10 space-y-5">
                        <h1>Our Story</h1> 
                        <p className="about--text ">
                            Welcome to Barley's, your friendly neighborhood bar nestled in the heart of East Troy. As a family-owned establishment, 
                            we take pride in offering a warm and inviting atmosphere where locals and visitors alike can unwind 
                            and enjoy great food, drinks, and company. 
                        </p>   
                        <p>
                            At Barley's, we believe in the simple pleasures of life: 
                            good food, good drinks, and good times. Our menu is a celebration of classic bar favorites with a creative twist, 
                            crafted with love and care using fresh, locally sourced ingredients. From mouthwatering burgers to crispy wings and 
                            savory sandwiches, every dish at Barley's is a culinary delight that will leave you craving for more.
                        </p> 
                        <p>
                            But Barley's is more than just a place to eat and drink. It's a gathering spot for friends and 
                            family, where stories are shared, laughter echoes, and memories are made. Our friendly staff is 
                            here to ensure you have a memorable experience, whether you're joining us for a quick lunch, a 
                            leisurely dinner, or a relaxing evening with drinks.
                        </p>
                        <p>
                            As part of our commitment to quality, we also 
                            offer a carefully curated selection of beers, wines, and cocktails to complement your meal. Whether 
                            you're a beer enthusiast looking to try local brews or a cocktail connoisseur in search of a new 
                            favorite, our bar has something for every palate.
                        </p>
                        <p>
                            So come on in, pull up a chair, and let Barley's 
                            be your home away from home. We're excited to welcome you to our family and share the Barley's 
                            experience with you. Cheers to good food, great company, and unforgettable moments at Barley's! 
                        </p>
                    </div>
                </section>
                <img src={Barleys} alt='' className='p-2 rounded-xl h-full w-[30vw]'/>
            </main>
        </div>
    );
}