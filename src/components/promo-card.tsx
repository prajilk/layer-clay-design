const PromoCard = () => {
    return (
        <div className="small-card relative rounded-[3rem] w-full h-full border-5 border-[#F5F5FC]">
            <div className="w-full h-full absolute z-50 curve rounded-[3rem] p-5 flex flex-col justify-between">
                <div>
                    <span className="text-black cursor-pointer duration-300 active:scale-95 text-xs border border-slate-300 rounded-full px-2 py-1.5 block w-fit mb-2">
                        20% off
                    </span>
                    <span className="text-black cursor-pointer text-xs border border-slate-300 rounded-full px-2 py-1.5 whitespace-nowrap me-1">
                        Free Popcorn
                    </span>
                    <span className="text-black cursor-pointer text-xs border border-slate-300 rounded-full px-2 py-1.5 whitespace-nowrap">
                        5% off
                    </span>
                </div>
                <div className="text-black">
                    <h1 className="text-black/50 text-lg font-semibold">
                        Promo
                    </h1>
                    <div className="flex gap-2">
                        <span className="text-4xl font-semibold">24</span>
                        <p className="text-black/40 text-sm">ready</p>
                    </div>
                </div>
                <img
                    src="ticket-black.png"
                    className="absolute w-9 right-1.5 top-1.5"
                    alt=""
                />
            </div>
        </div>
    );
};

export default PromoCard;
