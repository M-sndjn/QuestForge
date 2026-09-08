export default function NavBar() {

    return (
        <section  className="bg-white h-20 w-full px-8 flex justify-between items-center border">
            <div className="bg-white h-12 flex justify-center gap-16 items-center font-kodemono font-semibold text-lg">
                QuestForge
                    <ul className="flex w-full justify-around items-center gap-10 font-inter font-normal text-sm">
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

            <div className="h-10 w-1/6 flex font-inter text-sm ">
                <button className="h-10 w-32">
                    Log in
                </button>
                <button className="bg-blue-600 h-10 w-44 rounded-md text-white">
                    Start For Free
                </button>
            </div>

        </section>
    );
}