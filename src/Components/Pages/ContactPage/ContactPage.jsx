import React from 'react';
import contactBanner from '../../../assets/images/bannerImage/contactbanner.jpeg'
import NewsletterSection from '../../NewsletterSection';

const ContactPage = () => {
    return (
        <div>
            <div>
                <img src={contactBanner} alt="" className='w-full md:h-[722px]' />
            </div>
            <div className='text-center mt-28 space-y-7'>
                <h4 className='text-2xl font-bold'>Get in Touch</h4>
                <h1 className='text-6xl font-bold'>Contact Us</h1>
                <p className='text-2xl text-secondary-gray'>Let's Talk About Your Health – Contact Our Experts Today!</p>
            </div>
            <div className='flex justify-center'>
                <form action="">
                    <div className='mt-16 flex flex-col gap-8'>
                        <div className='flex flex-col md:flex-row gap-8'>
                            <div className='flex flex-col'>
                                <label htmlFor="fname">First Name</label>
                                <input type="text" className='w-96 h-14 px-4 rounded-xl border-2 border-primary-cyan placeholder-black' placeholder='Enter your first name'/>
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="lname">Last Name</label>
                                <input type="text" className='w-96 h-14 px-4 rounded-xl border-2 border-primary-cyan placeholder-black' placeholder='Enter your last name'/>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row gap-8'>
                            <div className='flex flex-col'>
                                <label htmlFor="email">Email</label>
                                <input type="email" className='w-96 h-14 px-4 rounded-xl border-2 border-primary-cyan placeholder-black' placeholder='Enter your email'/>
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="lname">Phone Number</label>
                                <input type="number" className='w-96 h-14 px-4 rounded-xl border-2 border-primary-cyan placeholder-black' placeholder='Enter your phone number'/>
                            </div>
                        </div>
                        <div className='w-full grid grid-cols-1 '>
                            <label className='' htmlFor="topic">Select one...</label>
                            <select name="Select one" id="" className='w-full h-14 px-4 bg-white rounded-xl border-2 border-primary-cyan'>
                                <option value="">Dental treatments</option>
                                <option value="">Bones treatments</option>
                                <option value="">Diagnosis</option>
                                <option value="">Cardiology</option>
                                <option value="">Surgery</option>
                                <option value="">Eye care</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="message">Message</label>
                            <textarea name="" id="" className='w-full h-40 px-4 py-4 bg-white rounded-xl border-2 border-primary-cyan' placeholder='Type your message...'></textarea>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" />
                            <p className='text-lg'>I accept the terms</p>
                        </div>
                        <div className='flex justify-center'>
                            <input type="submit" value="Submit" className='bg-primary-cyan text-white px-32 py-4 rounded-lg '/>
                        </div>
                    </div>
                </form>
            </div>
            <div className='mt-8 md:mt-20'>
                <NewsletterSection></NewsletterSection>
            </div>
        </div>
    );
};

export default ContactPage;