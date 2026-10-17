import Boss from "../assets/Boss.png";
import Quest from "../assets/Quest.png";
import Fire from "../assets/Fire.png";
import Calendar from "../assets/Calendar.png";
import Analytics from "../assets/Analytics.png";
import Trophy from "../assets/Trophy.png";
import { useEffect, useRef, useState } from "react";
import FeatureCard from "../components/FeatureCard";

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
        const observerOptions = { threshold: 0.3 };

        const questObserver = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) { setQuestVisible(true); questObserver.disconnect(); }
        }, observerOptions);

        const bossObserver = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) { setBossVisible(true); bossObserver.disconnect(); }
        }, observerOptions);

        const streakObserver = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) { setStreakVisible(true); streakObserver.disconnect(); }
        }, observerOptions);

        const achievementObserver = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) { setAchievementVisible(true); achievementObserver.disconnect(); }
        }, observerOptions);

        const calendarObserver = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) { setCalendarVisible(true); calendarObserver.disconnect(); }
        }, observerOptions);

        const analyticsObserver = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) { setAnalyticsVisible(true); analyticsObserver.disconnect(); }
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
        <section className="bg-white min-h-screen w-full py-10">
            <div className="w-full h-full flex flex-col justify-center items-center">
                <div className="h-10 w-full my-5 sm:text-base text-sm bg-white flex items-center justify-center font-inter font-semibold gap-6">
                    Your goals
                    <span className="text-blue-500 relative">
                        Your quest
                        <span className="absolute -bottom-1 left-2 w-[80%] h-0.5 bg-blue-500 rounded-full"></span>
                    </span>
                    Your progress
                </div>

                <ul className="w-full max-w-4xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-6 justify-items-center text-center">

                    {/* Quest System */}
                    <FeatureCard
                        cardRef={questRef}
                        visible={questVisible}
                        icon={Quest}
                        title="Quest System"
                        desc="Turn tasks into rewarding quests"
                        className="hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/30"
                        tintClass="bg-blue-500/15"
                        coverClass="bg-blue-500"
                    >
                        <div className="h-1.5 w-full bg-slate-700 rounded-full">
                            <div className="h-full w-2/3 bg-blue-500 rounded-full"></div>
                        </div>
                    </FeatureCard>

                    {/* Boss Battles */}
                    <FeatureCard
                        cardRef={bossRef}
                        visible={bossVisible}
                        icon={Boss}
                        title="Boss Battles"
                        desc="Complete tasks and defeat monsters"
                        className="hover:border-red-500 hover:shadow-lg hover:shadow-red-500/30"
                        tintClass="bg-red-500/15"
                        coverClass="bg-red-500"
                    >
                        <div className="h-1.5 w-full bg-slate-700 rounded-full">
                            <div className="h-full w-1/3 bg-red-500 rounded-full"></div>
                        </div>
                    </FeatureCard>

                    {/* Daily Streaks */}
                    <FeatureCard
                        cardRef={streakRef}
                        visible={streakVisible}
                        icon={Fire}
                        title="Daily Streaks"
                        desc="Build consistency, one day at a time"
                        className="hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/30"
                        tintClass="bg-orange-500/15"
                        coverClass="bg-orange-500"
                    >
                        <div className="flex gap-1.5">
                            <span className="h-2 w-2 rounded-full bg-orange-500"></span>
                            <span className="h-2 w-2 rounded-full bg-orange-500"></span>
                            <span className="h-2 w-2 rounded-full bg-orange-500"></span>
                            <span className="h-2 w-2 rounded-full bg-orange-500"></span>
                            <span className="h-2 w-2 rounded-full bg-slate-600"></span>
                            <span className="h-2 w-2 rounded-full bg-slate-600"></span>
                            <span className="h-2 w-2 rounded-full bg-slate-600"></span>
                        </div>
                    </FeatureCard>

                    {/* Achievements */}
                    <FeatureCard
                        cardRef={achievementRef}
                        visible={achievementVisible}
                        icon={Trophy}
                        title="Achievements"
                        desc="Earn badges for your progress"
                        className="hover:border-yellow-500 hover:shadow-lg hover:shadow-yellow-500/30"
                        tintClass="bg-yellow-500/15"
                        coverClass="bg-yellow-500"
                    >
                        <div className="flex gap-2">
                            <span className="h-4 w-4 rounded-md bg-yellow-500"></span>
                            <span className="h-4 w-4 rounded-md bg-yellow-500"></span>
                            <span className="h-4 w-4 rounded-md bg-slate-600"></span>
                        </div>
                    </FeatureCard>

                    {/* Calendar */}
                    <FeatureCard
                        cardRef={calendarRef}
                        visible={calendarVisible}
                        icon={Calendar}
                        title="Calendar"
                        desc="Plan quests and stay on track"
                        className="hover:border-green-500 hover:shadow-lg hover:shadow-green-500/30"
                        tintClass="bg-green-500/15"
                        coverClass="bg-green-500"
                    >
                        <div className="grid grid-cols-7 gap-1">
                            <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                            <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                            <span className="h-1.5 w-1.5 rounded-full bg-slate-600"></span>
                            <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                            <span className="h-1.5 w-1.5 rounded-full bg-slate-600"></span>
                            <span className="h-1.5 w-1.5 rounded-full bg-slate-600"></span>
                            <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                            <span className="h-1.5 w-1.5 rounded-full bg-slate-600"></span>
                            <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                            <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                            <span className="h-1.5 w-1.5 rounded-full bg-slate-600"></span>
                            <span className="h-1.5 w-1.5 rounded-full bg-slate-600"></span>
                            <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                            <span className="h-1.5 w-1.5 rounded-full bg-slate-600"></span>
                        </div>
                    </FeatureCard>

                    {/* Analytics */}
                    <FeatureCard
                        cardRef={analyticsRef}
                        visible={analyticsVisible}
                        icon={Analytics}
                        title="Analytics"
                        desc="See how far you've come"
                        className="hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/30"
                        tintClass="bg-purple-500/15"
                        coverClass="bg-purple-500"
                    >
                        <div className="flex items-end gap-1.5 h-8">
                            <span className="w-2 h-3 rounded-sm bg-purple-500"></span>
                            <span className="w-2 h-5 rounded-sm bg-purple-500"></span>
                            <span className="w-2 h-4 rounded-sm bg-purple-500"></span>
                            <span className="w-2 h-7 rounded-sm bg-purple-500"></span>
                            <span className="w-2 h-8 rounded-sm bg-purple-500"></span>
                        </div>
                    </FeatureCard>

                </ul>
            </div>
        </section>
    );
}