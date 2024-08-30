import React from 'react';
import Headings from '../../SharedComponent/Headings';
import ReactStars from "react-rating-stars-component";



const CustomerSaysPage = () => {

    const ratingChanged = (newRating) => {
        console.log(newRating);
        
    };
    return (
        <div>
            <Headings
                mainText={"what our customers say"}
                subText={"Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics "}
            ></Headings>
            <div className='grid grid-cols-1  lg:grid-cols-3 gap-6 mt-16 justify-items-center'>
                <div className="card bg-base-100 w-96 rounded-md p-5 ">

                    <div className="card-body">
                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            activeColor="#ffd700"
                        />
                        <p>Slate helps you see how many
                            more days you need to work to
                            reach your financial goal.</p>
                        <img className='w-12 h-12 rounded-full' src="https://s3-alpha-sig.figma.com/img/ec41/d91f/055ef9210d4caa05cab7b20681ce6acf?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bNPgySCplML-8orXZ3BVLC1KclVi0DyI1G~jcC1X8iDFiPBUng3Sr~mjg--QLrUP9iM1i5qqyMLhUGPQX3ZcTIJLyOsu5ETqdM1pTPbbK0bvRAhtnf7wT4garN6DjYV-C62FmHU~FL1UfRUKWsArSMLIoBAdqhIv1AAkwRs5Th84Hkh58mZXWwjZiBd4eiYgzW4MeaECB5xSqmn-pQrIiTnLqyMvCW6vW6CYXoOBdNJTP~Ir93hax-6O3-Q0xyrCjK1p5AQstU57k6Q13ueFKtOkSh16l~Zf0cMvklT4X-~Ss9dEEJhbSRg-czhgzWJZhj13FiExWvA0DxGPtBqoXg__" alt="" />
                    </div>
                </div>
                <div className="card bg-base-100 w-96 rounded-md p-5">

                    <div className="card-body">
                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            activeColor="#ffd700"
                            
                        />
                        <p>Slate helps you see how many
                            more days you need to work to
                            reach your financial goal.</p>
                        <img className='w-12 h-12 rounded-full' src="https://s3-alpha-sig.figma.com/img/09c6/6c75/8dd8fb10003a99942c4a1ff6301f7d9c?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b4p5q5l-mB0JRDO0C4VmpIfnXBsoAEZ1fGqx61PzV-W0cvpECOW7Hzv7BdRsGX02hCsEf5EjoUaKaw-ixWJOksjr7rTOWGZKmrgEGvUQpNGXzvk3lxYYtJsA9zRkeDxOs6rg07jRBh723YiKFfT94pg0yMvhC2ReNoH-OLBbvmi48o4Mkv5TzOYQamUbntDOqntqq0cgmlE5v51quHSJ81pqjuSvmLK6xR4JvD1eCgGQ6Z9qfSqoVjz3LpZqDVbdak8mQuJp9tb6sNHrn0PChtKwDqoUUbrq-mtrqizmQ95TdoIesVaAv3nszHoj~TdCqIE592J-mLvheUP6l4A2uA__" alt="" />
                    </div>
                </div>
                <div className="card bg-base-100 w-96 rounded-md p-5">

                    <div className="card-body">
                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            activeColor="#ffd700"
                        />
                        <p>Slate helps you see how many
                            more days you need to work to
                            reach your financial goal.</p>
                        <img className='w-12 h-12 rounded-full' src="https://s3-alpha-sig.figma.com/img/f626/0f00/c600956f9eab58bd3be1b4ed9de978dd?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nNfOA7z2xRx4rSzL88qig6CcvhIhlhPB0DciApiT73uv0odTyrK9uWIlIvCtI2WAklImuTGn2ivmMETjA5ZAsHI2fkpev9EqmwlOr-pgU-emwJNfykhtswrzxi~V96-GW5eHKwspdw5YzXFA6B~2VuFlrYR-ftwUekyTw-ISzMIi78zSuOV5ra1Bp9BXkMuyQ5tCua1-LTFlV8k-7M5GH08zCAmrbBwKBlt1JFXpsZ97uAtyD6MuwmPoFhrii7SdBoDUMa0MmEodhCpN0y5Clir1zWHzjC6Pk4BSAy9bB1D6grdoqtAG73bLXF14iCxpFPDv7nAQr3pXQfwG~TLqrA__" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerSaysPage;