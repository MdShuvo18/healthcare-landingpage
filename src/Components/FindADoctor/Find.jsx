import switchButton from '../../assets/switchButton.svg'

const Find = () => {
    return (
        <div className="lg:p-14  bg-[#FAFAFA] rounded-lg mt-8 md:mt-44 p-6">
            <h1 className="text-xl md:text-4xl text-center md:text-left font-bold mb-4">Find A Doctor</h1>
            <form className="">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <input type="text" placeholder="Name" className="input input-bordered w-full  lg:w-2/6" required />
                    <input type="text" placeholder="Speciality" className="input input-bordered w-full lg:w-2/6" required />
                    <div className='flex items-center gap-6'>
                        <p className='text-lg'>Available</p>
                        <img src={switchButton} alt="" />
                    </div>
                    <button className="btn btn-outline w-48 text-xl hover:bg-emerald-300">Search</button>
                </div>
            </form>
        </div>
    );
};

export default Find;