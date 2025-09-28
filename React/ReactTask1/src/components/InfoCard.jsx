import React from 'react'

function InfoCard({info}) {
  return (
    
         <div className="bg-gray-100 p-6 rounded-3xl w-80 text-left
             hover:bg-gradient-to-br hover:from-orange-300 hover:to-orange-700
             transform hover:scale-105 hover:drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]
             transition-all duration-800 ease-in-out space-y-4">

            <img src={info.img} alt="" className='h-15 w-15 p-2 rounded-2xl bg-amber-100 ' />
            <h1 className='font-bold text-xl'>{info.title}</h1>
            <p className='text-sm opacity-60'>{info.desc}</p>
            <div className={`h-1 w-full ${info.color} rounded-4xl`}></div>
            
         </div>
    
   
  )
}

export default InfoCard