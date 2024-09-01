import blob from "../../assets/blob.svg";
import playButton from '../../assets/playButton.svg'

const Banner = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 md:mt-24">
            <div className="grid grid-cols-1 font-lato mt-[500px] md:mt-20">
                <h1 className="text-3xl md:text-4xl font-semibold">
                    Providing Quality{" "}
                    <span className="text-primary-cyan">Healthcare</span> For A
                    <br />
                    <span className="text-yellow-green">Brighter</span> And
                    <span className="text-yellow-green"> Healthy </span>
                    Future
                </h1>
                <div className="">
                    <p className="text-start mt-4 md:mt-10 w-full md:w-3/4 text-secondary-gray">
                        At our hospital, we are dedicated to providing exceptional medical
                        care to our patients and their families. Our experienced team of
                        medical professionals, cutting-edge technology, and compassionate
                        approach make us a leader in the healthcare industry
                    </p>
                </div>
                <div className="flex flex-col md:flex-row mt-4 md:mt-24 gap-4 md:gap-12">
                    <button className="text-lg px-10 py-2 font-medium bg-primary-cyan text-white rounded-lg">
                        Appointments
                    </button>
                    <button className="flex justify-center items-center gap-6">
                        <img src={playButton} alt="" />
                        <p className="text-lg font-medium font-lato">Watch Video</p>
                    </button>
                </div>
            </div>
            <div className="">
                <div className="relative">
                    <img
                        src={blob}
                        alt=""
                        className="absolute -top-[830px] md:-top-1 md:right-0"
                    />
                    <img
                        src="/banner.png"
                        className="rounded-lg absolute -top-[944px] md:-top-20 md:right-11"
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;
