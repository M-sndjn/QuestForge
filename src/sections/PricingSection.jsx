export default function PricingSection() {

    return (
        <section  className="bg-white min-h-full h-full w-full font-inter flex flex-col items-center">
            <div className="w-full bg-white flex flex-col items-center justify-center gap-3">
                <span className="text-blue-500 font-semibold">Pricing</span>
                <span className="text-xl font-semibold">Choose Your Adventure</span>
                <span className="text-xs font-light w-96 text-center">Start for free or unlcok more features with premium plan.</span>
                <span className="text-xs font-light w-96 text-center">Your goal. Your rules</span>
            </div>
            <ul className=" w-[80%] flex justify-around ">
                <li className="border shadow w-72 h-96 my-2 pl-4 py-4 gap-7 justify- rounded-md flex flex-col ">
                    <div className="flex flex-col gap-1">
                        <div className="mt-4">Icon</div>
                        <span className="font-semibold text-xl">Free</span>
                        <span className="text-xs">Perfect for getting started and building good habits</span>
                        <div>
                            <span className="font-semibold text-2xl">$0</span>
                            <span>/month</span>
                        </div>
                    </div>
                    
                    


                    <ul className="mt-auto flex flex-col gap-2">
                        <li className="text-[11px]">Create up to 5 quests</li>
                        <li className="text-[11px]">Track your progress</li>
                        <li className="text-[11px]">Basic achievements</li>
                        <li className="text-[11px]">Community support</li>
                    </ul>
                    <div className="w-[90%] text-sm font-medium text-blue-800 mb-2 h-5 bg-blue-200 text-center rounded-md">
                        Get Started
                    </div>
                </li>
                <li className="border bg-blue-500/10 border-blue-500 shadow-blue-500 shadow w-72 h-96 my-2 pl-4 py-4 gap-7 justify- rounded-md flex flex-col ">
                    <div className="flex flex-col gap-1">
                        <div className="mt-4">Icon</div>
                        <span className="font-semibold text-xl">Pro</span>
                        <span className="text-xs w-[90%]">For serious progress and more ambitious goals</span>
                        <div>
                            <span className="font-semibold text-2xl">$4</span>
                            <span>/month</span>
                        </div>
                    </div>
                    
                    


                    <ul className="mt-auto flex flex-col gap-2">
                        <li className="text-[11px]">Create up to 20 quests</li>
                        <li className="text-[11px]">Track your progress</li>
                        <li className="text-[11px]">Streak Rewards</li>
                        <li className="text-[11px]">All achievements</li>
                        <li className="text-[11px]">Priority support</li>
                    </ul>
                    <div className="w-[90%] text-sm text-white mb-2 h-5 bg-blue-500 text-center rounded-md">
                        Get Started
                    </div>
                </li>
                                <li className="border shadow w-72 h-96 my-2 pl-4 py-4 gap-7 justify- rounded-md flex flex-col ">
                    <div className="flex flex-col gap-1">
                        <div className="mt-4">Icon</div>
                        <span className="font-semibold text-xl">Elite</span>
                        <span className="text-xs w-[80%]">For dedicated adventurers who want it all</span>
                        <div>
                            <span className="font-semibold text-2xl">$11</span>
                            <span>/month</span>
                        </div>
                    </div>
                    
                    


                    <ul className="mt-auto flex flex-col gap-2">
                        <li className="text-[11px]">Create unlimited quest</li>
                        <li className="text-[11px]">Everything on Pro</li>
                        <li className="text-[11px]">Custom Templates</li>
                        <li className="text-[11px]">Detailed Analytics</li>
                        <li className="text-[11px]">Early access to new features</li>
                    </ul>
                    <div className="w-[90%] text-sm font-medium text-blue-800 mb-2 h-5 bg-blue-200 text-center rounded-md">
                        Get Started
                    </div>
                </li>
            </ul>

        </section>
    );
}