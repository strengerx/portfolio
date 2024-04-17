import "./header.css"

const Header = () => {
    return (<>
        <header className="w-full h-auto sticky top-0">
            <div className="w-min/90 m-auto flex justify-between items-center h-16">
                <a href="">bh</a>
                <ul className="flex gap-4">
                    <li><a href="">home</a></li>
                    <li><a href="">skills</a></li>
                    <li><a href="">projects</a></li>
                    <li><a href="">contact</a></li>
                </ul>
            </div>
        </header>
    </>)
}

export default Header