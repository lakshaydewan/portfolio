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
            <a href="" className="group flex-cols items-center justify-center">
            <div className="w-fit ml-9">
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 449.306 449.306" xmlSpace="preserve" className="group-hover:animate-bounce w-14 h-14 mb-[-50px] text-white fill-current">
                <path d="M217.339,252.865c3.706,4.04,9.986,4.31,14.025,0.603c0.21-0.192,0.411-0.394,0.603-0.603l71.053-71.576 c3.462-4.617,2.527-11.166-2.09-14.629c-3.715-2.786-8.824-2.786-12.539,0l-53.29,53.29V21.42 c0-5.771-4.678-10.449-10.449-10.449s-10.449,4.678-10.449,10.449v198.531l-53.29-53.29c-4.617-3.462-11.166-2.527-14.629,2.09 c-2.786,3.715-2.786,8.824,0,12.539L217.339,252.865z"></path>
              </svg> 
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 449.306 449.306" xmlSpace="preserve" className="w-14 h-14 text-white fill-current">
              <path d="M447.739,251.298l-59.037-126.433c-1.731-3.54-5.484-5.625-9.404-5.224h-50.155c-5.771,0-10.449,4.678-10.449,10.449 c0,5.771,4.678,10.449,10.449,10.449h43.363l48.588,104.49h-59.559c-27.004-0.133-51.563,15.625-62.694,40.229 c-8.062,16.923-25.141,27.698-43.886,27.69h-60.604c-18.745,0.008-35.823-10.767-43.886-27.69 c-11.131-24.604-35.69-40.362-62.694-40.229H29.257l57.469-104.49h33.437c5.771,0,10.449-4.678,10.449-10.449 c0-5.771-4.678-10.449-10.449-10.449H80.457c-3.776-0.358-7.425,1.467-9.404,4.702L2.09,250.776 c-1.209,1.072-1.958,2.569-2.09,4.18v130.09c0.832,29.282,24.524,52.744,53.812,53.29h341.682 c29.289-0.546,52.98-24.008,53.812-53.29v-130.09C449.107,253.622,448.567,252.362,447.739,251.298z M428.408,385.045 c-0.812,17.743-15.16,31.864-32.914,32.392H53.812c-17.754-0.528-32.102-14.648-32.914-32.392V265.927h66.873 c18.745-0.008,35.823,10.767,43.886,27.69c11.131,24.604,35.69,40.362,62.694,40.229h60.604 c27.004,0.133,51.563-15.625,62.694-40.229c8.062-16.923,25.141-27.698,43.886-27.69h66.873V385.045z"></path>
          </svg>
      </div>
            <div className="text-[#888] group-hover:text-[#987750] transition-all duration-700 ease-in-out">
              DOWNLOAD CV
            </div>
            </a>
          </div>
        </div>
        </>
    )
}