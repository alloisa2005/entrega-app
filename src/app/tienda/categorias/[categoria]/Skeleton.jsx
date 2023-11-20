import React from 'react'

const Skeleton = () => {

  const divArray = Array.from({ length: 16 }, (_, index) => index + 1);

  return (
    <div className="p-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {
        divArray.map((item) => (
          <div key={item} className="p-2 animate-pulse flex flex-col items-center justify-center bg-gray-200 rounded-md shadow-md">
            <div className="w-full h-32 bg-gray-400 rounded-md"></div>
            <div className="w-full h-4 bg-gray-400 rounded-md mt-2"></div>
            <div className="w-full h-4 bg-gray-400 rounded-md mt-2"></div>
            <div className="w-full h-4 bg-gray-400 rounded-md mt-2"></div>
          </div>
        ))
      }
    </div>
  )
}

export default Skeleton
