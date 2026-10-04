import Forest from '../assets/Forest.avif'
import Wizard from '../assets/Wizard.png'
import LevelUp from '../assets/LevelUp.png'
import Goblin from "../assets/Goblin.png"

export default function HowItWorks() {
    return (
        <section className="bg-white min-h-screen w-full flex flex-col justify-center items-center font-inter my-10 gap-10">

            {/* Title */}
            <div className="w-full bg-white flex flex-col items-center justify-center gap-4">
                <span className="text-blue-500">How it works</span>

                <span className="text-xl font-semibold text-center">
                    Level up in 3 simple steps
                </span>

                <span className="text-xs font-light w-60 text-center">
                    Quest Forge turns your goals into quest and helps you grow everyday
                </span>
            </div>


            {/* Card Process - Responsive Grid */}
            <div className="w-full max-w-5xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-8 sm:gap-x-8 sm:gap-y-10">

                {/* ================= CARD 1 ================= */}
                <div className="order-1 sm:order-1 flex justify-center">

                    <div className="relative shrink-0 w-36 sm:w-48 h-56 rounded-md flex">

                        {/* Number */}
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 rounded-full bg-blue-500 h-6 w-6 text-center text-sm leading-6 text-white">
                            1
                        </div>

                        {/* Sidebar */}
                        <div className="w-[20%] sm:w-[30%] h-full py-4 bg-slate-800 rounded-s-md flex flex-col items-center justify-center gap-6">

                            <div className="h-5 w-2/3 rounded-md bg-slate-600"></div>
                            <div className="h-5 w-2/3 rounded-md bg-slate-600"></div>
                            <div className="h-5 w-2/3 rounded-md bg-slate-600"></div>
                            <div className="h-5 w-2/3 rounded-md bg-slate-600"></div>

                            <div className=" h-4 sm:h-9 w-[55%] rounded-md bg-blue-500 text-white text-xs sm:text-2xl text-center">
                                +
                            </div>

                        </div>

                        {/* Create Quest Form */}
                        <div className="w-[70%] bg-slate-200 rounded-e p-2">

                            <div className="w-full h-full relative rounded-md bg-white flex flex-col gap-6">

                                <span className="text-[10px] font-semibold mx-2 mt-2">
                                    Create Quest
                                </span>

                                <span className="text-[9px] font-light mx-2 pl-2 h-6 rounded-md border items-center flex">
                                    Learn Chess
                                </span>

                                <span className="text-[8px] px-4">
                                    Due Date:
                                </span>

                                <span className="text-[8px] px-4">
                                    Reward:
                                </span>

                                <span className="text-[7px] sm:text-[9px]  bottom-3 right-3 rounded-md absolute font-medium text-white w-[40%] h-5 bg-blue-500 flex items-center justify-center">
                                    Create
                                </span>

                            </div>

                        </div>

                        {/* Desktop Arrow */}
                        <span className="hidden sm:block absolute top-1/2 -right-7 -translate-y-1/2 text-lg">
                            ➜
                        </span>

                    </div>
                </div>


                {/* ================= TEXT 1 ================= */}
                <div className="order-2 sm:order-4 flex flex-col justify-center items-center text-center">

                    <div className="w-full flex flex-col items-center justify-center gap-2">

                        <span className="font-semibold text-sm sm:text-lg">
                            Create Your Quest
                        </span>

                        <span className="text-xs">
                            Turn any goal or task into a quest and set your reward
                        </span>

                    </div>

                </div>


                {/* ================= TEXT 2 ================= */}
                <div className="order-3 sm:order-5 flex flex-col justify-center items-center text-center">

                    <div className="w-full flex flex-col items-center justify-center gap-2">

                        <span className="font-semibold text-sm sm:text-lg">
                            Complete Your Quest
                        </span>

                        <span className="text-xs">
                            Finish tasks, defeat monsters, and earn XP
                        </span>

                    </div>

                </div>


                {/* ================= CARD 2 ================= */}
                <div className="order-4 sm:order-2 flex justify-center">

                    <div className="relative shrink-0 w-36 sm:w-48 h-56 bg-slate-600 rounded-md">

                        {/* Number */}
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 rounded-full bg-blue-500 h-6 w-6 text-center text-sm leading-6 text-white">
                            2
                        </div>

                        {/* Forest Background */}
                        <img
                            src={Forest}
                            alt=""
                            className="absolute z-10 rounded-md object-cover w-full h-full brightness-75"
                        />

                        {/* Game UI */}
                        <div className="relative flex flex-col items-center w-full h-full z-20 text-white gap-1">

                            <span className="w-1/2 h-6 text-center mt-2">
                                Goblin
                            </span>

                            <span className="w-1/2 h-3 bg-red-500 shadow text-center text-[9px] leading-3 rounded-md">
                                HP:100
                            </span>

                            <img
                                src={Goblin}
                                alt=""
                                className="mt-auto mb-1 animate-idle"
                            />

                            {/* Task Progress */}
                            <div className=" sm:w-1/2 w-2/3 h-12 bg-slate-800 text-center text-xs leading-6 rounded-md mb-4">

                                <div className="flex flex-col w-full h-full">

                                    <div className="w-full flex justify-between">

                                        <span className="text-white text-[8px] ml-1">
                                            Complete Task
                                        </span>

                                        <span className="text-white text-[8px] mr-1">
                                            2/3
                                        </span>

                                    </div>

                                    <div className="relative z-20 h-2 bg-slate-700 rounded-md mx-2">

                                        <div className="absolute h-2 w-[70%] z-10 rounded-s-md bg-green-500"></div>

                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* Desktop Arrow */}
                        <span className="hidden sm:block absolute top-1/2 -right-7 -translate-y-1/2 text-lg text-black">
                            ➜
                        </span>

                    </div>
                </div>


                {/* ================= CARD 3 ================= */}
                <div className="order-5 sm:order-3 flex justify-center">

                    <div className="relative shrink-0 w-36 sm:w-48 h-56 bg-slate-800 rounded-md text-white flex flex-col items-center">

                        {/* Number */}
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 rounded-full bg-blue-500 h-6 w-6 text-center text-sm leading-6 text-white">
                            3
                        </div>

                        <span className="text-xs sm:text-base mt-1">
                            Level Up!
                        </span>

                        <div className="h-20">
                            <img
                                src={LevelUp}
                                alt=""
                                className="h-full object-contain"
                            />
                        </div>

                        <span className="mt-auto mb-2 leading-6 text-[10px] sm:text-sm">
                            +250 Exp
                        </span>

                        {/* Stats */}
                        <div className="w-[80%] h-16 flex flex-col justify-around rounded-md mb-6 bg-slate-700">

                            <div className="flex justify-between px-2">

                                <span className="text-[8px] sm:text-sm leading-4 h-4">
                                    Streak:
                                </span>

                                <span className="text-[8px] sm:text-xs leading-4 h-4">
                                    24
                                </span>

                            </div>

                            <div className="flex justify-between px-2">

                                <span className="text-[8px] sm:text-xs leading-4 h-4">
                                    Quest Completed:
                                </span>

                                <span className="text-[8px] sm:text-xs leading-4 h-4">
                                    24
                                </span>

                            </div>

                        </div>

                    </div>

                </div>


                {/* ================= TEXT 3 ================= */}
                <div className="order-6 sm:order-6 flex flex-col justify-center items-center text-center">

                    <div className="w-full flex flex-col items-center justify-center gap-2">

                        <span className="font-semibold text-sm sm:text-lg">
                            Level Up
                        </span>

                        <span className="text-xs">
                            Build streaks, earn achievements, and become your best self
                        </span>

                    </div>

                </div>

            </div>


            {/* Footnote */}
            <div className="max-w-[80%] sm:max-w-full mx-4 rounded-md bg-blue-100 flex items-center">

                <div className="flex items-center justify-center gap-4 sm:gap-6 w-full px-4 sm:px-6 py-3">

                    <img
                        src={Wizard}
                        alt=""
                        className="w-12 h-12 sm:w-16 sm:h-16 object-contain shrink-0"
                    />

                    <div className="flex flex-col justify-center gap-2">

                        <span className="text-xs sm:text-sm font-semibold">
                            Stay consistent. See real progress.
                        </span>

                        <span className="text-xs sm:text-sm">
                            Every quest you complete is a step towards the life you want.
                        </span>

                    </div>

                </div>

            </div>

        </section>
    );
}