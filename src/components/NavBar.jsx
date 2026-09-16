import { useState } from "react";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleMenu() {
        setIsOpen(!isOpen);
    }

    return (
        <section className="bg-white min-h-20 w-full px-8 flex justify-between items-center border relative">

            <div className="bg-white h-12 flex justify-center gap-16 items-center font-kodemono font-semibold text-lg">
                QuestForge

                <ul className="hidden sm:flex w-full justify-around items-center gap-10 font-inter font-normal text-sm">
                    <li>
                        Features
                    </li>
                    <li>
                        Pricing
                    </li>
                    <li>
                        FAQ
                    </li>
                </ul>
            </div>

            <div className="hidden sm:flex h-10 w-1/6 font-inter text-sm">
                <button className="h-10 w-32">
                    Log in
                </button>

                <button className="bg-blue-600 h-10 w-44 rounded-md text-white">
                    Start For Free
                </button>
            </div>

            <button
                onClick={toggleMenu}
                className="sm:hidden text-2xl font-inter"
            >
                ☰
            </button>

            {isOpen && (
                <div className="absolute top-20 left-0 w-full bg-white border-t border-b sm:hidden z-50">
                    <ul className="flex flex-col items-center gap-6 py-6 font-inter text-sm">
                        <li>
                            Features
                        </li>
                        <li>
                            Pricing
                        </li>
                        <li>
                            FAQ
                        </li>

                        <li>
                            <button>
                                Log in
                            </button>
                        </li>

                        <li>
                            <button className="bg-blue-600 h-10 w-44 rounded-md text-white">
                                Start For Free
                            </button>
                        </li>
                    </ul>
                </div>
            )}

        </section>
    );
}