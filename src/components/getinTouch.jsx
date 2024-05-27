import INTRO from "./intro"

export default function GETINTOUCH() {
        
    return (
        <>
            <INTRO subheadin={"Get In Touch"} textArea={"If you have any suggestion, project or even you want to say “hello”, please fill out the form below and I will reply to you shortly."} title={"CONTACT"}>
            </INTRO>
            <div className="flex flex-col items-center">
    <div className="flex items-center justify-center mb-4">
        <input className="border border-[#2f2e2c] bg-[#1d1b19] text-[#888] px-14 py-4 mr-8 hover:border-[#888] focus:outline-none focus:border-[#987750] w-80 h-18" type="text" placeholder="Name *" />
        <input className="border border-[#2f2e2c] bg-[#1d1b19] text-[#888] px-14 py-4 mr-8 hover:border-[#888] focus:outline-none focus:border-[#987750] w-80 h-18" type="text" placeholder="Email *" />
    </div>
    <div className="flex justify-center mb-4 ml-[24px]">
        <input className="border border-[#2f2e2c] bg-[#1d1b19] text-[#888] px-14 py-4 mr-14 hover:border-[#888] focus:outline-none focus:border-[#987750] w-[671px] h-18" type="text" placeholder="Phone" />
    </div>
    <div className="flex justify-center mb-4 ml-[24px]">
        <input className="border border-[#2f2e2c] bg-[#1d1b19] text-[#888] px-14 py-4 mr-14 hover:border-[#888] focus:outline-none focus:border-[#987750] w-[671px] h-18" type="textarea" placeholder="Message" />
    </div>
</div>
<div className="flex justify-center">
    <button className="border-2 border-[#2f2e2c] bg-[#1d1b19] hover:border-[#987750] hover:text-[#987750] text-gray-300 font-medium pr-[301px] pl-[253px] py-4 mr-[31px] mb-8">SEND MESSAGE</button>
</div>
            
        </>
    )
}


// const a = padding-left: 253px;
// padding-right: 301px;
// margin-right: 31px;