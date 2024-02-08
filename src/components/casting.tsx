const Casting = () => {
    return (
        <div className="w-full bg-[#F5F5FC] rounded-[3rem] h-[35%] px-2 pb-2 overflow-hidden">
            <div className="flex justify-between items-center px-3 py-2">
                <h1 className="text-black text-lg font-medium">Casting</h1>
                <div className="flex gap-1">
                    <img
                        src="direct-left.png"
                        className="w-5 h-fit cursor-pointer duration-300 active:scale-95"
                        alt=""
                    />
                    <img
                        src="direct-left.png"
                        className="w-5 h-fit rotate-180 cursor-pointer duration-300 active:scale-95"
                        alt=""
                    />
                </div>
            </div>
            <div className="relative">
                <img
                    src="avt.avif"
                    className="w-full rounded-[3rem] h-[9.5rem]"
                    alt=""
                />
                <div className="bg-red-600 absolute bottom-0 right-0 rounded-full me-4 mb-4 p-1 glassy-card flex gap-1 items-center cursor-pointer duration-300 active:scale-95">
                    <img src="avt.avif" className="w-7 rounded-full" alt="" />
                    <h3 className="text-xs text-black font-semibold">sakuro</h3>
                </div>
            </div>
        </div>
    );
};

export default Casting;
