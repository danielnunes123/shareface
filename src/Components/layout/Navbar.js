import React from 'react'
import { Search, Settings } from 'lucide-react'
import logo from '../img/S-removebg-preview.png'
import { Navdata } from './Navdata'
import { NavLink } from 'react-router-dom'

export default function Navbar() {


  return (
    <div className='w-[100%] h-[50px] bg-white flex items-center justify-between shadow-[2px_5px_18px_-13px_rgba(62,61,61,0.77)] pl-[10px] pr-[10px]'>
      <div className='flex  w-[100%] justify-between'>
      <div className='flex gap-[8px]'>
        <div>
        <img className='w-[40px] ' src={logo}/>
        </div>
        <div className='w-[300px] bg-[#ebe9e9]  flex p-[8px]  pl-[15px] rounded-[20px] justify-between'>
        <Search style={{color:"gray", width:"20px"}} /> <input type='text' className='outline-none w-[90%] bg-[transparent] text-[gray]' placeholder='Pesquisar Shareface'/>
        </div>
        </div>
      <div>
        <ul className='flex gap-[40px] items-center h-[100%] m-[auto]'>
      {Navdata.map((val, key)=>{
          return(
           <NavLink activeClassName="active"  className='row' key={key} to={val.link}>{val.icon}</NavLink>
          )
         })}
         </ul>
      </div>
      
      <div className='w-[25%]'>
        <button className='bg-[#ebe9e9] w-[40px] absolute right-3 h-[40px] flex items-center justify-center rounded-[50%]'><Settings color="#808080" strokeWidth={1.75} width="20px" /></button>
      </div>
      </div>
    </div>
  )
}
