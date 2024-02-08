const BackToHome = () => {
    return (
        <div className="h-10 rounded-full bg-white mt-3 flex justify-evenly items-center px-3 gap-2 cursor-pointer duration-300 active:scale-95">
            <img src="direct-left.png" className="w-5" alt="" />
            <span className="text-black text-xs font-semibold">
                Back to home
            </span>
        </div>
    );
};

export default BackToHome;
