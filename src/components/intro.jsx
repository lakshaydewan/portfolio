import { useRecoilState } from 'recoil';
import { widthState } from '../recoil/atoms';
import{ motion } from "framer-motion";

export default function INTRO({title, subheadin, textArea}) {  
    const [width, setWidth] = useRecoilState(widthState);

    return (
    <>
        <div className='px-24 pt-32 mb-96'>
    <motion.div 
    onViewportEnter={() => {
      console.log("entered !!111")
      setWidth("w-7/12");
    }}
    className='ml-4 font-medium text-lg text-[#987750]'>
            {title}
      </motion.div>
    </div>
        <div className='px-24 ml-4 mr-12 mt-12 pb-8 text-5xl font-light text-white'>
          <h1>{subheadin}</h1>
        </div>
        <div className='px-24 pb-10 mr-12'>
        <div className='mt-8 ml-4 text-left font-normal text-2xl text-[#888]'>
          <p>{textArea}</p>
        </div>
        </div>   
    </>
    )
}