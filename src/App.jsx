import BIOGRAPHY from './components/biography'
import INTRO from './components/intro'
import GETINTOUCH from './components/getinTouch'
import './App.css'

function App() {
  

  return (
    <><div className='h-screen'>
      <div className='h-fit w-8/12 bg-[#1d1b19]'>
        <INTRO title={"INTRODUCTION"} subheadin={"UI/UX Designer"} textArea={"I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores."}></INTRO>
        <BIOGRAPHY></BIOGRAPHY>
        <INTRO title={"SERVICES"} subheadin={"What I Do"} textArea={"I help ambitious businesses like yours generate more profits by building awareness, driving web traffic, connecting with customers and growing overall sales."}></INTRO>
        <GETINTOUCH></GETINTOUCH>
      </div> 
    </div>
    </>
  )
}

export default App
