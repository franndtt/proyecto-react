import React from 'react';

const ItemDetail = ({ item }) => {
  return (
    <div className="col d-flex align-items-center justify-content-center">
      {item && (
        <div className="card border-0">
          <div className="row">
            <div className="col-md-4 d-flex align-items-center justify-content-center">
              <img src={item.image} width={50} className="card-img-top" alt={item.title} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p>{item.price}</p>
                <p>{item.descripcion}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemDetail;
