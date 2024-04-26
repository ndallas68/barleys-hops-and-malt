import Menu from '../assets/menu.jpg';

export default function MenuCard() {
    return (
        <div id='menuCard'>
            <div className='menuCard--container'>
                <img 
                    src={Menu} 
                    alt='' 
                    href=''
                    className='
                        object-cover 
                        shadow-2xl 
                        p-10 
                        rounded-[10rem] 
                        w-[50vw]
                        min-w-[20rem]

                        hover:cursor-pointer
                    '
                    
                />
                <div className="flex flex-col">
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
    );
}