

const Find = () => {
    return (
        <div className="lg:p-24 lg:ml-10 bg-slate-300 rounded-lg ">
            <h1 className="text-2xl font-bold mb-4">Find A Doctor</h1>
            <form className="">
                <div className="lg:space-x-12">
                    <input type="text" placeholder="Name" className="input input-bordered w-full  lg:w-2/6" required />
                    <input type="text" placeholder="Speciality" className="input input-bordered w-full lg:w-2/6" required />
                    <button className="btn btn-outline w-48 text-xl hover:bg-emerald-300">Search</button>
                </div>
            </form>
        </div>
    );
};

export default Find;