const Profile = () => {
    return (
        <div className="w-full bg-white rounded-full flex items-center flex-col gap-4 py-4">
            <img
                src="img2.jpeg"
                className="w-10 rounded-full cursor-pointer duration-300 active:scale-95"
                alt=""
            />
            <hr className="border border-black/20 w-10 border-dashed" />
            <img
                src="ranking.png"
                className="w-7 cursor-pointer duration-300 active:scale-95"
                alt=""
            />
        </div>
    );
};

export default Profile;
