const Banner = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col justify-center font-lato">
                <h1 className="text-4xl font-semibold">Providing Quality <span className="text-primary-cyan">Healthcare</span> For A
                    <br />
                    <span className="text-yellow-green">Brighter</span> And <span className="text-yellow-green">Healthy</span> Future</h1>
                <div className="">
                    <p className="py-6 text-start">
                        At our hospital, we are dedicated to providing exceptional medical care to our patients

                        and their families. Our experienced team of medical professionals, cutting-edge technology, and compassionate approach make us a leader in  the healthcare industry
                    </p>
                </div>
                <div className="flex flex-col md:flex-row md:mt-24">
                  <button className="text-lg px-10 py-2 font-medium bg-primary-cyan text-white rounded-lg">Appointments</button>
                </div>
            </div>
            <div className="flex justify-end">
                <img
                    src="/banner.png"
                    className="rounded-lg" />
            </div>
        </div>
    );
};

export default Banner;