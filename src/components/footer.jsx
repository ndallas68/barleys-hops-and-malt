
export default function Footer() {
    return (
        <footer className="h-[20vh] relative mt-[10rem]">
            <div className='spotlight footer--blur z-[-1] opacity-20' />
            {/* <div className='spotlight w-[40rem] h-[10rem] right-[30%] bottom-[0rem] z-[-1] opacity-35'></div> */}

            <div className="flex flex-col items-center ">
                <h1 className="mb-10 font-bold text-xl">Barley's</h1>
                <div className="footer--links">
                    <a href="" >About Us</a>
                    <a href="" >Menu</a>
                    <a href="" >Events</a>
                    <a href="#contact">Contact</a>
                    <a href="" >Reservations</a>  
                </div>
            </div>
           
            <div className="flex flex-col items-center my-10">
                <hr className="border border-gray-800 h-[1px] w-[92vw] mt-5"/>
            </div>
            <div className="py-4 flex justify-between text-[12px] mx-10">
                <span>© 2024 Barley's. All rights reserved.</span>
                <div className="flex gap-4 underline">
                    <span>Privacy Policy</span>
                    <span>Terms and Conditions</span>
                    <span>Cookie Policy</span>
                </div>
            </div>
        </footer>
    );
}