import { useContext } from "react"
import "./sidebar.css"
import ToggleContextProvider from "../../context/ToggleContextProvider"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"

const Sidebar = () => {

    const { toggle, toggleSideBar } = useContext(ToggleContextProvider)
    const toggleProp = { right: 0 }

    return (<>
        <aside style={toggle ? toggleProp : {}} className="md:hidden w-min/80 h-screen bg-slate-800 fixed top-0 -right-full z-[999] transition-all ease-out duration-50">
            <div className="p-5 flex justify-end items-center">
                <div onClick={toggleSideBar} className="md:hidden w-[40px] h-[40px] cursor-pointer rounded-full relative before:absolute before:w-[46px]  before:h-[3.5px] before:bg-slate-200 before:top-3 before:left-1/2 before:-translate-x-1/2 after:absolute after:w-[46px] after:h-[3.5px] after:bg-slate-200 after:bottom-3 after:left-1/2 after:-translate-x-1/2 before:rounded-lg after:rounded-lg">
                </div>
                <p onClick={toggleSideBar} className="pl-3 font-proza uppercase font-semibold text-slate-200">close</p>
            </div>
            <div className="flex flex-col w-min/80 m-auto h-scr/80 justify-between py-9 font-proza">
                <ul className="">
                    <li><a className="text-[14vw] text-slate-300 font-bold" href="#">home</a></li>
                    <li><a className="text-[14vw] text-slate-300 font-bold" href="#">about</a></li>
                    <li><a className="text-[14vw] text-slate-300 font-bold" href="#">works</a></li>
                    <li><a className="text-[14vw] text-slate-300 font-bold" href="#">contact</a></li>
                </ul>
                <ul className="flex justify-center items-center gap-8">
                    <li><a className="text-2xl text-slate-400" href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                    <li><a className="text-2xl text-slate-400" href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
                    <li><a className="text-2xl text-slate-400" href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
                </ul>
            </div>

        </aside>
    </>)
}

export default Sidebar