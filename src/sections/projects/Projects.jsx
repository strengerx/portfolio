import "./projects.css"

const Projects = () => {
    return (<>
        <section className="flex py-8">
            <div className="w-min/90 mx-auto font-proza">
                <h2 className=" uppercase font-bold leading-none text-slate-500 text-start md:text-[5vw] text-[6.5vw] mb-5">Projects</h2>
                <div className="grid grid-cols-4">
                    <div className="h-[60vh] w-full flex flex-col justify-end items-end p-3">
                        <div className="h-full w-full flex justify-center items-center  uppercase font-bold leading-none text-slate-500 text-start md:text-[3vw] text-[5vw]">01</div>
                        <a href="#" className="w-full text-lg py-2 capitalize text-slate-500 ">projects name gose here</a>
                    </div>

                </div>
            </div>
        </section>
    </>)
}

export default Projects