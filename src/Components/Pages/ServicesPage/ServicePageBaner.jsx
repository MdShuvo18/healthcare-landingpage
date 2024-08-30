

const ServicePageBaner = () => {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: "url(https://s3-alpha-sig.figma.com/img/29a1/83e9/4cfaa1c70f9923b9dff53e831733a031?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=beZsp3A6lZrICrkdFZ8Wqo6qKfz5ryyAdWPRnFhlAIucjY9B8nsszDrg-uZpBIzzeI3S0HqkteFDwYT~lgLzBo2efBo~Kei0a7~iH63tpl5vCjrNeWXwbyuP5mp3papZe4dFHmayIHSFqI-ECmqYKp3h~FIPn7Gc-aX6S919NnQ69Fi~fu4BaQ7Ez7nAu1AFMemtuGaJQ~GdT5fz8nBnrBIAHIfNdePM2-iYbqTt240xSYHLv42tgVzuxcXfnAKr~KTB5wTGbuAaafGI4SyVTfEUqd2n-DBsDQdL-ASXhbUCxiDfMxpFrydkAnihtaHzbBCt6V7EkWmhwvWaU0Z6HA__)",
            }}>
            <div className=""></div>
            <div className="">
                <div className="flex flex-col lg:flex-row justify-between items-center">
                    <div className='w-1/2'>
                        <h1 className="lg:mb-5 text-white text-4xl lg:text-6xl font-bold" style={{ lineHeight: '1.2', color: 'rgba(255, 255, 255, 1)' }}>Meet the Best <br />Hospital</h1>
                        <p className="mb-5 text-white">
                            We know how large objects will act,
                            but things on a small scale.
                        </p>
                        <button className="btn border-none text-white"style={{ background: 'rgba(0, 126, 133, 1)' }}>Get Started</button>
                    </div>
                    <div className='w-[330px] lg:h-[610px] bg-white rounded-md p-10'>
                        <h1 className='font-extrabold section-text-color text-2xl'>Book Appiontments</h1>
                        <form className="">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text textbol">Name*</span>
                                </label>
                                <input type="text" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email address*</span>
                                </label>
                                <input type="password" placeholder="example@gmail.com" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Department*</span>
                                </label>
                                <select className="select select-bordered" required>
                                    <option value="">Select Department</option>
                                    <option value="marketing">Marketing</option>
                                    <option value="sales">Sales</option>
                                    <option value="engineering">Engineering</option>

                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Times*</span>
                                </label>
                                <select className="select select-bordered" required>
                                    <option value="">Select time</option>
                                    <option value="marketing">4.00pm</option>
                                    <option value="sales">5.00pm</option>
                                    <option value="engineering">6.00pm</option>

                                </select>
                            </div>

                            <div className="form-control mt-6">
                            <button className="btn text-white" style={{ background: 'rgba(0, 126, 133, 1)' }}>Book Appiontment</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicePageBaner;