import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart} from '@fortawesome/free-solid-svg-icons'
import "./fav.scss"
import { useDispatch, useSelector } from 'react-redux'
import { Addfav, DeleteAll } from '../../redux/slices/favoriteSlice'

const Favorite = () => {
    const dispatch = useDispatch()
    const datas = useSelector(state=>state.favorite.arr)
    const handleFav=(elem)=>{
        dispatch(Addfav(elem))

    }
    const handleColor = (id) =>{
        return datas.find(elem=> elem._id==id)

    }
    const handleDelete = ()=>{
        dispatch(DeleteAll())
    }
  return (
    <section id='favorite'>
        <div className="container">
        <div className="cards">
            {datas && datas.map(data=>{
                return(
                    <div key={data._id} className="card">
                    <div className="img">
                        <img src={data.image} alt="" />
                    </div>
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
            <button onClick={handleDelete}>Delete All</button>
       
        
        </div>
        </div>
    </section>
  )
}

export default Favorite