import Boss from "../assets/Boss.png";
import Quest from "../assets/Quest.png";
import Fire from "../assets/Fire.png";
import Calendar from "../assets/Calendar.png";
import Analytics from "../assets/Analytics.png";
import Trophy from "../assets/Trophy.png";
import { useEffect, useRef, useState } from "react";

export default function FeaturesSection() {
    const [questVisible, setQuestVisible] = useState(false);
    const [bossVisible, setBossVisible] = useState(false);
    const [streakVisible, setStreakVisible] = useState(false);
    const [achievementVisible, setAchievementVisible] = useState(false);
    const [calendarVisible, setCalendarVisible] = useState(false);
    const [analyticsVisible, setAnalyticsVisible] = useState(false);

    const questRef = useRef(null);
    const bossRef = useRef(null);
    const streakRef = useRef(null);
    const achievementRef = useRef(null);
    const calendarRef = useRef(null);
    const analyticsRef = useRef(null);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.3
        };

        const questObserver = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setQuestVisible(true);
                questObserver.disconnect();
            }
        }, observerOptions);

        const bossObserver = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setBossVisible(true);
                bossObserver.disconnect();
            }
        }, observerOptions);

        const streakObserver = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setStreakVisible(true);
                streakObserver.disconnect();
            }
        }, observerOptions);

        const achievementObserver = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setAchievementVisible(true);
                achievementObserver.disconnect();
            }
        }, observerOptions);

        const calendarObserver = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setCalendarVisible(true);
                calendarObserver.disconnect();
            }
        }, observerOptions);

        const analyticsObserver = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setAnalyticsVisible(true);
                analyticsObserver.disconnect();
            }
        }, observerOptions);

        if (questRef.current) questObserver.observe(questRef.current);
        if (bossRef.current) bossObserver.observe(bossRef.current);
        if (streakRef.current) streakObserver.observe(streakRef.current);
        if (achievementRef.current) achievementObserver.observe(achievementRef.current);
        if (calendarRef.current) calendarObserver.observe(calendarRef.current);
        if (analyticsRef.current) analyticsObserver.observe(analyticsRef.current);

        return () => {
            questObserver.disconnect();
            bossObserver.disconnect();
            streakObserver.disconnect();
            achievementObserver.disconnect();
            calendarObserver.disconnect();
            analyticsObserver.disconnect();
        };
    }, []);

    return (
        <section className="bg-white min-h-screen w-full">
            <div className="w-full h-full flex flex-col justify-center items-center">
                <div className="h-10 w-full my-5 sm:text-base text-sm  bg-white flex items-center justify-center font-inter font-semibold gap-6">
                    Your goals
                    <span className="text-blue-500 relative">
                        Your quest
                        <span className="absolute -bottom-1 left-2 w-[80%] h-0.5 bg-blue-500 rounded-full"></span>
                    </span>
                    Your progress
                </div>

                <ul className="w-full h-full grid grid-cols-1 sm:grid-cols-3 grid-rows-2 justify-items-center items-center gap-4 text-center">

                    {/* Quest System */}
                    <li ref={questRef} className="sm:w-52 sm:h-56 px-1 w-48 h-52 relative font-inter flex flex-col justify-center items-center bg-slate-800 text-white rounded-md gap-4 overflow-hidden">
                        <img src={Quest} alt="" className="sm:w-10 w-8" />
                        <span className="font-semibold sm:text-base text-sm">Quest System</span>
                        <span className="sm:text-sm text-xs">Turn tasks into rewarding quests</span>

                        <div className={`absolute w-full h-full right-0 bg-blue-500 rounded-md ${questVisible ? "animate-reveal-right" : ""}`}></div>
                        <div className={`absolute w-full h-full left-0 bg-blue-500 rounded-md ${questVisible ? "animate-reveal-left" : ""}`}></div>
                    </li>

                    {/* Boss Battles */}
                    <li ref={bossRef} className="sm:w-52 sm:h-56 px-1 w-48 h-52 relative font-inter flex flex-col justify-center items-center bg-slate-800 text-white rounded-md gap-4 overflow-hidden">
                        <img src={Boss} alt="" className="sm:w-10 w-8" />
                        <span className="font-semibold sm:text-base text-sm">Boss Battles</span>
                        <span className="sm:text-sm text-xs">Complete tasks and defeat monsters</span>

                        <div className={`absolute w-full h-full right-0 bg-red-500 rounded-md ${bossVisible ? "animate-reveal-right" : ""}`}></div>
                        <div className={`absolute w-full h-full left-0 bg-red-500 rounded-md ${bossVisible ? "animate-reveal-left" : ""}`}></div>
                    </li>

                    {/* Daily Streaks */}
                    <li ref={streakRef} className="sm:w-52 sm:h-56 px-1 w-48 h-52 relative font-inter flex flex-col justify-center items-center bg-slate-800 text-white rounded-md gap-4 overflow-hidden">
                        <img src={Fire} alt="" className="sm:w-10 w-8" />
                        <span className="font-semibold sm:text-base text-sm">Daily Streaks</span>
                        <span className="sm:text-sm text-xs w-[80%]">Build consistency, one day at a time</span>

                        <div className={`absolute w-full h-full right-0 bg-orange-500 rounded-md ${streakVisible ? "animate-reveal-right" : ""}`}></div>
                        <div className={`absolute w-full h-full left-0 bg-orange-500 rounded-md ${streakVisible ? "animate-reveal-left" : ""}`}></div>
                    </li>

                    {/* Achievements */}
                    <li ref={achievementRef} className="sm:w-52 sm:h-56 px-1 w-48 h-52 relative font-inter flex flex-col justify-center items-center bg-slate-800 text-white rounded-md gap-4 overflow-hidden">
                        <img src={Trophy} alt="" className="sm:w-10 w-8" />
                        <span className="font-semibold sm:text-base text-sm">Achievements</span>
                        <span className="sm:text-sm text-xs w-[70%]">Earn badges for your progress</span>

                        <div className={`absolute w-full h-full right-0 bg-yellow-500 rounded-md ${achievementVisible ? "animate-reveal-right" : ""}`}></div>
                        <div className={`absolute w-full h-full left-0 bg-yellow-500 rounded-md ${achievementVisible ? "animate-reveal-left" : ""}`}></div>
                    </li>

                    {/* Calendar */}
                    <li ref={calendarRef} className="sm:w-52 sm:h-56 px-1 w-48 h-52 relative font-inter flex flex-col justify-center items-center bg-slate-800 text-white rounded-md gap-4 overflow-hidden">
                        <img src={Calendar} alt="" className="sm:w-10 w-8" />
                        <span className="font-semibold sm:text-base text-sm">Calendar</span>
                        <span className="sm:text-sm text-xs w-[70%]">Plan quests and stay on track</span>

                        <div className={`absolute w-full h-full right-0 bg-green-500 rounded-md ${calendarVisible ? "animate-reveal-right" : ""}`}></div>
                        <div className={`absolute w-full h-full left-0 bg-green-500 rounded-md ${calendarVisible ? "animate-reveal-left" : ""}`}></div>
                    </li>

                    {/* Analytics */}
                    <li ref={analyticsRef} className="sm:w-52 sm:h-56 px-1 w-48 h-52 relative font-inter flex flex-col justify-center items-center bg-slate-800 text-white rounded-md gap-4 overflow-hidden">
                        <img src={Analytics} alt="" className="sm:w-10 w-8" />
                        <span className="font-semibold sm:text-base text-sm">Analytics</span>
                        <span className="sm:text-sm text-xs">See how far you've come</span>

                        <div className={`absolute w-full h-full right-0 bg-purple-500 rounded-md ${analyticsVisible ? "animate-reveal-right" : ""}`}></div>
                        <div className={`absolute w-full h-full left-0 bg-purple-500 rounded-md ${analyticsVisible ? "animate-reveal-left" : ""}`}></div>
                    </li>

                </ul>
            </div>
        </section>
    );
}