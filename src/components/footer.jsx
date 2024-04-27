
export default function Footer() {
    return (
        <footer className="h-[20vh] mt-10">
            <div className="flex flex-col items-center">
                <h1 className="mb-10 font-bold text-xl ">Barley's</h1>
                <div className="footer--links">
                    <span><a href="" />About Us</span>
                    <span><a href="" />Menu</span>
                    <span><a href="" />Events</span>
                    <a href="#contact">Contact</a>
                    <span><a href="" />Reservations</span>  
                </div>
            </div>
           
            <div className="flex flex-col items-center my-10">
                <hr className="border border-gray-200 h-[1px] w-[92vw] mt-5"/>
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