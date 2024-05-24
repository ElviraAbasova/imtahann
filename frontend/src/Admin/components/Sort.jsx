import React from 'react'
import { useDispatch } from 'react-redux'
import { AZ, HL, LH, ZA } from '../../redux/slices/productsSlice'

const Sort = () => {
    const dispatch = useDispatch()
    const handleAZ =()=>{
        dispatch(AZ())
    }
    const handleZA =()=>{
        dispatch(ZA())
    }
    const handleLH =()=>{
        dispatch(LH())
    }
    const handleHL =()=>{
        dispatch(HL())
    }
  return (
    <>
  <button onClick={handleAZ}
    type="button"
    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
  >
    AZ
  </button>
  <button onClick={handleZA}
    type="button"
    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
  >
    ZA
  </button>
  <button
  onClick={handleLH}
    type="button"
    className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
  >
    low-high
  </button>
  <button
  onClick={handleHL}
    type="button"
    className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
  >
    high-low
  </button>
</>

  )
}

export default Sort