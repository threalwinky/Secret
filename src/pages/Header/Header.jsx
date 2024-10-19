import { useState } from 'react'

function Header({setCont}) {
    const [a, setA] = useState("")
  return (


    <div>
      <div className='a bg-red-200'>
    
    </div>
      {/* <p className='font-lb'>Xin chào bạn</p> */}

    <div className='absolute flex  items-center justify-center h-full w-full'>
    <div className='bg-white flex flex-col w-96 rounded-xl'>
      <div className='p-4 '>
        <div className='flex flex-col items-center justify-center'>
        <p className='font-lb text-xl'>Hê lu, cho mình xin tên của bạn nhé</p>
        <p className='font-lb text-xl'></p>
    </div>

      <div className='flex flex-col'>
      <input value={a} onChange={evt => setA(evt.target.value)} className='mt-2 p-2 px-4 outline focus:outline outline-red-500 rounded-xl placeholder:font-lb' type="text" placeholder='Họ và tên'/>
      <div className='flex  items-center justify-center '>
        <a className={`${a=="" ? "" : ""}`} href={`${a=="" ? "/" : "/l/" + a} `}><button  className='bg-red-500 mt-4 outline-red-500 rounded-xl p-1 px-10 text-white font-lb'>Tiếp tục</button></a>
      
      </div>
      
      </div>
      </div>
      
      
    </div>
    

    </div>
    </div>

    

    
  )
}

export default Header
