import { menuState } from "../recoil/atoms"
import { useRecoilState } from "recoil"

export default function MenuBar() {
    const [isMenuOpen, setisMenuopen] = useRecoilState(menuState);

    return <>
            <div className='fixed top-0 right-0 flex items-center justify-center gap-2 mr-12 mt-10'>
            <div className='text-white text-lg'>
                Menu
            </div>
              <div onClick={()=> {
                         setisMenuopen(!isMenuOpen)
                        }}className=''>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7 text-white cursor-pointe">
                    <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                </svg>
              </div>
        </div>    
    </>
}