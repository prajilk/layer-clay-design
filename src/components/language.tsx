const Language = () => {
    return (
        <div className="w-20 h-48 bg-[#F5F5FC]">
            <div className="w-full h-full rounded-tr-[3rem] bg-white flex flex-col items-center py-4 gap-1">
                <div className="bg-[#F5F5FC] rounded-full w-11 h-11 flex justify-center items-center flex-shrink-0">
                    <img
                        src="grid-7.png"
                        className="w-7 cursor-pointer duration-300 active:scale-95"
                        alt=""
                    />
                </div>
                <div className="bg-[#F5F5FC] rounded-full w-11 h-full flex flex-col p-1 justify-between items-center">
                    <span className="text-black/50 text-xs">Eng</span>
                    <hr className="border border-black/20 w-5 border-dashed" />
                    <div className="bg-white rounded-full w-full h-10 flex justify-center items-center">
                        <img
                            src="translate.png"
                            className="w-5 cursor-pointer duration-300 active:scale-95"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Language;
