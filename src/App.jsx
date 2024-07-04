import BIOGRAPHY from './components/biography'
import INTRO from './components/intro'
import INTRO_new from './components/intro_new'
import GETINTOUCH from './components/getinTouch'
import NAVBAR from './components/navbar'
import Experience_Boxes from './components/experience'
import Footer from './components/footer'
import MenuBar from './components/menubar'
import './App.css'
import { useRecoilState } from 'recoil'
import { widthState } from './recoil/atoms'


function App() {
  const [width, setWidth] = useRecoilState(widthState);

  return (
    <>
    <div className='h-fit flex bg-[#1d1b19] overflow-scroll'>
          <div className={`h-fit ${width} bg-[#1d1b19] border-[1px] border-[#4a4947] transition-all duration-1000 ease-in-out`}>
        <INTRO title={"INTRODUCTION"} subheadin={"UI/UX Designer"} textArea={"I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores."}></INTRO>
          <BIOGRAPHY></BIOGRAPHY>
          <INTRO_new title={"SERVICES"} subheadin={"What I Do"} textArea={"I help ambitious businesses like yours generate more profits by building awareness, driving web traffic, connecting with customers and growing overall sales."}></INTRO_new>
          <GETINTOUCH></GETINTOUCH>
          <Experience_Boxes/>
          <Footer></Footer>
      </div> 
        <MenuBar></MenuBar>
        <NAVBAR></NAVBAR>
    </div>
    </>
  )
}

export default App



