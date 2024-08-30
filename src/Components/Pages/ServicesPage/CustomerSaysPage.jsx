import React from 'react';
import Headings from '../../SharedComponent/Headings';

const CustomerSaysPage = () => {
    return (
        <div>
            <Headings
                mainText={"what our customers say"}
                subText={"Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics "}
            ></Headings>
            <div>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Card title!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerSaysPage;