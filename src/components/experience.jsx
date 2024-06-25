import { useRecoilState } from "recoil"
import { flipperState } from "../recoil/atoms";
import { motion } from 'framer-motion';
import Wrapper from "./wrapper";


export default function Experience_Boxes() {
    const [flipper, setFlipper] = useRecoilState(flipperState);
    
    const variants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
      };

    return <>
        <div className='ml-20 pt-32 pb-10'>
            <div className="ml-8 flex justify-start items-center gap-x-4">
            <div onClick={() => {setFlipper(0)}} className='cursor-pointer font-light underline decoration-1 underline-offset-4 text-3xl text-[#987750]'>
        Experience 
            </div>
            <div onClick={() => {setFlipper(1)}} className='cursor-pointer font-light underline decoration-1 underline-offset-4 text-3xl text-[#987750]'>
        Experience1
            </div>
            <div onClick={() => {setFlipper(2)}} className='cursor-pointer font-light underline decoration-1 underline-offset-4 text-3xl text-[#987750]'>
        Experience2 
            </div>
            </div>
        </div>

        {
            (flipper == 0) ? (
                <motion.div
                    key="condition0"
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    transition={{ duration: 1.3, ease: "easeInOut" }}>
                    <Wrapper title={"ranss"}></Wrapper>
                    <Wrapper title={"ranss"}></Wrapper>
                    <Wrapper title={"ranss"}></Wrapper>
                </motion.div>
            ) : (flipper == 1) ? (
                <motion.div
                    key="condition1"
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    transition={{ duration: 1.3, ease: "easeInOut" }}>
                    <Wrapper title={"ranss"}></Wrapper>
                    <Wrapper title={"ranss"}></Wrapper>
                    <Wrapper title={"ranss"}></Wrapper>
                </motion.div>
            ) : (
                    <motion.div
                    key="condition2"
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    transition={{ duration: 1.3, ease: "easeInOut" }}>
                    <Wrapper title={"ranss"}></Wrapper>
                    <Wrapper title={"ranss"}></Wrapper>
                    <Wrapper title={"ranss"}></Wrapper>
                </motion.div>
            )
        }
    </>
}
