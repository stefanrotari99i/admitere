import React from 'react'

const Stepper = () => {
  return (
    <div className='flex items-center w-full flex-1'>
        <p className='text-gray-100 text-sm font-medium'>Date personale</p>
        <p className='text-gray-200 text-md'>
            Pasul 1 <span className='text-gray-100 text-xs'>din 4</span>
        </p>
    </div>
  )
}

const Step = () => {
    return (
        <div className='flex items-center gap-2'>
            <div className='w-10 h-10 rounded-full bg-white flex items-center justify-center text-blue-500 font-bold'>
                1
            </div>
            <div className="text-left">
                <p className="text-sm font-medium text-gray-100">Date personale</p>
                <p className="text-xs text-gray-200">Completează datele personale</p>
            </div>
        </div>
    )
}

export default Stepper