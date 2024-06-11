import React, { useEffect, useState } from 'react'
import './cards.css';
import { useSelector } from 'react-redux';
import { FcLike } from "react-icons/fc";
import { IoBedOutline } from "react-icons/io5";
import { MdOutlineBathroom } from "react-icons/md";
import { LiaExternalLinkSquareAltSolid } from "react-icons/lia";
import 'bootstrap/dist/css/bootstrap.min.css'; // Optional for Bootstrap components
import 'bootstrap-icons/font/bootstrap-icons.css'; // Required for icons
import { Heart } from 'react-bootstrap-icons';




const Cards = () => {

  const [houseData, setHouseData] = useState([]);

  const data = useSelector(state => state.data.data);
  const likeData = useSelector(state => state.likedata.likedata);

  useEffect(() => {
    setHouseData(data);
  }, [data]);

  // ------------------------------------------------------------------

  const addToLikePage = (e, i) => {
    
  }


  return (
    <div className="cards">
      <div className="cards-main">
        {
          houseData && houseData.map((item, index) => {
            return (
              <div className="card" key={index}>
                <div className="img">
                  <img src={item.image} alt="" />
                </div>
                <div className="price">
                  <span>₹ {item.price} / day</span>
                  <Heart className='like'
                    //  backgroundColor='grey' 
                    color="red"
                    size={20}
                    onClick={(e) => addToLikePage(e, index)}
                  />
                </div>
                <div className="name">
                  <h3>{item.name}</h3>
                </div>
                <div className="address">
                  <span>{item.address}, {item.city}</span>
                </div>
                <div className="capacity">
                  <span><IoBedOutline /> {item.info.bed} Beds</span>
                  <span><MdOutlineBathroom /> {item.info.bathrooms} Bathrooms</span>
                  <span><LiaExternalLinkSquareAltSolid /> {item.info.area} Area</span>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Cards