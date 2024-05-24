import React, { useEffect } from 'react'
import { getAllData } from '../../../service/requests'
import { baseUrl } from '../../../service/api'
import { useDispatch, useSelector } from 'react-redux'
import { Addproducts } from '../../../redux/slices/productsSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart} from '@fortawesome/free-solid-svg-icons'
import { Addfav } from '../../../redux/slices/favoriteSlice'
import { Link } from 'react-router-dom'

const Courses = () => {
    const dispatch = useDispatch()
    const datas = useSelector(state=>state.products.arr)
    const fav = useSelector(state=>state.favorite.arr)

    useEffect(()=>{
        getAllData(baseUrl).then(res=> dispatch(Addproducts(res)) )
    },[])
    const handleFav=(elem)=>{
        dispatch(Addfav(elem))

    }
    const handleColor = (id) =>{
        return fav.find(elem=> elem._id==id)

    }
    
  return (
    <section id='courses'>
        <div className="container">
        <div className="top">
         <div className='line'></div>
        <h2>Popular Courses</h2>
        </div>
        <div className="cards">
            {datas && datas.map(data=>{
                return(
                    <div key={data._id} className="card" >
                    <Link  to={`/detail/${data._id}`}  className="img">
                        <img src={data.image} alt="" />
                    </Link>
                    <div className="center">
                        <h4>{data.title}</h4>
                        <p>{data.description}</p>
                  
                        <FontAwesomeIcon className='like' style={{fontSize:20, paddingTop:20, color: handleColor(data._id) ? "red" : "black"}} icon={faHeart} onClick={()=> handleFav(data)} />
                       
                    </div>
                    <div className="bottom">
                        <div className="profile">
                            <img src={data.profile} alt="" />
                        </div>
                        <p>{data.author}<span>Author</span></p>
                        <div className="price">
                            ${data.price}
                        </div>
                    </div>
                </div>

                )
            })}
       
        
        </div>
        </div>
       
       

    </section>
  )
}

export default Courses