export default function Footer() {
    return (
        <footer className="w-full bg-slate-900 text-white font-inter">

            <div className="w-[80%] mx-auto py-10 flex justify-between">

                <div className="flex flex-col gap-2">
                    <span className="font-semibold text-xl">Quest Forge</span>
                    <span className="text-xs text-slate-300">
                        Turn your goals into quests.
                    </span>
                    <span className="text-xs text-slate-300">
                        Level up your life.
                    </span>
                </div>

                <div className="flex gap-20">

                    <div className="flex flex-col gap-2">
                        <span className="font-semibold">Product</span>
                        <span className="text-xs text-slate-300">Features</span>
                        <span className="text-xs text-slate-300">How It Works</span>
                        <span className="text-xs text-slate-300">Pricing</span>
                    </div>

                    <div className="flex flex-col gap-2">
                        <span className="font-semibold">Resources</span>
                        <span className="text-xs text-slate-300">FAQ</span>
                        <span className="text-xs text-slate-300">Support</span>
                    </div>

                </div>

            </div>

            <div className="border-t border-slate-700 w-[80%] mx-auto py-4 flex justify-between">
                <span className="text-xs text-slate-400">
                    © 2026 Quest Forge
                </span>

                <div className="flex gap-4 text-xs text-slate-400">
                    <span>Privacy</span>
                    <span>Terms</span>
                </div>
            </div>

        </footer>
    );
}