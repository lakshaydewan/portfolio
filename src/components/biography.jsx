export default function BIOGRAPHY() {

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
        <div className='px-24 pb-10 mr-12'>
        <div className='mt-8 ml-4 text-left font-normal text-2xl text-[#888]'>
          <p>I'm a Freelancer Front-end Developer with over 12 years of experience. I'm from San Francisco. I code and create web elements for amazing people around the world. I like working with new people. New people are new experiences.</p>
          </div>
        </div>
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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-white ml-9">
              <path fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd"  />
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