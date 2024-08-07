import { useRecoilState } from 'recoil';
import { menuState } from "../recoil/atoms";
import { motion } from 'framer-motion';

export default function NAVBAR() {
    
    const [isMenuOpen, setisMenuopen] = useRecoilState(menuState);
    const variants = {
        hidden: { opacity: 0, x: 40},
        visible: { opacity: 1.5, x: 0}
      };
    const variants_bottom = {
        hidden: {opacity: 0, y: 40},
        visible: {opacity: 1, y: 0}
    }

    return (<>
        <div className={`flex justify-center items-center fixed top-0 right-0 w-1/3 h-full bg-[#181715] shadow-lg transition-transform duration-1000 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
            <div className="fixed top-0 right-0 mt-10 mr-10 hover:border-[#987750] flex items-center justify-center w-[50px] h-[50px] p-0" onClick={() => {
                setisMenuopen(!isMenuOpen);
            }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-16 h-12 text-[#888] border-[#987750] hover:size-8 hover:stroke-1 hover:border hover:border-[#987750] hover:text-[#987750] transition-all duration-500 ease-in-out">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
        </div>
        <div className='bg-[#181715] mr-32'>
                <div className='text-[#888888] font-extrabold mb-12'>
                    MENU
                </div>
                {
                    (isMenuOpen) ? (<>
                               <div className='mb-6 flex flex-col gap-3'>
                               <motion.div className='text-[#dddddd] text-3xl font-normal'
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        transition={{ duration: 0.8, delay:1 }}> 
                        Home
                    </motion.div>
                    <motion.div className='text-[#dddddd] text-3xl font-normal'
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        transition={{ duration: 0.8, delay:1.2 }}> 
                        About
                    </motion.div>
                    <motion.div className='text-[#dddddd] text-3xl font-normal'
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        transition={{ duration: 0.8, delay:1.4 }}> 
                        Portfolio
                    </motion.div>
                    <motion.div className='text-[#dddddd] text-3xl font-normal'
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        transition={{ duration: 0.8, delay:1.6 }}> 
                        Services
                    </motion.div>
                    <motion.div className='text-[#dddddd] text-3xl font-normal'
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        transition={{ duration: 0.8, delay:1.8 }}> 
                        News and Tips
                    </motion.div>
                    <motion.div className='mb-32 text-[#dddddd] text-3xl font-normal'
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        transition={{ duration: 0.8, delay:2 }}> 
                        Contact
                    </motion.div>
                    <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={variants_bottom}
                    transition={{ duration: 0.8, delay:2.4 }}
                    className='mb-2'
                    >
                        <div className='flex items-center justify-start gap-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='size-8 text-[#888] bg-[#1d1b19]'>
                                <path fill="currentColor" d="M449.446,0c34.525,0 62.554,28.03 62.554,62.554v386.892c0,34.524 -28.03,62.554 -62.554,62.554H62.554C28.03,512 0,483.97 0,449.446V62.554C0,28.03 28.029,0 62.554,0h386.892ZM160.461,423.278V197.561h-75.04v225.717h75.04Zm270.539,0V293.839c0,-69.333 -37.018,-101.586 -86.381,-101.586c-39.804,0 -57.634,21.891 -67.617,37.266v-31.958h-75.021c0.995,21.181 0,225.717 0,225.717h75.02v-126.056c0,-6.748 0.486,-13.492 2.474,-18.315c5.414,-13.475 17.767,-27.434 38.494,-27.434c27.135,0 38.007,20.707 38.007,51.037v120.768h75.024Zm-307.552,-334.556c-25.674,0 -42.448,16.879 -42.448,39.002c0,21.658 16.264,39.002 41.455,39.002h0.484c26.165,0 42.452,-17.344 42.452,-39.002c-0.485,-22.092 -16.241,-38.954 -41.943,-39.002Z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='size-8 text-[#888] bg-[#1d1b19]'>
                                <path fill="currentColor" d="M449.446,0c34.525,0 62.554,28.03 62.554,62.554v386.892c0,34.524 -28.03,62.554 -62.554,62.554H62.554C28.03,512 0,483.97 0,449.446V62.554C0,28.03 28.029,0 62.554,0h386.892ZM256,81c-47.527,0 -53.487,0.201 -72.152,1.053c-18.627,0.85 -31.348,3.808 -42.48,8.135c-11.508,4.472 -21.267,10.456 -30.996,20.184c-9.729,9.729 -15.713,19.489 -20.185,30.996c-4.326,11.132 -7.284,23.853 -8.135,42.48c-0.851,18.665 -1.052,24.625 -1.052,72.152c0,47.527 0.201,53.487 1.052,72.152c0.851,18.627 3.809,31.348 8.135,42.48c4.472,11.507 10.456,21.267 20.185,30.996c9.729,9.729 19.488,15.713 30.996,20.185c11.132,4.326 23.853,7.284 42.48,8.134c18.665,0.852 24.625,1.053 72.152,1.053c47.527,0 53.487,-0.201 72.152,-1.053c18.627,-0.85 31.348,-3.808 42.48,-8.134c11.507,-4.472 21.267,-10.456 30.996,-20.185c9.729,-9.729 15.713,-19.489 20.185,-30.996c4.326,-11.132 7.284,-23.853 8.134,-42.48c0.852,-18.665 1.053,-24.625 1.053,-72.152c0,-47.527 -0.201,-53.487 -1.053,-72.152c-0.85,-18.627 -3.808,-31.348 -8.134,-42.48c-4.472,-11.507 -10.456,-21.267 -20.185,-30.996c-9.729,-9.728 -19.489,-15.712 -30.996,-20.184c-11.132,-4.327 -23.853,-7.285 -42.48,-8.135c-18.665,-0.852 -24.625,-1.053 -72.152,-1.053ZM256,112.532c46.727,0 52.262,0.178 70.715,1.02c17.062,0.779 26.328,3.63 32.495,6.025c8.169,3.175 13.998,6.968 20.122,13.091c6.124,6.124 9.916,11.954 13.091,20.122c2.396,6.167 5.247,15.433 6.025,32.495c0.842,18.453 1.021,23.988 1.021,70.715c0,46.727 -0.179,52.262 -1.021,70.715c-0.778,17.062 -3.629,26.328 -6.025,32.495c-3.175,8.169 -6.967,13.998 -13.091,20.122c-6.124,6.124 -11.953,9.916 -20.122,13.091c-6.167,2.396 -15.433,5.247 -32.495,6.025c-18.45,0.842 -23.985,1.021 -70.715,1.021c-46.73,0 -52.264,-0.179 -70.715,-1.021c-17.062,-0.778 -26.328,-3.629 -32.495,-6.025c-8.169,-3.175 -13.998,-6.967 -20.122,-13.091c-6.124,-6.124 -9.917,-11.953 -13.091,-20.122c-2.396,-6.167 -5.247,-15.433 -6.026,-32.495c-0.842,-18.453 -1.02,-23.988 -1.02,-70.715c0,-46.727 0.178,-52.262 1.02,-70.715c0.779,-17.062 3.63,-26.328 6.026,-32.495c3.174,-8.168 6.967,-13.998 13.091,-20.122c6.124,-6.123 11.953,-9.916 20.122,-13.091c6.167,-2.395 15.433,-5.246 32.495,-6.025c18.453,-0.842 23.988,-1.02 70.715,-1.02ZM256,166.135c-49.631,0 -89.865,40.234 -89.865,89.865c0,49.631 40.234,89.865 89.865,89.865c49.631,0 89.865,-40.234 89.865,-89.865c0,-49.631 -40.234,-89.865 -89.865,-89.865Zm0,148.198c-32.217,0 -58.333,-26.116 -58.333,-58.333c0,-32.217 26.116,-58.333 58.333,-58.333c32.217,0 58.333,26.116 58.333,58.333c0,32.217 -26.116,58.333 -58.333,58.333Zm114.416,-151.748c0,11.598 -9.403,20.999 -21.001,20.999c-11.597,0 -20.999,-9.401 -20.999,-20.999c0,-11.598 9.402,-21 20.999,-21c11.598,0 21.001,9.402 21.001,21Z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='size-8 text-[#888] bg-[#1d1b19]'>
                                <path fill="currentColor" d="M449.446,0c34.525,0 62.554,28.03 62.554,62.554v386.892c0,34.524 -28.03,62.554 -62.554,62.554H62.554C28.03,512 0,483.97 0,449.446V62.554C0,28.03 28.029,0 62.554,0h386.892ZM195.519,424.544c135.939,0 210.268,-112.643 210.268,-210.268c0,-3.218 0,-6.437 -0.153,-9.502c14.406,-10.421 26.973,-23.448 36.935,-38.314c-13.18,5.824 -27.433,9.809 -42.452,11.648c15.326,-9.196 26.973,-23.602 32.49,-40.92c-14.252,8.429 -30.038,14.56 -46.896,17.931c-13.487,-14.406 -32.644,-23.295 -53.946,-23.295c-40.767,0 -73.87,33.104 -73.87,73.87c0,5.824 0.613,11.494 1.992,16.858c-61.456,-3.065 -115.862,-32.49 -152.337,-77.241c-6.284,10.881 -9.962,23.601 -9.962,37.088c0,25.594 13.027,48.276 32.95,61.456c-12.107,-0.307 -23.448,-3.678 -33.41,-9.196v0.92c0,35.862 25.441,65.594 59.311,72.49c-6.13,1.686 -12.72,2.606 -19.464,2.606c-4.751,0 -9.348,-0.46 -13.946,-1.38c9.349,29.426 36.628,50.728 68.965,51.341c-25.287,19.771 -57.164,31.571 -91.8,31.571c-5.977,0 -11.801,-0.306 -17.625,-1.073c32.337,21.15 71.264,33.41 112.95,33.41Z"/>
                            </svg>
                            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className='size-8 text-[#888] bg-[#1d1b19]'>
                                <path fill="currentColor" d="M449.446,0c34.525,0 62.554,28.03 62.554,62.554v386.892c0,34.524-28.03,62.554-62.554,62.554H62.554C28.03,512 0,483.97 0,449.446V62.554C0,28.03 28.03,0 62.554,0h386.892Zm-3.446,265.638c0-22.964-18.616-41.58-41.58-41.58-11.211,0-21.361,4.457-28.841,11.666-28.424-20.508-67.586-33.757-111.204-35.278l18.941-89.121 61.884,13.157c0.756,15.734 13.642,28.29 29.56,28.29 16.407,0 29.706-13.299 29.706-29.701 0-16.403-13.299-29.702-29.706-29.702-11.666,0-21.657,6.792-26.515,16.578l-69.105-14.69c-1.922-0.418-3.939-0.042-5.585,1.036-1.658,1.073-2.811,2.761-3.224,4.686l-21.152,99.438c-44.258,1.228-84.046,14.494-112.837,35.232-7.468-7.164-17.589-11.591-28.757-11.591-22.965,0-41.585,18.616-41.585,41.58 0,16.896 10.095,31.41 24.568,37.918-0.639,4.135-0.99,8.328-0.99,12.576 0,63.977 74.469,115.836 166.33,115.836 91.861,0 166.334-51.859 166.334-115.836 0-4.218-0.347-8.387-0.977-12.493 14.564-6.47 24.735-21.034 24.735-38.001Zm-119.474,108.193c-20.27,20.241-59.115,21.816-70.534,21.816-11.428,0-50.277-1.575-70.522-21.82-3.007-3.008-3.007-7.882 0-10.889 3.003-2.999 7.882-3.003 10.885,0 12.777,12.781 40.11,17.317 59.637,17.317 19.522,0 46.86-4.536 59.657-17.321 3.016-2.999 7.886-2.995 10.885,0.008 3.008,3.011 3.003,7.882-0.008,10.889Zm-5.23-48.781c-16.373,0-29.701-13.324-29.701-29.698 0-16.381 13.328-29.714 29.701-29.714 16.378,0 29.706,13.333 29.706,29.714 0,16.374-13.328,29.698-29.706,29.698Zm-160.386-29.702c0-16.381 13.328-29.71 29.714-29.71 16.369,0 29.689,13.329 29.689,29.71 0,16.373-13.32,29.693-29.689,29.693-16.386,0-29.714-13.32-29.714-29.693Z"/>
                            </svg>
                        </div>
                    </motion.div>
                    <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={variants_bottom}
                    transition={{ duration: 1, delay:2.5 }}
                    className='text-[#888]'
                    >
                        Developed by <span>
                            TrendyCoder
                        </span>
                    </motion.div>
            </div>
                        </>) : (
                        <>
                        <motion.div 
                        initial={{opacity:1}}
                        animate={{opacity:0}}
                        transition={{duration: 0.8}}
                        className='mb-6 flex flex-col gap-3'>
                        <div className='text-[#dddddd] text-3xl font-normal'> 
                        Home
                    </div>
                    <div className='text-[#dddddd] text-3xl font-normal'> 
                        About
                    </div>
                    <div className='text-[#dddddd] text-3xl font-normal'> 
                        Portfolio
                    </div>
                    <div className='text-[#dddddd] text-3xl font-normal'> 
                        Services
                    </div>
                    <div className='text-[#dddddd] text-3xl font-normal'> 
                        News and Tips
                    </div>
                    <div className='mb-32 text-[#dddddd] text-3xl font-normal'> 
                        Contact
                    </div>
                    <div className='mb-2'>
                        <div className='flex items-center justify-start gap-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='size-8 text-[#888] bg-[#1d1b19]'>
                                <path fill="currentColor" d="M449.446,0c34.525,0 62.554,28.03 62.554,62.554v386.892c0,34.524 -28.03,62.554 -62.554,62.554H62.554C28.03,512 0,483.97 0,449.446V62.554C0,28.03 28.029,0 62.554,0h386.892ZM160.461,423.278V197.561h-75.04v225.717h75.04Zm270.539,0V293.839c0,-69.333 -37.018,-101.586 -86.381,-101.586c-39.804,0 -57.634,21.891 -67.617,37.266v-31.958h-75.021c0.995,21.181 0,225.717 0,225.717h75.02v-126.056c0,-6.748 0.486,-13.492 2.474,-18.315c5.414,-13.475 17.767,-27.434 38.494,-27.434c27.135,0 38.007,20.707 38.007,51.037v120.768h75.024Zm-307.552,-334.556c-25.674,0 -42.448,16.879 -42.448,39.002c0,21.658 16.264,39.002 41.455,39.002h0.484c26.165,0 42.452,-17.344 42.452,-39.002c-0.485,-22.092 -16.241,-38.954 -41.943,-39.002Z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='size-8 text-[#888] bg-[#1d1b19]'>
                                <path fill="currentColor" d="M449.446,0c34.525,0 62.554,28.03 62.554,62.554v386.892c0,34.524 -28.03,62.554 -62.554,62.554H62.554C28.03,512 0,483.97 0,449.446V62.554C0,28.03 28.029,0 62.554,0h386.892ZM256,81c-47.527,0 -53.487,0.201 -72.152,1.053c-18.627,0.85 -31.348,3.808 -42.48,8.135c-11.508,4.472 -21.267,10.456 -30.996,20.184c-9.729,9.729 -15.713,19.489 -20.185,30.996c-4.326,11.132 -7.284,23.853 -8.135,42.48c-0.851,18.665 -1.052,24.625 -1.052,72.152c0,47.527 0.201,53.487 1.052,72.152c0.851,18.627 3.809,31.348 8.135,42.48c4.472,11.507 10.456,21.267 20.185,30.996c9.729,9.729 19.488,15.713 30.996,20.185c11.132,4.326 23.853,7.284 42.48,8.134c18.665,0.852 24.625,1.053 72.152,1.053c47.527,0 53.487,-0.201 72.152,-1.053c18.627,-0.85 31.348,-3.808 42.48,-8.134c11.507,-4.472 21.267,-10.456 30.996,-20.185c9.729,-9.729 15.713,-19.489 20.185,-30.996c4.326,-11.132 7.284,-23.853 8.134,-42.48c0.852,-18.665 1.053,-24.625 1.053,-72.152c0,-47.527 -0.201,-53.487 -1.053,-72.152c-0.85,-18.627 -3.808,-31.348 -8.134,-42.48c-4.472,-11.507 -10.456,-21.267 -20.185,-30.996c-9.729,-9.728 -19.489,-15.712 -30.996,-20.184c-11.132,-4.327 -23.853,-7.285 -42.48,-8.135c-18.665,-0.852 -24.625,-1.053 -72.152,-1.053ZM256,112.532c46.727,0 52.262,0.178 70.715,1.02c17.062,0.779 26.328,3.63 32.495,6.025c8.169,3.175 13.998,6.968 20.122,13.091c6.124,6.124 9.916,11.954 13.091,20.122c2.396,6.167 5.247,15.433 6.025,32.495c0.842,18.453 1.021,23.988 1.021,70.715c0,46.727 -0.179,52.262 -1.021,70.715c-0.778,17.062 -3.629,26.328 -6.025,32.495c-3.175,8.169 -6.967,13.998 -13.091,20.122c-6.124,6.124 -11.953,9.916 -20.122,13.091c-6.167,2.396 -15.433,5.247 -32.495,6.025c-18.45,0.842 -23.985,1.021 -70.715,1.021c-46.73,0 -52.264,-0.179 -70.715,-1.021c-17.062,-0.778 -26.328,-3.629 -32.495,-6.025c-8.169,-3.175 -13.998,-6.967 -20.122,-13.091c-6.124,-6.124 -9.917,-11.953 -13.091,-20.122c-2.396,-6.167 -5.247,-15.433 -6.026,-32.495c-0.842,-18.453 -1.02,-23.988 -1.02,-70.715c0,-46.727 0.178,-52.262 1.02,-70.715c0.779,-17.062 3.63,-26.328 6.026,-32.495c3.174,-8.168 6.967,-13.998 13.091,-20.122c6.124,-6.123 11.953,-9.916 20.122,-13.091c6.167,-2.395 15.433,-5.246 32.495,-6.025c18.453,-0.842 23.988,-1.02 70.715,-1.02ZM256,166.135c-49.631,0 -89.865,40.234 -89.865,89.865c0,49.631 40.234,89.865 89.865,89.865c49.631,0 89.865,-40.234 89.865,-89.865c0,-49.631 -40.234,-89.865 -89.865,-89.865Zm0,148.198c-32.217,0 -58.333,-26.116 -58.333,-58.333c0,-32.217 26.116,-58.333 58.333,-58.333c32.217,0 58.333,26.116 58.333,58.333c0,32.217 -26.116,58.333 -58.333,58.333Zm114.416,-151.748c0,11.598 -9.403,20.999 -21.001,20.999c-11.597,0 -20.999,-9.401 -20.999,-20.999c0,-11.598 9.402,-21 20.999,-21c11.598,0 21.001,9.402 21.001,21Z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='size-8 text-[#888] bg-[#1d1b19]'>
                                <path fill="currentColor" d="M449.446,0c34.525,0 62.554,28.03 62.554,62.554v386.892c0,34.524 -28.03,62.554 -62.554,62.554H62.554C28.03,512 0,483.97 0,449.446V62.554C0,28.03 28.029,0 62.554,0h386.892ZM195.519,424.544c135.939,0 210.268,-112.643 210.268,-210.268c0,-3.218 0,-6.437 -0.153,-9.502c14.406,-10.421 26.973,-23.448 36.935,-38.314c-13.18,5.824 -27.433,9.809 -42.452,11.648c15.326,-9.196 26.973,-23.602 32.49,-40.92c-14.252,8.429 -30.038,14.56 -46.896,17.931c-13.487,-14.406 -32.644,-23.295 -53.946,-23.295c-40.767,0 -73.87,33.104 -73.87,73.87c0,5.824 0.613,11.494 1.992,16.858c-61.456,-3.065 -115.862,-32.49 -152.337,-77.241c-6.284,10.881 -9.962,23.601 -9.962,37.088c0,25.594 13.027,48.276 32.95,61.456c-12.107,-0.307 -23.448,-3.678 -33.41,-9.196v0.92c0,35.862 25.441,65.594 59.311,72.49c-6.13,1.686 -12.72,2.606 -19.464,2.606c-4.751,0 -9.348,-0.46 -13.946,-1.38c9.349,29.426 36.628,50.728 68.965,51.341c-25.287,19.771 -57.164,31.571 -91.8,31.571c-5.977,0 -11.801,-0.306 -17.625,-1.073c32.337,21.15 71.264,33.41 112.95,33.41Z"/>
                            </svg>
                            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className='size-8 text-[#888] bg-[#1d1b19]'>
                                <path fill="currentColor" d="M449.446,0c34.525,0 62.554,28.03 62.554,62.554v386.892c0,34.524-28.03,62.554-62.554,62.554H62.554C28.03,512 0,483.97 0,449.446V62.554C0,28.03 28.03,0 62.554,0h386.892Zm-3.446,265.638c0-22.964-18.616-41.58-41.58-41.58-11.211,0-21.361,4.457-28.841,11.666-28.424-20.508-67.586-33.757-111.204-35.278l18.941-89.121 61.884,13.157c0.756,15.734 13.642,28.29 29.56,28.29 16.407,0 29.706-13.299 29.706-29.701 0-16.403-13.299-29.702-29.706-29.702-11.666,0-21.657,6.792-26.515,16.578l-69.105-14.69c-1.922-0.418-3.939-0.042-5.585,1.036-1.658,1.073-2.811,2.761-3.224,4.686l-21.152,99.438c-44.258,1.228-84.046,14.494-112.837,35.232-7.468-7.164-17.589-11.591-28.757-11.591-22.965,0-41.585,18.616-41.585,41.58 0,16.896 10.095,31.41 24.568,37.918-0.639,4.135-0.99,8.328-0.99,12.576 0,63.977 74.469,115.836 166.33,115.836 91.861,0 166.334-51.859 166.334-115.836 0-4.218-0.347-8.387-0.977-12.493 14.564-6.47 24.735-21.034 24.735-38.001Zm-119.474,108.193c-20.27,20.241-59.115,21.816-70.534,21.816-11.428,0-50.277-1.575-70.522-21.82-3.007-3.008-3.007-7.882 0-10.889 3.003-2.999 7.882-3.003 10.885,0 12.777,12.781 40.11,17.317 59.637,17.317 19.522,0 46.86-4.536 59.657-17.321 3.016-2.999 7.886-2.995 10.885,0.008 3.008,3.011 3.003,7.882-0.008,10.889Zm-5.23-48.781c-16.373,0-29.701-13.324-29.701-29.698 0-16.381 13.328-29.714 29.701-29.714 16.378,0 29.706,13.333 29.706,29.714 0,16.374-13.328,29.698-29.706,29.698Zm-160.386-29.702c0-16.381 13.328-29.71 29.714-29.71 16.369,0 29.689,13.329 29.689,29.71 0,16.373-13.32,29.693-29.689,29.693-16.386,0-29.714-13.32-29.714-29.693Z"/>
                            </svg>
                        </div>
                    </div>
                    <div className='text-[#888]'>
                        Developed by <span>
                            TrendyCoder
                        </span>
                    </div>
            </motion.div>
                        </>
                    )
                }
        </div>
    </div>
    <div onClick={() => {
        setisMenuopen(!isMenuOpen);
    }} className={`fixed top-0 left-0 w-8/12 h-full opacity-75 bg-[#1d1b19] shadow-lg transition-transform duration-1000 ease-in-out ${
          isMenuOpen ? '-translate-x-8/12' : '-translate-x-full'
        }`}>
    </div>
</>)    
}