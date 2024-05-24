import React, { useEffect } from 'react'
import { deleteDataById, getAllData } from '../service/requests'
import { baseUrl } from '../service/api'
import { Addproducts, deleteProduct } from '../redux/slices/productsSlice'
import { useDispatch, useSelector } from 'react-redux'
import Post from './components/Post'
import Search from './components/Search'
import Sort from './components/Sort'

const Admin = () => {
    const dispatch = useDispatch()
    const datas = useSelector(state=>state.products.arr)
    useEffect(()=>{
        getAllData(baseUrl).then(res=> dispatch(Addproducts(res)) )
    },[])
    const handleDelete = async(id)=>{
        await deleteDataById(baseUrl,id)
        dispatch(deleteProduct(id))


    }
  return (
    <div className="container relative overflow-x-auto shadow-md sm:rounded-lg">
        <Sort/>
        <Search/>
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-16 py-3">
          <span className="sr-only">Image</span>
        </th>
        <th scope="col" className="px-6 py-3">
          Title
        </th>
        <th scope="col" className="px-6 py-3">
          Description
        </th>
        <th scope="col" className="px-6 py-3">
          Price
        </th>
        <th scope="col" className="px-6 py-3">
          Author profile
        </th>
        <th scope="col" className="px-6 py-3">
          Author name
        </th>
        <th scope="col" className="px-6 py-3">
          Delete
        </th>
      </tr>
    </thead>
    <tbody>
        {datas && datas.map(data=>{
            return(
                <tr key={data._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="p-4">
          <img
            src={data.image}
            className="w-16 md:w-32 max-w-full max-h-full"
            alt="Apple Watch"
          />
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
          {data.title}
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
          {data.description}
        </td>
       
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
          ${data.price}
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        <img
            src={data.profile}
            className="w-12 md:w-32 max-w-full max-h-full"
            alt="Apple Watch"
          />
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
          {data.author}
        </td>
        <td className="px-6 py-4">
          <button
            onClick={()=>handleDelete(data._id)}
            className="font-medium text-red-600 dark:text-red-500 hover:underline"
          >
            Delete
          </button>
        </td>
      </tr>
            )
        })}
      
   
    </tbody>
  </table>
  <Post/>
</div>

  )
}

export default Admin