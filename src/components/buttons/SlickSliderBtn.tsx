import React from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

export default function SlickSliderBtn() {
  return (
    <div className="flex flex-col justify-center">
    <button onClick={() => sliderRef?.slickPrev()} className="p-2">
      <FaChevronUp className="text-3xl text-gray-800" />
    </button>
    <button onClick={() => sliderRef?.slickNext()} className="p-2">
      <FaChevronDown className="text-3xl text-gray-800" />
    </button>
  </div>
  )
}
