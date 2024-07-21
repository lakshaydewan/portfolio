import React, { useState } from "react";
import {easeOut, motion} from "framer-motion";

export default function GETINTOUCH() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [isLoading, setIsLoading] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate form submission (e.g., API call)
        setTimeout(() => {
            console.log('Form data submitted:', formData);
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: ''
            }); // <-- This is where the input fields are cleared
            setIsLoading(false);
            setShowSuccessMessage(true)
            setTimeout(()=> {
                setShowSuccessMessage(false)
            }, 3000)
        }, 2000);
    };
        
    return (
        <>
            <div className='px-24 pt-32 mb-12'>
    <div className='ml-4 font-medium text-lg text-[#987750]'>
         CONTACT
      </div>
    </div>
        <div className='px-24 ml-4 mr-12 mt-12 pb-8 text-5xl font-light text-white'>
          <h1>Get In Touch</h1>
        </div>
        <div className='px-24 pb-10 mr-12'>
        <div className='mt-8 ml-4 text-left font-normal text-2xl text-[#888]'>
          <p>If you have any suggestion, project or even you want to say “hello”, please fill out the form below and I will reply to you shortly.</p>
        </div>
        </div> 
        {
            showSuccessMessage && (
                <motion.div 
        initial={{opacity:0}}
        animate={{opacity: 1}}
        transition={{duration: 2, ease: easeOut}}
        className=" ml-28 mb-3 bg-[lightblue] w-fit rounded-md p-2 px-3">
            Your Message has been recieved !!
        </motion.div>
            )
        }
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center mr-8">
                <div className="flex items-center justify-center mb-4">
                    <input
                        className="border border-[#2f2e2c] bg-[#1d1b19] text-[#888] px-14 py-4 mr-8 hover:border-[#888] focus:outline-none focus:border-[#987750] w-80 h-18 text-xl"
                        type="text"
                        placeholder="Name *"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        className="border border-[#2f2e2c] bg-[#1d1b19] text-[#888] px-14 py-4 mr-8 hover:border-[#888] focus:outline-none focus:border-[#987750] w-80 h-18 text-xl"
                        type="email"
                        placeholder="Email *"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="flex justify-center mb-4 ml-[24px]">
                    <input
                        className="border border-[#2f2e2c] bg-[#1d1b19] text-[#888] px-14 py-4 mr-14 hover:border-[#888] focus:outline-none focus:border-[#987750] w-[671px] h-18 text-xl"
                        type="tel"
                        placeholder="Phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="flex justify-center mb-4 ml-[24px]">
                    <textarea
                        className="border border-[#2f2e2c] bg-[#1d1b19] text-[#888] px-14 py-4 mr-14 hover:border-[#888] focus:outline-none focus:border-[#987750] w-[671px] h-18 text-xl"
                        rows="5"
                        placeholder="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>
            <div className="flex justify-center mr-8">
                <button
                    className="border-2 border-[#2f2e2c] text-md bg-[#1d1b19] hover:border-[#987750] hover:text-[#987750] text-gray-300 px-[274px] py-4 mr-[33px] mb-8 transition-all duration-700 ease-in-out"
                    type="submit"
                    disabled={isLoading}
                >
                    {isLoading ? 'SENDING .....' : 'SEND MESSAGE'}
                </button>
            </div>
        </form>
    <div className="flex flex-col gap-16 mt-16 pl-28"> 
        <div>
            <div className="text-[#888] text-sm mb-3">
            ADDRESS
            </div>
        <div className="text-2xl text-white">
            <div>
                Quilla Road, Bahadurgarh
            </div>
            <div>
                India
            </div>
        </div>    
    </div> 
    <div>
    <div className="text-[#888] text-sm mb-3">
        PHONE   
    </div>
    <div className="text-2xl text-white mb-14">
        (+91) 9138685683
    </div>
    <span className="text-white border-b-[0.5px] border-b-[#888] pb-1 cursor-pointer hover:border-b-white transition-all duration-700 ease-in-out">
        laxhay666@gmail.com
    </span>
</div>
</div>   
</>
    )
}
// const a = padding-left: 253px;
// padding-right: 301px;
// margin-right: 31px;