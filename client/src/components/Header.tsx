import React,{useState} from 'react'
import {ImCross} from 'react-icons/im'
import {GiHamburgerMenu} from 'react-icons/gi'

import logo from '../../images/logo.png'

type Props = {}

const HeaderTitle=(headerTitleProps:{title:string,classProps?:string}) => {
  return (
    <li className={` mx-4 cursor-pointer ${headerTitleProps.classProps}`}>{headerTitleProps.title}</li>
      )
}

const Header = (props: Props) => {

  const [toggleMenu, setToggleMenu] = useState<boolean>(false)
  return (
    <div className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center ">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
      <ul className="text-white md:flex  hidden flex-row list-none flex-initial items-center justify-between">
    {["Market","Exchange","Wallets"].map((titleName,index)=>(<HeaderTitle title={titleName} key={index+titleName} />))}
    <li className="bg-[#66ec69] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#329231]">Login</li>
      </ul>
      <div className="flex relative ">
        {toggleMenu?<ImCross fontSize={28} className="text-white md:hidden cursor-pointer"  onClick={()=>setToggleMenu(false)}/>:<GiHamburgerMenu fontSize={28} className="text-white md:hidden cursor-pointer"  onClick={()=>setToggleMenu(true)}/>}
        {toggleMenu&&(<ul className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end bg-blue-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 border border-gray-100 text-black animate-slide-in">
          <li className="text-xl w-full my-2">
            <ImCross onClick={()=>setToggleMenu(false)}></ImCross>
            {["Market","Exchange","Wallets"].map((titleName,index)=>(<HeaderTitle title={titleName} classProps="my-2 text-lg" key={index+titleName} />))}
          </li>
        </ul>)}
      </div>
    </div>
    )
  }

export default Header