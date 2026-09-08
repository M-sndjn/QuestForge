import Boss from "../assets/Boss.png"
import Quest from "../assets/Quest.png"
import Fire from "../assets/Fire.png"
import Calendar from "../assets/Calendar.png"
import Analytics from "../assets/Analytics.png"
import Trophy from "../assets/Trophy.png"
import { useEffect, useRef, useState } from "react";



export default function FeaturesSection() {

    const [isVisible, setIsVisible] = useState(false);
const listRef = useRef(null);

useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.disconnect();
            }
        },
        { threshold: 0.3 }
    );

    if (listRef.current) {
        observer.observe(listRef.current);
    }

    return () => observer.disconnect();
}, []);

    return (
        <section  className="bg-whites h-full w-full">
            <div className="w-full h-full flex flex-col justify-center items-center">
                <div className="h-10 w-full my-5 bg-white flex items-center justify-center font-inter font-semibold gap-6">
                    Your goals 
                    <span className="text-blue-500 relative">
                        Your quest
                        <span className="absolute -bottom-1 left-2 w-[80%] h-0.5 bg-blue-500 rounded-full"></span>
                    </span> 
                    Your progress
                </div>
                    
                    <ul ref={listRef}
                    className="w-full h-full grid grid-cols-3 grid-rows-2 justify-items-center items-center gap-4 text-center">
                        <li className="w-52 h-56 relative font-inter flex flex-col justify-center items-center bg-slate-800 text-white rounded-md gap-4">
                            <img src={Quest} alt="" className="w-10"/>
                            <span className="font-semibold">Quest System </span>
                            <span className="text-sm">  Turn tasks into rewarding quests</span>
                            <div className={`absolute w-full h-full right-0 bg-blue-500 rounded-md ${
                                            isVisible ? "animate-reveal-right" : ""}`}
                                            style={{ animationDelay: "0ms" }}></div>
                            <div className={`absolute w-full h-full left-0 bg-blue-500 rounded-md ${
                                            isVisible ? "animate-reveal-left" : ""}`}
                                            style={{ animationDelay: "0ms" }}></div>
                        </li>

                        <li className="w-52 h-56 relative font-inter flex flex-col justify-center items-center bg-slate-800 text-white rounded-md gap-4">
                            <img src={Boss} alt="" className="w-10"/>
                            <span className="font-semibold">Boss Battles</span>
                            <span className="text-sm">Complete tasks and defeat monsters</span>
                            <div className={`absolute w-full h-full right-0 bg-red-500 rounded-md ${
                                            isVisible ? "animate-reveal-right" : ""}`}
                                            style={{ animationDelay: "100ms" }}></div>
                            <div className={`absolute w-full h-full left-0 bg-red-500 rounded-md ${
                                            isVisible ? "animate-reveal-left" : ""}`}
                                            style={{ animationDelay: "100ms" }}></div>
                        </li>
                        <li className="w-52 h-56 relative font-inter flex flex-col justify-center items-center bg-slate-800 text-white rounded-md gap-4">
                            <img src={Fire} alt="" className="w-10"/>
                            <span className="font-semibold">Daily Streaks</span>
                            <span className="text-sm w-[80%]">Build consistency, one day at a time</span>
                            <div className={`absolute w-full h-full right-0 bg-orange-500 rounded-md ${
                                            isVisible ? "animate-reveal-right" : ""}`}
                                            style={{ animationDelay: "200ms" }}></div>
                            <div className={`absolute w-full h-full left-0 bg-orange-500 rounded-md ${
                                            isVisible ? "animate-reveal-left" : ""}`}
                                            style={{ animationDelay: "200ms" }}></div>
                        </li>
                        <li className="w-52 h-56 relative font-inter flex flex-col justify-center items-center bg-slate-800 text-white rounded-md gap-4">
                            <img src={Trophy} alt="" className="w-10"/>
                            <span className="font-semibold">Achievements</span>
                            <span className="text-sm w-[70%]">Earn badges for your progress</span>
                            <div className={`absolute w-full h-full right-0 bg-yellow-500 rounded-md ${
                                            isVisible ? "animate-reveal-right" : ""}`}
                                            style={{ animationDelay: "250ms" }}></div>
                            <div className={`absolute w-full h-full left-0 bg-yellow-500 rounded-md ${
                                            isVisible ? "animate-reveal-left" : ""}`}
                                            style={{ animationDelay: "250ms" }}></div>
                        </li>
                        <li className="w-52 h-56 relative font-inter flex flex-col justify-center items-center bg-slate-800 text-white rounded-md gap-4">
                            <img src={Calendar} alt="" className="w-10"/>
                            <span className="font-semibold">Calendar</span>
                            <span className="text-sm w-[70%]">Plan quests and stay on track</span>
                            <div className={`absolute w-full h-full right-0 bg-green-500 rounded-md ${
                                            isVisible ? "animate-reveal-right" : ""}`}
                                            style={{ animationDelay: "350ms" }}></div>
                            <div className={`absolute w-full h-full left-0 bg-green-500 rounded-md ${
                                            isVisible ? "animate-reveal-left" : ""}`}
                                            style={{ animationDelay: "350ms" }}></div>
                        </li>
                        <li className="w-52 h-56 relative font-inter flex flex-col justify-center items-center bg-slate-800 text-white rounded-md gap-4">
                            <img src={Analytics} alt="" className="w-10"/>
                            <span className="font-semibold">Analytics</span>
                            <span className="text-sm">See how far you've come</span>
                            <div className={`absolute w-full h-full right-0 bg-purple-500 rounded-md ${
                                            isVisible ? "animate-reveal-right" : ""}`}
                                            style={{ animationDelay: "450ms" }}></div>
                            <div className={`absolute w-full h-full left-0 bg-purple-500 rounded-md ${
                                            isVisible ? "animate-reveal-left" : ""}`}
                                            style={{ animationDelay: "450ms" }}></div>
                        </li>
                    </ul>
            </div>
        </section>
    );
}