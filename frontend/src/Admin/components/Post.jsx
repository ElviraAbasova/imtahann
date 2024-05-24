import React, { useRef } from 'react'
import { baseUrl } from '../../service/api'
import { postData } from '../../service/requests'


const Post = () => {
   
    let titleInp = useRef()
    let descInp = useRef()
    let imageInp = useRef()
    let priceInp = useRef()
    let profileInp = useRef()
    let authorInp = useRef()
   const handlePost = async(e)=>{
    e.preventDefault()
    let obj ={
        title: titleInp.current.value,
        image: imageInp.current.value,
        price: priceInp.current.value,
        description: descInp.current.value,
        author: authorInp.current.value,
        profile: profileInp.current.value
    
    }
    titleInp.current.value=""
    imageInp.current.value=""
    priceInp.current.value=""
    descInp.current.value=""
    authorInp.current.value=""
    profileInp.current.value=""


    await postData(baseUrl,obj)
    window.location.reload()
   }

  return (
    <form className="max-w-md mx-auto" onSubmit={handlePost}>
  <div className="relative z-0 w-full mb-5 group">
    <input
     ref={titleInp}
      type="text"
      name="floating_email"
      id="floating_email"
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=" "
      required=""
    />
    <label
      htmlFor="floating_email"
      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      Title
    </label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
    <input
    ref={imageInp}
      type="text"
      name="floating_password"
      id="floating_password"
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=" "
      required=""
    />
    <label
      htmlFor="floating_password"
      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      Image
    </label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
    <input
    ref={descInp}
      type="text"
      name="floating_password"
      id="floating_password"
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=" "
      required=""
    />
    <label
      htmlFor="floating_password"
      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      Description
    </label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
    <input
    ref={priceInp}
      type="number"
      name="repeat_password"
      id="floating_repeat_password"
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=" "
      required=""
    />
    <label
      htmlFor="floating_repeat_password"
      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      Price
    </label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
    <input
    ref={profileInp}
      type="text"
      name="repeat_password"
      id="floating_repeat_password"
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=" "
      required=""
    />
    <label
      htmlFor="floating_repeat_password"
      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      Author Profile
    </label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
    <input
    ref={authorInp}
      type="text"
      name="repeat_password"
      id="floating_repeat_password"
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=" "
      required=""
    />
    <label
      htmlFor="floating_repeat_password"
      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      Author Name
    </label>
  </div>


  <button
    type="submit"
    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    Submit
  </button>
</form>

  )
}

export default Post