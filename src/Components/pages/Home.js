import { Form, Link } from 'react-router-dom'
import {React,useState} from 'react'
import Posts from '../layout/Posts'
import { Images,Ellipsis } from 'lucide-react'
import Postmodal from '../layout/Postmodal'
import coracao from '../img/coracao.svg'
import like from '../img/like.svg'

export default function Home() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className='p-[30px] h-[2000px]'>
      <span className='flex justify-between'><strong>Histórias</strong> <Link to="fgf"><strong color='blue'>Ver todos</strong></Link></span>
      <br/>
      <Posts/>
      <br/>
            <div className='w-[75%] m-auto p-[10px] shadow-2 dark:bg-surface-dark' id='nn'>
                <img width='40px' className='rounded-[50%]' src='https://i.pinimg.com/736x/a4/93/78/a49378504ffdffc8253bbc058331d5d0.jpg'/>
                <button className='bg-[#ebe9e9] h-[40px] w-[80%] rounded-[8px] text-[gray]' onClick={()=> setOpenModal(true)}><strong className='size-[11px]'>Adicionar post</strong> </button>
                <button className='bg-[#ebe9e9] w-[40px] h-[40px] flex items-center justify-center rounded-[50%]'><Images color='#808080' /></button>
            </div>
            <br/>
            <div className='w-[75%] m-auto p-[10px]' id='ii'>
              <div className='flex justify-between items-center mb-[10px]'>
            <div className="flex gap-[10px]">
                        <img width='50px' className='rounded-[50%]' src="https://i.pinimg.com/736x/a4/93/78/a49378504ffdffc8253bbc058331d5d0.jpg"/>
                        <div className="block w-[20px]">
                           <span className="h-[25px]">Pezy</span>
                           <br/>
                            <span className="bg-[#ebe9e9] rounded-[6px] h-[25px]">
                              Publico
                            </span>
                        </div>
                        </div>
                        <button id='dd' className=' w-[40px]  h-[40px] flex items-center justify-center rounded-[50%]'><Ellipsis color="#808080" strokeWidth={1.75} width="20px"/></button>
                        </div>
                        <div className='w-[max-content] mb-[10px]'>Ps5 a bom preso 😎😎</div>
                          <img className='rounded-[5px] mb-[7px]'  src='https://th.bing.com/th/id/OIP.xxXFx3SY9_jrEuvDQ4Qo1gHaEK?w=768&h=432&rs=1&pid=ImgDetMain'/>
                          <div className='flex items-center gap-[8px]' id='nu'> 
                            <div className='flex items-center'>               
                            <img className='relative left-1' width='20px' src={coracao}/>
                            <img width='20px'  src={like}/>
                            </div>

                            <span>100 gostos</span>
                          </div>

                          <div className='flex items-center gap-[8px]' > 
                            <button>gosto</button>
                            <button>comentário</button>
                            <button>compartilhar</button>
                            </div>
            </div>
            <Postmodal isOpen={openModal} isClose={()=> setOpenModal(false)}/>
    </div>
  )
}
