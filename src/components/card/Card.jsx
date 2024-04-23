import "./card.css"
const Card = ({ id, name, link, image }) => {
    return (<>
        <div className="project-card h-[65vh] w-full flex flex-col justify-end items-end relative">

            <img className="w-full h-full object-cover absolute top-0 left-0" src={image} alt={name} />

            <div className="overlay absolute letf-0 top-0 h-full w-full flex justify-center items-center flex-col p-3 ">
                <div className="h-full w-full flex justify-center items-center text-slate-500 text-start md:text-[4vw] text-[15vw] font-bold">{id}</div>
                <a target="_blank" href={link} className="w-full text-lg py-2 capitalize text-slate-500 hover:text-blue-800">{name}</a>
            </div>
        </div>
    </>)
}

export default Card