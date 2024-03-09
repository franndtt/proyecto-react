import React, { useContext } from 'react';
import ItemCount from './ItemCount';
import { CartContext } from './context/CartContext';


const ItemDetail = ({ item }) => {

  const {addItem} = useContext(CartContext);

  const onAdd = (quantity) => {
    
    addItem(item, quantity);
  }

   

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
                <ItemCount stock={item.stock} onAdd={onAdd}  />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemDetail;
