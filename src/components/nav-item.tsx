const NavItem = ({ img }: { img: string }) => {
    return (
        <img
            src={img}
            className="w-5 cursor-pointer duration-300 active:scale-95"
            alt=""
        />
    );
};

export default NavItem;
