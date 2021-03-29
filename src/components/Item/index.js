import React from 'react';
import { Link } from 'react-router-dom';

export const Item = ({item}) => {
    return (
      <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
        <Link to={`/item/${item.id}`}>
              <div className="card-flyer">
                <div className="text-box">
                  <div className="image-box">
                    <img src={item.pictureUrl} alt="" style={{width: "18rem"}} />
                  </div>
                  <div className="text-container" key={item.id}>
                    <h6 className="card-title">{item.title}</h6>
                    <div className="price text-success"><h5 className="mt-4">${item.price}</h5></div>
                  </div>
                </div>
              </div>
            </Link>
        </div>
    )
}