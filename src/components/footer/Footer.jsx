import "./footer.css";

const Footer = () => {
    return (<>
        <footer className="w-full py-10 bg-slate-900">
            <div className="h-80 w-min/90 m-auto flex justify-center items-center flex-col">
                <p className="mb-2 font-proza text-slate-400">let&apos;s work <span className="text-blue-600">together</span></p>
                <a className="transition-colors ease-in font-jose text-4xl font-bold text-slate-500 hover:text-blue-700" href="">demomail@gmail.com</a>
            </div>
        </footer>
        <section className="py-5 w-full bg-slate-950">
            <div className="w-min/90 m-auto text-center flex justify-center items-center">
                <ul className="flex gap-5 font-proza text-sm justify-center">
                    <li><a className="text-slate-500 hover:text-blue-700" href="#">GitHub</a></li>
                    <li><a className="text-slate-500 hover:text-blue-700" href="#">Facebook</a></li>
                    <li><a className="text-slate-500 hover:text-blue-700" href="#">Instagram</a></li>
                </ul>
            </div>
        </section>
    </>);
};

export default Footer;