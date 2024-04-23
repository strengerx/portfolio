import Card from "../../components/card/Card"
import "./projects.css"
import projectLists from "../../utils/projectList"

const Projects = () => {

    return (<>
        <section className="flex py-14 bg-slate-300">
            <div className="w-min/90 mx-auto font-proza">
                <h2 className=" uppercase font-bold leading-none text-slate-500 text-start md:text-[5vw] text-[6.5vw] mb-5">Projects</h2>
                <div className="grid md:grid-cols-4 gap-5 md:gap-5">
                    {projectLists && projectLists.length > 0 ?
                        projectLists.map((project, id) => (
                            <Card key={id} {...project} />
                        ))
                        : null}
                </div>
            </div>
        </section>
    </>)
}

export default Projects