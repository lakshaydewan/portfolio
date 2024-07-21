import { useRecoilState } from "recoil"
import { flipperState } from "../recoil/atoms";
import { motion } from 'framer-motion';
import Wrapper from "./wrapper";
import { delay } from "lodash";


export default function Experience_Boxes() {
    const [flipper, setFlipper] = useRecoilState(flipperState);
    
    const variants = {
        hidden: { opacity: 0, rotateY:30, rotate: -4},
        visible: { opacity: 1,rotateY:0, rotate: 0}
      };

    
    return <>
        <div className='ml-20 pt-32 pb-10'>
            <div className="ml-8 flex justify-start items-center gap-x-4 font-extrabold">
            <div tabIndex={0} onClick={() => {setFlipper(0)}} className={`cursor-pointer font-light ${flipper === 0 && "underline text-[#987750]"} decoration-1 underline-offset-4 text-3xl text-[#888888] pb-0 font-light`}>
        Experience 
            </div>
            <span className="w-10 h-[2px] bg-[#464544] mx-2">
            </span>
            <div tabIndex={0} onClick={() => {setFlipper(1)}} className={`cursor-pointer font-light ${flipper === 1 && "underline text-[#987750]"} decoration-1 underline-offset-4 text-3xl text-[#888888] pb-0 font-light`}>
        Education
            </div>
            <span className="w-10 h-[2px] bg-[#464544] mx-2">
            </span>
            <div tabIndex={0} onClick={() => {setFlipper(2)}} className={`cursor-pointer font-light ${flipper === 2 && "underline text-[#987750]"} decoration-1 underline-offset-4 text-3xl text-[#888888] pb-0 font-light`}>
        Skills 
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
                    delay={1}
                    transition={{ duration: 1.3,}}>
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
                    transition={{ duration: 1.3}}>
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
                    transition={{ duration: 1.3}}>
                    <Wrapper title={"ranss"}></Wrapper>
                    <Wrapper title={"ranss"}></Wrapper>
                    <Wrapper title={"ranss"}></Wrapper>
                </motion.div>
            )
        }
    </>
}
