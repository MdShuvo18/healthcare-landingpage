import React from 'react';

const ServicePageFindDoctor = () => {
    return (
        <div className="lg:p-14 rounded-lg" style={{background:'rgba(250, 250, 250, 1)'}}>
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

export default ServicePageFindDoctor;