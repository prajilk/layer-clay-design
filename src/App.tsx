import Casting from "./components/casting";
import Language from "./components/language";
import NavItem from "./components/nav-item";
import BackToHome from "./components/nav/back-to-home";
import Main from "./components/nav/main";
import Next from "./components/nav/next";
import Profile from "./components/profile";
import PromoCard from "./components/promo-card";
import TimeChip from "./components/time-chip";
import TitleCard from "./components/title-card";

const navItems = [
    "home-2.png",
    "magic-star.png",
    "location.png",
    "briefcase.png",
];

function App() {
    return (
        <>
            <h1 className="text-black text-center font-semibold mt-10 lg:hidden">
                Developed for Large Screens only!
            </h1>
            <div className="max-w-4xl h-fit rounded-[3rem] mx-auto shadow-lg overflow-hidden lg:flex hidden">
                <div>
                    <div className="w-20 h-[26rem] bg-white border-l-4 border-t-4 border-white">
                        <div className="w-full h-full rounded-[3rem] rounded-br-none bg-[#F5F5FC] p-1 flex flex-col items-center py-5">
                            <img src="c4.png" className="w-8" alt="" />
                            <div className="space-y-6 py-7">
                                {navItems.map((item, i) => (
                                    <NavItem img={item} key={i} />
                                ))}
                            </div>
                            <Profile />
                        </div>
                    </div>
                    <Language />
                </div>
                <div className="bg-white w-full items-stretch p-1 ps-0">
                    <div className="w-full rounded-[3rem] h-full items-stretch bg-[#F5F5FC] p-1.5 pt-0 grid relative main overflow-hidden">
                        <div className="w-52 h-52 bg-[#F5F5FC] absolute bottom-0 left-0 rounded-bl-[3rem] rounded-tr-[3rem]">
                            <PromoCard />
                        </div>
                        <div className="w-full h-16 flex justify-evenly">
                            <BackToHome />
                            <Main />
                            <Next />
                        </div>
                        <TitleCard />
                    </div>
                </div>
                <div className="w-96 items-stretch bg-white flex flex-col gap-1 p-2">
                    <div className="w-full bg-[#F5F5FC] rounded-[3rem] flex-1 overflow-hidden p-1.5">
                        <div className="w-full h-10 flex justify-between items-center">
                            <h1 className="text-black text-2xl font-medium ms-5">
                                Slot
                            </h1>
                            <div className="bg-white h-full w-[50%] rounded-tl-[2rem] rounded-tr-[3rem] slot-curve relative">
                                <p className="text-black/40 font-medium text-[.5rem] mt-3 ms-3">
                                    Cy Cinemas, 23 Azumaki St
                                </p>
                            </div>
                        </div>
                        <div className="bg-white h-[89%] rounded-tl-[3rem] rounded-bl-[2.5rem] rounded-br-[2.5rem] w-full">
                            <div className="pt-4 flex justify-evenly">
                                <TimeChip
                                    time="18:00"
                                    className="text-white bg-black"
                                />
                                <TimeChip
                                    time="21:25"
                                    className="text-black bg-white"
                                />
                                <TimeChip
                                    time="23:50"
                                    className="text-black bg-white"
                                />
                            </div>
                            <img
                                src="seats.png"
                                className="w-[80%] mx-auto mt-4"
                                alt=""
                            />
                            <div className="px-3 mt-2">
                                <span className="text-black text-xs font-semibold">
                                    Available
                                </span>
                                <div className="flex justify-between items-center">
                                    <div className="flex gap-2">
                                        <span className="text-4xl font-semibold text-black">
                                            158
                                        </span>
                                        <p className="text-black/40 text-xs">
                                            seats
                                        </p>
                                    </div>
                                    <img
                                        src="magic-ticket.png"
                                        className="w-12"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Casting />
                </div>
            </div>
        </>
    );
}

export default App;
