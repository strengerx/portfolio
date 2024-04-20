import { useContext } from "react"
import "./sidebar.css"
import ToggleContextProvider from "../../context/ToggleContextProvider"

const Sidebar = () => {
    const { toggle,toggleSideBar } = useContext(ToggleContextProvider)
    const toggleProp = { right: 0 }
    return (<>
        <aside style={toggle ? toggleProp : {}} className="md:hidden w-min/80 h-screen bg-slate-900 fixed top-0 -right-full z-[999] transition-all ease-out duration-50">
            <div className="p-5 flex justify-end items-center">
            <div onClick={toggleSideBar} className="md:hidden w-[40px] h-[40px] cursor-pointer rounded-full relative
                     before:absolute before:w-[46px]  before:h-[3.5px] before:bg-slate-200 before:top-3 before:left-1/2 before:-translate-x-1/2 after:absolute after:w-[46px] after:h-[3.5px] after:bg-slate-200 after:bottom-3 after:left-1/2 after:-translate-x-1/2 before:rounded-lg after:rounded-lg">
                    </div>
                    <p onClick={toggleSideBar} className="pl-3 font-proza uppercase font-semibold text-slate-200">close</p>
            </div>
        </aside>
    </>)
}

export default Sidebar