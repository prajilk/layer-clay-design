const TitleCard = () => {
    return (
        <div className="absolute w-72 h-60 bottom-0 right-0 p-7 overflow-hidden m-4 glassy-card flex flex-col justify-between rounded-[3rem]">
            <div className="w-full h-[50%] flex justify-between">
                <div className="text-black">
                    <span className="text-xs">Oct, 2024</span>
                    <h1 className="text-5xl font-semibold">02</h1>
                </div>
                <div>
                    <img src="dnd.png" className="w-36" alt="" />
                </div>
            </div>
            <div className="w-full h-20 bg-white rounded-full flex justify-evenly items-center">
                <div className="flex flex-col items-center gap-1">
                    <img src="heart.png" className="w-5 h-fit" alt="" />
                    <span className="text-xs text-black font-semibold">
                        32,190
                    </span>
                </div>
                <span className="h-7 border border-black/30 border-dashed my-10"></span>
                <div className="flex flex-col items-center gap-1">
                    <img src="star.png" className="w-5 h-fit" alt="" />
                    <span className="text-xs text-black font-semibold">
                        9,571
                    </span>
                </div>
                <span className="h-7 border border-black/30 border-dashed my-10"></span>
                <div className="flex flex-col items-center gap-1">
                    <img src="frame.png" className="w-5 h-fit" alt="" />
                    <span className="text-xs text-black font-semibold">
                        21,688
                    </span>
                </div>
            </div>
        </div>
    );
};

export default TitleCard;
