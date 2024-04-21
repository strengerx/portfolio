import { useEffect, useRef } from "react";
import "./cursor.css"


const Cursor = () => {
    const cursorRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;

        const handleMouseMove = (e) => {

            if (e.srcElement.href) {
                document.querySelector(".custom-cursor").classList.add("cursor-size")
            } else {
                document.querySelector(".custom-cursor").classList.remove("cursor-size")
            }

            cursor.style.left = (e.pageX - window.scrollX) + 'px';
            cursor.style.top = (e.pageY - window.scrollY) + 'px';
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
    return (
        <div className="hidden custom-cursor border-2 border-slate-800 rounded-full md:flex justify-center items-center z-[9999999]" ref={cursorRef}>
            <div className="w-[6px] h-[6px] rounded-full bg-slate-800"></div>
        </div>
    )
}

export default Cursor