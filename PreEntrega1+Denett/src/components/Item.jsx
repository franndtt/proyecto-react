import { Link } from "react-router-dom";

const Item = ({ item }) => {
    return (
      <div className="col">
        <div className="card">
          <Link to={"/item/" + item.id} className="text-decoration-none text-dark"> 


          <img src={item.image} className="card-img-top" alt={item.title} />
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p>{item.price}</p>
            
          </div>

          </Link>
        </div>
      </div>
    );
  };
  
  export default Item;