import "./hero.css"

const Hero = () => {
    return (<>
        <section className="w-full">
            <div className="w-min/90 h-svh/64 py-10 gap-52 m-auto flex justify-end items-center flex-col">
                <div className="">
                    <h1 className="md:text-[10vw] text-[15vw] font-proza font-bold uppercase leading-none text-slate-500">developer</h1>
                </div>
                <div className="w-full flex justify-between flex-col-reverse md:flex-row items-end gap-16">
                    <ul className="flex gap-5 justify-start w-full md:w-auto font-proza">
                        <li><a className="text-slate-600" href="">Linkedin</a></li>
                        <li><a className="text-slate-600" href="">GitHub</a></li>
                    </ul>
                    <div className="font-proza text-right">
                        <p className="text-slate-500 capitalize text-lg bg-gradient-to-r from-blue-700 to-slate-500 bg-clip-text text-transparent leading-snug">Hi, I&apos;m some name, a web developer</p>
                        <p className="text-slate-500 capitalize text-lg bg-gradient-to-r from-blue-700 to-slate-500 bg-clip-text text-transparent leading-snug">Skilled in React and PHP/Laravel, focused on creating<br className="hidden md:block" /> user-friendly websites</p>
                    </div>
                </div>
            </div>
        </section>
    </>)
}

export default Hero