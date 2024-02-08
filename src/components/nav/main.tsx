const Main = () => {
    return (
        <div className="w-64 h-full headnav flex justify-center items-center">
            <div className="w-full mx-14 h-10 rounded-full bg-[#F5F5FC] flex justify-evenly items-center">
                <div className="flex gap-1 text-black text-xs items-center font-semibold">
                    <span>3</span>
                    <img src="ticket.png" className="w-4" alt="" />
                </div>
                <div className="flex gap-1 text-black text-xs items-center font-semibold">
                    <span>65</span>
                    <img src="wallet.png" className="w-4" alt="" />
                </div>
                <div className="bg-white rounded-full h-6 w-6 flex justify-center items-center relative cursor-pointer duration-300 active:scale-95">
                    <img src="notification.png" className="w-4" alt="" />
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full absolute top-0 right-0"></div>
                </div>
            </div>
        </div>
    );
};

export default Main;
