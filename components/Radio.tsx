import React from 'react'

const Radio = () => {
  return (
    <div className="flex items-center justify-between">
        <p className="text-gray-600 text-sm">Choose your favorite programming language</p>
        <div className="mt-2 flex items-center gap-4    ">
            <label className="inline-flex items-center">
                <input type="radio" className="form-radio h-4 w-4 text-gray-600" name="radio-colors" value="red" />
                <span className="ml-2 text-sm text-gray-700">Red</span>
            </label>
            <label className="inline-flex items-center">
                <input type="radio" className="form-radio h-4 w-4 text-gray-600" name="radio-colors" value="red" />
                <span className="ml-2 text-sm text-gray-700">Red</span>
            </label>
        </div>
    </div>
    
  )
}

export default Radio