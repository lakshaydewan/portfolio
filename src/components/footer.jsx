export default function Footer() {

    return <>
        <div className="flex mt-16 items-center justify-center">
            <div className="h-[1px] w-full bg-[#4a4947]">
            </div>
            <div className="flex items-center justify-center w-[60px] h-[60px] hover:border hover:border-[#987750] p-2 mx-4 group cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-full h-full text-[#4a4947] group-hover:text-[#987750] cursor-pointer transition-all duration-500 ease-in-out">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
            </svg>
        </div>
            
            <div className="h-[1px] w-48 bg-[#4a4947]">
                
            </div>
        </div>
        <div className="my-16 flex flex-col justify-center">
            <div className="text-[#888] ml-32">
            Copyright © 2024. All rights reserved.
            </div>
            <div className="text-[#888] ml-32">
            Developed by TrendyCoder
            </div>
        </div>
    </>
}