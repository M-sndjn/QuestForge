import Forest from "../assets/Forest.avif"
import Goblin from "../assets/Goblin.png"
import Fire from "../assets/Fire.png"
import Elf from "../assets/Elf.png"

export default function HeroSection() {

    return (
        
        <section  className="min-h-screen w-full flex flex-col sm:flex-row">
            
            <div className="h-[600px] w-full sm:w-[40%] flex flex-col justify-center translate-x-20 gap-4">
                <span className="sm:text-5xl text-3xl font-semibold font-inter w-[90%] leading-tight">Turn goals  into Quest</span>
                <span className="sm:text-4xl text-2xl font-semibold font-inter text-blue-500">Level up your life</span>
                <p className="sm:text-lg text-sm font-sm font-inter w-[80%] text-left leading-8 ">Quest Forge turns your tasks into adventures. Complete quest, earn XP, maintain streaks, unlock achievements, and become the most productive version of yourself</p>
                <button className=" sm:h-12 sm:w-36 h-8 w-24 text-sm sm:text-base mt-8 bg-blue-500 rounded-md text-white font-inter"> Start for free</button>
            </div>
            <div className="h-[560px] sm:w-[60%] w-full p-8 bg-white">
                <div className="h-full w-full shadow shadow-blue-200 rounded-xl flex overflow-hidden">
                    <div className="bg-slate-800 h-full w-[30%] px-4 py-6 flex flex-col gap-10">
                        <div className="flex gap-4 justify-center items-center">
                            <div className="h-14 w-14 rounded-full border border-slate-600 overflow-hidden">
                                <img src={Elf} alt="" className="" />
                            </div>
                            <div className="w-[50%] flex flex-col text-sm">
                                <span className="text-white">Ranger</span>
                                <span className="text-white">Level:12</span>
                                <div className="h-2 w-16 bg-blue-500 rounded-xl mt-1"></div>
                            </div>


                        </div>
                        <ul className="h-[50%] w-full text-white font-inter space-y-8 p-2">
                            <li>Battle/Quest</li>
                            <li>Stats</li>
                            <li>Calendar</li>
                            <li>Setting</li>
                        </ul>
                        <div className="h-24 w-full flex flex-col text-white font-inter bg-slate-700 p-4 rounded-lg">
                            <span>Daily Streak: </span>
                            <span className="flex gap-4">18 Days <img src={Fire} alt="" className="w-6"/> </span> 
                        </div>
                    </div>
                    <div className="h-[490px] w-full flex flex-col">
                        {/* Battle */}
                        <div className="h-2/3 w-full flex flex-col items-center p-6 relative justify-between">
                            <img src={Forest} className="absolute inset-0 h-full w-full z-10 object-cover brightness-75"/>
                            
                            {/*Health Bar and Monster*/}
                            <div className="bg-red-600 h-4 w-[75%] m-4 z-20 flex flex-col items-center rounded-xl border border-red-700 text-white font-kodemono text-xs">
                                HP:100% <div className="text-md w-20 h-20 p-1 m-4 bg-black/50 rounded-full backdrop-blur-sm border border-black flex items-center justify-center ">Goblin</div>
                            </div>
                            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
                                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-black/40 blur-md rounded-full"></div>
                                <img src={Goblin} className="w-36 h-36 object-contain animate-idle" />
                            </div>
                            {/*Chapters*/}
                            <ul className="bg-black/50 shadow-lg shadow-black/50 backdrop-blur-sm rounded-full w-32 h-3 z-20 flex justify-center items-center gap-2">
                                <li className="h-2 w-2 rounded-full bg-blue-500 border ring-1 ring-white border-white"></li>
                                <li className="h-2 w-2 rounded-full bg-transparent border border-white"></li>
                                <li className="h-2 w-2 rounded-full bg-transparent border border-white"></li>
                                <li className="h-2 w-2 rounded-full bg-transparent border border-white"></li>
                                <li className="h-2 w-2 rounded-full bg-transparent border border-white"></li>
                            </ul>
                        </div>
                        {/* Tasks */}
                        <div className="h-1/3 w-full p-1">
                            <div className="h-full w-full bg-white shadow-sm shadow-black rounded-lg p-2">
                                <ul className="grid grid-cols-2 grid-rows-2 gap-4">
                                    <li className="h-16 p-3 flex border-black border bg-black/20 backdrop-blur-md rounded-md font-kodemono text-xs justify-between items-center"><div>Drink water <br/>Damage :10 exp: 10</div><button className="w-3 h-3 rounded-sm border border-black"></button></li>
                                    <li className="h-16 p-3 flex border-black border bg-black/20 backdrop-blur-md rounded-md font-kodemono text-xs justify-between items-center"><div>Drink water <br/>Damage :10 exp: 10</div><button className="w-3 h-3 rounded-sm border border-black"></button></li>
                                    <li className="h-16 p-3 flex border-black border bg-black/20 backdrop-blur-md rounded-md font-kodemono text-xs justify-between items-center"><div>Drink water <br/>Damage :10 exp: 10</div><button className="w-3 h-3 rounded-sm border border-black"></button></li>
                                    <li className="h-16 p-3 flex border-black border bg-black/20 backdrop-blur-md rounded-md font-kodemono text-xs justify-between items-center"><div>Drink water <br/>Damage :10 exp: 10</div><button className="w-3 h-3 rounded-sm border border-black"></button></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}