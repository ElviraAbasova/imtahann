import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart} from '@fortawesome/free-solid-svg-icons'
import { Addfav} from '../../redux/slices/favoriteSlice'
import "./detail.scss"

const Detail = () => {
    const fav = useSelector(state=> state.products.arr)
    const datas = useSelector(state=>state.favorite.arr)
    const {id} = useParams()
    let find = fav.find(elem=>elem._id==id)
    const dispatch = useDispatch()
    
    const handleFav=(elem)=>{
        dispatch(Addfav(elem))

    }
    const handleColor = (id) =>{
        return datas.find(elem=> elem._id==id)

    }
    
  return (
    <section id='detail'>
        <div className="container">
        
       
                    <div key={find._id} className="card">
                    <div className="img">
                        <img src={find.image} alt="" />
                    </div>
                    <div className="center">
                        <h4>{find.title}</h4>
                        <p>{find.description}</p>
                  
                        <FontAwesomeIcon className='like' style={{fontSize:20, paddingTop:20, color: handleColor(find._id) ? "red" : "black"}} icon={faHeart} onClick={()=> handleFav(find)} />
                       
                    </div>
                    <div className="bottom">
                        <div className="profile">
                            <img src={find.profile} alt="" />
                        </div>
                        <p>{find.author}<span>Author</span></p>
                        <div className="price">
                            ${find.price}
                        </div>
                    </div>
                </div>

                
       
        
      
        </div>
    </section>
  )
}

export default Detail