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
                <div className="h-10 w-full my-5 bg-white flex items-center justify-center font-inter font-semibold gap-6">
                    Your goals
                    <span className="text-blue-500 relative">
                        Your quest
                        <span className="absolute -bottom-1 left-2 w-[80%] h-0.5 bg-blue-500 rounded-full"></span>
                    </span>
                    Your progress
                </div>

                <ul className="w-full h-full grid grid-cols-1 sm:grid-cols-3 grid-rows-2 justify-items-center items-center gap-4 text-center">

                    {/* Quest System */}
                    <li ref={questRef} className="w-52 h-56 relative font-inter flex flex-col justify-center items-center bg-slate-800 text-white rounded-md gap-4 overflow-hidden">
                        <img src={Quest} alt="" className="w-10" />
                        <span className="font-semibold">Quest System</span>
                        <span className="text-sm">Turn tasks into rewarding quests</span>

                        <div className={`absolute w-full h-full right-0 bg-blue-500 rounded-md ${questVisible ? "animate-reveal-right" : ""}`}></div>
                        <div className={`absolute w-full h-full left-0 bg-blue-500 rounded-md ${questVisible ? "animate-reveal-left" : ""}`}></div>
                    </li>

                    {/* Boss Battles */}
                    <li ref={bossRef} className="w-52 h-56 relative font-inter flex flex-col justify-center items-center bg-slate-800 text-white rounded-md gap-4 overflow-hidden">
                        <img src={Boss} alt="" className="w-10" />
                        <span className="font-semibold">Boss Battles</span>
                        <span className="text-sm">Complete tasks and defeat monsters</span>

                        <div className={`absolute w-full h-full right-0 bg-red-500 rounded-md ${bossVisible ? "animate-reveal-right" : ""}`}></div>
                        <div className={`absolute w-full h-full left-0 bg-red-500 rounded-md ${bossVisible ? "animate-reveal-left" : ""}`}></div>
                    </li>

                    {/* Daily Streaks */}
                    <li ref={streakRef} className="w-52 h-56 relative font-inter flex flex-col justify-center items-center bg-slate-800 text-white rounded-md gap-4 overflow-hidden">
                        <img src={Fire} alt="" className="w-10" />
                        <span className="font-semibold">Daily Streaks</span>
                        <span className="text-sm w-[80%]">Build consistency, one day at a time</span>

                        <div className={`absolute w-full h-full right-0 bg-orange-500 rounded-md ${streakVisible ? "animate-reveal-right" : ""}`}></div>
                        <div className={`absolute w-full h-full left-0 bg-orange-500 rounded-md ${streakVisible ? "animate-reveal-left" : ""}`}></div>
                    </li>

                    {/* Achievements */}
                    <li ref={achievementRef} className="w-52 h-56 relative font-inter flex flex-col justify-center items-center bg-slate-800 text-white rounded-md gap-4 overflow-hidden">
                        <img src={Trophy} alt="" className="w-10" />
                        <span className="font-semibold">Achievements</span>
                        <span className="text-sm w-[70%]">Earn badges for your progress</span>

                        <div className={`absolute w-full h-full right-0 bg-yellow-500 rounded-md ${achievementVisible ? "animate-reveal-right" : ""}`}></div>
                        <div className={`absolute w-full h-full left-0 bg-yellow-500 rounded-md ${achievementVisible ? "animate-reveal-left" : ""}`}></div>
                    </li>

                    {/* Calendar */}
                    <li ref={calendarRef} className="w-52 h-56 relative font-inter flex flex-col justify-center items-center bg-slate-800 text-white rounded-md gap-4 overflow-hidden">
                        <img src={Calendar} alt="" className="w-10" />
                        <span className="font-semibold">Calendar</span>
                        <span className="text-sm w-[70%]">Plan quests and stay on track</span>

                        <div className={`absolute w-full h-full right-0 bg-green-500 rounded-md ${calendarVisible ? "animate-reveal-right" : ""}`}></div>
                        <div className={`absolute w-full h-full left-0 bg-green-500 rounded-md ${calendarVisible ? "animate-reveal-left" : ""}`}></div>
                    </li>

                    {/* Analytics */}
                    <li ref={analyticsRef} className="w-52 h-56 relative font-inter flex flex-col justify-center items-center bg-slate-800 text-white rounded-md gap-4 overflow-hidden">
                        <img src={Analytics} alt="" className="w-10" />
                        <span className="font-semibold">Analytics</span>
                        <span className="text-sm">See how far you've come</span>

                        <div className={`absolute w-full h-full right-0 bg-purple-500 rounded-md ${analyticsVisible ? "animate-reveal-right" : ""}`}></div>
                        <div className={`absolute w-full h-full left-0 bg-purple-500 rounded-md ${analyticsVisible ? "animate-reveal-left" : ""}`}></div>
                    </li>

                </ul>
            </div>
        </section>
    );
}