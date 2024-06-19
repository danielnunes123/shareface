import { GlobeLock, Laugh, Images,MapPin, Video } from "lucide-react";

const Modal = ({isOpen, isClose}) => {
    function handleChange(){
        const select = document.querySelector('select')
        const category = document.getElementById('category')


        if(select.value == 'Privado'){
            category.style='background-color:#f02849'
        }else{
              category.style='background-color:#45bd62'
        }
    }
    
    if (isOpen) {
        return (
            <div id="modal">
                <button onClick={isClose}> hgf</button>
                <div className="bg-white w-[400px] h-[420px] rounded-[5px]">
                <div id="rr" className=" h-[15%] flex items-center justify-center"><strong>Criar post</strong></div>
                <div className="h-[85%] p-[20px]">
                    <div className="flex gap-[10px]">
                        <img width='50px' className='rounded-[50%]' src="https://i.pinimg.com/736x/a4/93/78/a49378504ffdffc8253bbc058331d5d0.jpg"/>
                        <div className="block w-[20px]">
                           <span className="flex w-[max-content]"> <span className="h-[25px]">Pezy</span><div id="category" className="bg-[#f02849] h-[10px] w-[10px] rounded-[50%] relative top-[20px] left-[40px]"></div></span>
                            <select onChange={handleChange} className="bg-[#ebe9e9] rounded-[6px] h-[25px]">
                                <option>Privado</option>
                                <option>Puplico</option>
                            </select>
                        </div>
                    </div>
                    <br/>
                    <textarea maxLength='100' id="gg" className=" resize-none w-[100%] h-[120px] outline-none" placeholder="Descrição">

                    </textarea>
                    <div className="">
                        <div id="yy" className="w-[100%] rounded-[5px] h-[55px]">
                            <span><strong>Adicione na postagem</strong></span>
                            <div className="flex gap-[8px]">
                            <button><Laugh width="30px" color="yellow" /></button>
                            <button><Images width="30px" className="text-green-500" /></button>
                            <button><MapPin width="30px" color="#f5533d"/></button>
                            <button><Video width="30px" color="#f02849" /></button>
                            </div>
                        </div>
                        <br/>
                        <button className="w-[100%] text-[white] rounded-[5px] h-[40px] bg-[#1b74e4]">Postar</button>
                    </div>
                </div>
                </div>
            </div>
          );
    }
    
    return null
    };
    
    export default Modal;