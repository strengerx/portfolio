import "./header.css"
import logo from "../../assets/bh.png"
import { useContext } from "react"
import ToggleContextProvider from "../../context/ToggleContextProvider"

const Header = () => {

    const { toggleSideBar } = useContext(ToggleContextProvider)

    return (<>
        <header id="header" className="w-full h-auto sticky top-0 z-50">
            <div className="w-min/90 m-auto flex justify-between items-center h-16">
                <a href=""><img className="w-[46px]" src={logo} alt="" /></a>
                <nav className="flex gap-5 items-center">
                    <div className="hidden md:block">
                        <ul className="flex gap-5 font-jose">
                            <li><a className="lowercase text-lg text-slate-500" href="#header">home</a></li>
                            <li><a className="lowercase text-lg text-slate-500" href="">about me</a></li>
                            <li><a className="lowercase text-lg text-slate-500" href="">my works</a></li>
                        </ul>
                    </div>
                    <a className="font-jose px-3 py-1 capitalize bg-blue-700 text-slate-100" href="">let&apos;s chat</a>
                    <div onClick={toggleSideBar} id="toggle-btn" className="md:hidden w-[40px] h-[40px] cursor-pointer rounded-full relative
                     before:absolute before:w-[46px]  before:h-[3.5px] before:bg-slate-500 before:top-3 before:left-1/2 before:-translate-x-1/2 after:absolute after:w-[46px] after:h-[3.5px] after:bg-slate-500 after:bottom-3 after:left-1/2 after:-translate-x-1/2 before:rounded-lg after:rounded-lg">
                    </div>
                </nav>
            </div>
        </header>
    </>)
}

export default Header