import React from 'react';

export const Item = ({item}) => {
    return (
        <a href="">
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
            </a>
    )
}