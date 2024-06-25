export default function INTRO_new({title, subheadin, textArea}) {

    return <>
         <div className='px-24 pt-32 mb-96'>
    <div className='ml-4 font-medium text-lg text-[#987750]'>
            {title}
      </div>
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
}