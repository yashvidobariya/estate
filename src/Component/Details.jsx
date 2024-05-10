import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../src/data/portfolio.json';
import '../css/Index.css'
import { motion } from "framer-motion"

const PortfolioDetails = () => {
  const { id } = useParams();
  const selectitem = data.find(item => item.id === parseInt(id));

  if (!selectitem) {
    return <div>Item not found</div>;
  }
  const imageUrl = process.env.PUBLIC_URL + selectitem.image;

  return (
    <>
      <div className='details'>
      </div>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="port-detail-content">
        <div className="port-detail-cap1">
          <div className="port-detail-div">
            <div className="port-detail-info">
              <h3>{selectitem.name}</h3>

            </div>
            <div className="port-info-box">
              <div className="port-detail-info">
                <p>{selectitem.description}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="det-content">
        <div className="det-cap">
          <div className="det-bg">

            <div className="det-info">
              <img src={imageUrl} alt="" />
            </div>
          </div>


        </div>
        <div className="det-cap1">
          <div className="det-img">

            <div className="det-info">
              <div className="amenities">
                <h3>Amenities:</h3>
                <ul>
                  {selectitem.amenities.map((amenity, index) => (
                    <li key={index}>{amenity}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>


      {/* <div className="details-info">
        <p>{selectitem.details}</p>
      </div> */}

    </>
  );
}


export default PortfolioDetails;
