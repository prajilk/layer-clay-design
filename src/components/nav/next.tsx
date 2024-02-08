const Next = () => {
    return (
        <div className="h-10 rounded-full bg-white mt-3 flex justify-evenly items-center px-3 gap-2 cursor-pointer duration-300 active:scale-95">
            <span className="text-black text-xs font-semibold">
                Next: The Null
            </span>
            <img src="direct-left.png" className="w-5 rotate-180" alt="" />
        </div>
    );
};

export default Next;
