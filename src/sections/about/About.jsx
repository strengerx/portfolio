import "./about.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

const About = () => {
    return (<>
        <section className="pt-14 pb-10 bg-slate-300">
            <div className="w-min/90 m-auto">
                <h2 className="font-proza uppercase font-bold leading-none text-slate-500 text-end md:text-[5vw] text-[6.5vw]">get to know me</h2>
                <p className="mt-5 bg-gradient-to-r from-blue-700 to-slate-500 bg-clip-text text-transparent capitalize md:text-[4.5vw] text-[5.5vw] font-light leading-none text-end mb-5">A passionate graphic designer with a keen eye for creativity and a love for bringing ideas to life through visual experiences.</p>
                <a className="text-slate-500 font-jose uppercase about-link" href="#">know more
                    <span className="pl-2"><FontAwesomeIcon icon={faArrowRight} /></span></a>
            </div>
        </section>
    </>)
}

export default About