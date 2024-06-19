import React from 'react'

export default function Login() {
  return (
    <div id='hh'>
      <div className='w-[75%] h-[70vh] flex justify-between items-center'>
        <div>
            <h1 className='text-[#0866ff] text-6xl'><strong>shareface</strong></h1>
            <br/>
            <span className='text-black text-3xl'>O Shareface ajuda-te a comunicar
                <br/>
                e partilhar com as pessoa que fazem
                <br/>
                parte da tua vida.
            </span>
        </div>
        <div className='bg-[white] p-[20px] rounded-[10px] w-[400px] h-[max-content]' id='oo'>
            <input id='kk' placeholder='E-mail ou número de telemóvel' className=''/>
            <br/>
            <br/>
            <input id='kk' placeholder='Palavra-passe'/>
            <br/>
            <br/>
            <button className='w-[100%] h-[50px] bg-[#0866ff] rounded-[5px] text-white text-2xl'>Iniciar sessão</button>
            <br/>
            <button className='w-[100%] h-[50px] text-[#0866ff]' id='rt'>Não sabes a tu palavra-passe</button>
             <br/>
             <br/>
             <div className='w-[100%] flex justify-center m-[auto]'>
             <button className='bg-[#42b72a] w-[50%] h-[50px] rounded-[5px] text-white' id='dc'>Criar nova conta</button>
             </div>
        </div>
      </div>
    </div>
  )
}
