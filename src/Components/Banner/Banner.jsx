import { FaRegPlayCircle } from "react-icons/fa";


const Banner = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src="/banner.png"
                    className="max-w-sm rounded-lg w-[627px] h-[326px]" />
                <div>
                    <h1 className="text-4xl font-semibold">Providing Quality <span className="text-blue-300">Healthcare</span> For A
                        <br />
                        <span className="text-emerald-500">Brighter</span> And <span className="text-emerald-500">Healthy</span> Future</h1>
                    <div className="w-[685px]">
                        <p className="py-6">
                            At our hospital, we are dedicated to providing exceptional medical care to our patients
                            <br />
                            and their families. Our experienced team of medical professionals, cutting-edge technology, and compassionate approach make us a leader in the healthcare industry
                        </p>
                    </div>
                    <div className="flex gap-5">
                        <a href="#_" className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-emerald-300 rounded-full shadow-md group">
                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-emerald-300 group-hover:translate-x-0 ease">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="absolute flex items-center justify-center w-full h-full text-blue-300 font-extrabold transition-all duration-300 transform group-hover:translate-x-full ease">Appiontments</span>
                            <span className="relative invisible">Appiontments</span>
                        </a>
                        <div className="flex items-center gap-3">
                            <FaRegPlayCircle className="text-xl text-emerald-300" />
                            <a>Watch Video</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;