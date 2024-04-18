import "./header.css"
import logo from "../../assets/bh.png"

const Header = () => {
    return (<>
        <header id="header" className="w-full h-auto sticky top-0 z-50">
            <div className="w-min/90 m-auto flex justify-between items-center h-16">
                <a href=""><img className="w-[46px]" src={logo} alt="" /></a>
                <nav className="flex gap-5 items-center">
                    <div className="hidden md:block">
                        <ul className="flex gap-5 font-proza">
                            <li><a className=" lowercase text-slate-500" href="#header">home</a></li>
                            <li><a className=" lowercase text-slate-500" href="">about me</a></li>
                            <li><a className=" lowercase text-slate-500" href="">my works</a></li>
                        </ul>
                    </div>
                    <a className="font-jose px-3 py-1 capitalize bg-blue-700 text-slate-100" href="">let&apos;s chat</a>
                </nav>
            </div>
        </header>
    </>)
}

export default Header