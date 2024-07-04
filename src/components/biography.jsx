import { useRecoilState } from "recoil";
import { widthState } from '../recoil/atoms';
import{ motion } from "framer-motion";


export default function BIOGRAPHY() {
    const [width, setWidth] = useRecoilState(widthState);
    const handleViewportEnter = ()=> {
      setWidth("w-8/12")
    }

    return (
        <>
            <div className='px-24 pt-32'>
    <div className='ml-4 font-medium text-lg text-[#987750]'>
           ABOUT ME
      </div>
    </div>

        <div className='px-24 ml-4 mr-12 mt-12 pb-8 text-5xl font-light text-white'>
          <h1>Biography</h1>
        </div>
        <motion.div
          onViewportEnter={handleViewportEnter}  
        >
          <div className='px-24 pb-10 mr-12'>
        <div className='mt-8 ml-4 text-left font-normal text-2xl text-[#888]'>
          <p>I'm a Freelancer Front-end Developer with over 12 years of experience. I'm from San Francisco. I code and create web elements for amazing people around the world. I like working with new people. New people are new experiences.</p>
          </div>
        </div>
        </motion.div>
        <div className='flex'>
            <table className='ml-28 mt-8'>
              <tbody className='text-left' >
              <tr> 
                  <th className='text-[#888] py-1.5 pr-32'>NAME</th>
                  <th className='text-white text-md font-light'>Lakshay Diwan</th>
                </tr>
                <tr> 
                  <th className='text-[#888] py-1.5'>BIRTHDAY</th>
                  <th className='text-white text-md font-light'>19th March 2005</th>
                </tr>
                <tr> 
                  <th className='text-[#888] py-1.5'>AGE</th>
                  <th className='text-white text-md font-light'>19</th>
                </tr>
                <tr> 
                  <th className='text-[#888] py-1.5'>ADDRESS</th>
                  <th className='text-white text-md font-light'>San Fransico</th>
                </tr>
                <tr> 
                  <th className='text-[#888] py-1.5'>PHONE</th>
                  <th className='text-white text-md font-light'>SOMMETHING</th>
                </tr>
                <tr> 
                  <th className='text-[#888] py-1.5'>EMAIL</th>
                  <th className='text-white text-md font-light'>SOMMETHING</th>
                </tr>
              </tbody>
            </table>
            <div className='w-80 h-44 border-2 mr-16 border-[#2f2e2c] bg-[#1d1b19] hover:border-[#987750] flex items-center justify-center mt-8 ml-28'>
            <a href="" className="flex-cols items-center justify-center hover:motion-safe:animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-8 ml-12 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75v6.75m0 0-3-3m3 3 3-3m-8.25 6a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
</svg>


            <div className="text-[#888]">
              DOWNLOAD CV
            </div>
            </a>
          </div>
        </div>
        </>
    )
}