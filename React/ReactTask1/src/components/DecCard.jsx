import React from 'react'
import { AdvantagesInfo } from '../Data/Data'

function DecCard() {
  return (
    <>
      {AdvantagesInfo.map((item, index) => (
                 
          <div className=" items-start hover:bg-gray-900  shadow-md  rounded-3xl w-150 text-left
                     transform hover:scale-105 hover:drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]
            transition-all duration-700 ease-in-out space-y-4 flex p-5 hover:text-blue-400  text-white">
            <div className="flex-shrink-0 h-12 w-12 bg-blue-500 rounded-lg flex items-center justify-center">
            </div>
            <div className="ml-4">
              <h3 className=" font-semibold text-lg">
                {item.title || "Welcome"}
              </h3>
              <p className="text-gray-300 mt-1 text-sm pr-30">
                {item.desc || "Lorem ipsum dolor sit amet consectetur adipisicing elit."}
              </p>
            </div>
          </div>
        
      ))}
    </>
  )
}

export default DecCard
