export default function FeatureCard({
    cardRef,
    visible,
    icon,
    title,
    desc,
    className = "",
    tintClass = "",
    coverClass = "",
    children,
}) {
    return (
        <li
            ref={cardRef}
            className={`relative overflow-hidden sm:w-52 sm:h-60 w-48 h-56 px-1
                flex flex-col justify-center items-center gap-3
                bg-slate-800 text-white font-inter rounded-md border border-slate-700
                transition duration-300 hover:-translate-y-1 ${className}`}
        >
            {/* Top accent line */}
            <div className={`absolute top-0 left-0 h-0.5 w-full ${coverClass}`}></div>

            {/* Icon in a tinted box */}
            <div className={`p-3 rounded-xl ${tintClass}`}>
                <img src={icon} alt="" className="sm:w-10 w-8" />
            </div>

            <span className="font-semibold sm:text-base text-sm">{title}</span>
            <span className="sm:text-sm text-xs">{desc}</span>

            {/* Mini preview (children) */}
            {children && <div className="w-3/4 flex justify-center">{children}</div>}

            {/* Reveal covers */}
            <div className={`absolute w-full h-full right-0 rounded-md ${coverClass} ${visible ? "animate-reveal-right" : ""}`}></div>
            <div className={`absolute w-full h-full left-0 rounded-md ${coverClass} ${visible ? "animate-reveal-left" : ""}`}></div>
        </li>
    );
}