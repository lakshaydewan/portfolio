import React from 'react'
import { animate, easeIn, easeInOut, motion } from "framer-motion";

const Projects = () => {
  return (
   <div>
     <div className='px-24 pt-32 mb-12'>
    <div className='ml-4 font-medium text-lg text-[#987750]'>
            PORTFOLIO
      </div>
    </div>
        <div className='px-24 ml-4 mr-12 mt-12 pb-8 text-5xl font-light text-white'>
          <h1>Featured Projects</h1>
        </div>
        <section className='flex mt-32 mb-16'>
            <div className='ml-28 flex gap-12'>
                <motion.img 
                initial={{x: -80, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                transition={{duration: 1.5, ease: easeInOut, delay:0.2}}
                src="https://picsum.photos/200/300" className="h-72 w-72" alt="random" />
                    <motion.div
                    onViewportEnter={() => {
                        
                    }}  
                    initial={{x: -80, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    transition={{duration: 1.5, ease: easeInOut, delay: 0.4}}
                    >
                        <div className='mb-1 mt-8 text-[#888888] text-xl'>
                            Water-Fall Effect
                        </div>
                            <div className='w-96'>
                                <p className='text-wrap text-lg text-white'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nihil doloribus, dignissimos animi esse soluta odit reiciendis, voluptates minus eligendi impedit dolorum, magnam porro mollitia optio quas quaerat est consequatur aperiam at odio laborum.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                <div>
            </div>
        </section>
        <section className='flex mt-32 mb-16 gap-7'>
            <div className='ml-28 flex'>
                    <motion.div 
                    initial={{x: 80, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    transition={{duration: 1.5, ease: easeInOut, delay:0.4}}
                    className=''>
                        <div className='mb-1 mt-8 text-[#888888] text-xl'>
                            Water-Fall Effect
                        </div>
                            <div className='w-96'>
                                <p className='text-wrap text-lg text-white'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nihil doloribus, dignissimos animi esse soluta odit reiciendis, voluptates minus eligendi impedit dolorum, magnam porro mollitia optio quas quaerat est consequatur aperiam at odio laborum.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                <div>
                <motion.img 
                initial={{x: 80, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                transition={{duration: 1.5, ease: easeInOut, delay:0.2}}
                src="https://picsum.photos/200/300"className="h-72 w-72" alt="random" />
            </div>
        </section>
        <section className='flex mt-32 mb-16'>
            <div className='ml-28 flex gap-12'>
                <motion.img 
                initial={{x: -80, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                transition={{duration: 1.5, ease: easeInOut, delay:0.2}}
                src="https://picsum.photos/200/300" className="h-72 w-72" alt="random" />
                    <motion.div
                    onViewportEnter={() => {
                        
                    }}  
                    initial={{x: -80, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    transition={{duration: 1.5, ease: easeInOut, delay: 0.4}}
                    >
                        <div className='mb-1 mt-8 text-[#888888] text-xl'>
                            Water-Fall Effect
                        </div>
                            <div className='w-96'>
                                <p className='text-wrap text-lg text-white'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nihil doloribus, dignissimos animi esse soluta odit reiciendis, voluptates minus eligendi impedit dolorum, magnam porro mollitia optio quas quaerat est consequatur aperiam at odio laborum.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                <div>
            </div>
        </section>
        <section className='flex mt-32 mb-16 gap-7'>
            <div className='ml-28 flex'>
                    <motion.div 
                    initial={{x: 80, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    transition={{duration: 1.5, ease: easeInOut, delay:0.4}}
                    className=''>
                        <div className='mb-1 mt-8 text-[#888888] text-xl'>
                            Water-Fall Effect
                        </div>
                            <div className='w-96'>
                                <p className='text-wrap text-lg text-white'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nihil doloribus, dignissimos animi esse soluta odit reiciendis, voluptates minus eligendi impedit dolorum, magnam porro mollitia optio quas quaerat est consequatur aperiam at odio laborum.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                <div>
                <motion.img 
                initial={{x: 80, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                transition={{duration: 1.5, ease: easeInOut, delay:0.2}}
                src="https://picsum.photos/200/300"className="h-72 w-72" alt="random" />
            </div>
        </section>
   </div>
  )
}

export default Projects;

{/* <div style={{ padding: '90px' }}>
            <motion.div
                initial={{ y: 0,}}
                whileHover={{ y: -10 }}
                transition={{ type: 'spring', stiffness: 300 }}
                style={{ backgroundColor: 'lightblue', display: 'inline-block', padding: '20px' }}
                className='rounded-lg'
            >
                DOWNLOAD CV
            </motion.div>
        </div> */}