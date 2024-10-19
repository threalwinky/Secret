import { useState } from 'react'
import "./Letter.css"
import { useParams } from 'react-router-dom'
function Letter({a}) {
    const [cl, setCl] = useState(1)
    const params = useParams()
    console.log(params)
  return (

    <div>
        <div className='a bg-red-200'>
    
    </div>
      {/* <p className='font-lb'>Xin chào bạn</p> */}

    <div className='absolute flex  items-center justify-center h-full w-full'>
    <div className=''>
     
     <div className="envelope-wrapper " onClick={() => setCl(0)}    >
    <div id="envelope" className={`${cl == 0 ? "open" : "close"} `}>
        <div className="front flap"></div>
        <div className="front pocket"></div>
        <div className="letter flex flex-col items-center justify-center ">
            <div className="words line1 font-lb text-center">Nhân dịp 20/10,</div>
            <div className="words line2 font-lb text-center">chúng mình chúc bạn</div>
            <div className="words line3 font-lb text-center">{params.name} có một ngày thật</div>
            <div className="words line4 font-lb text-center">vui vẻ và hạnh phúc nhé!!!</div>
        </div>
        <div className="hearts">
            <div className="heart a1"></div>
            <div className="heart a2"></div>
            <div className="heart a3"></div>
        </div>
    </div>
</div>
<div className="reset flex flex-col">
    <button id="" className='font-lb bg-white p-2 rounded-xl' onClick={() => setCl(0)}>Có thư cho bạn nè :3</button>
      <a href="/t">
      <button id="" className={`${cl==1 ? "hidden " : " "} bg-red-500 mt-4 outline-red-500 rounded-xl p-1 px-10 text-white`} onClick={() => setCl(0)}>Tiếp tục</button>

      </a>
        
</div>
    </div>
    

    </div>
    </div>

    
  )
}

export default Letter
