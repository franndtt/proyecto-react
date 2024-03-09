import { useContext } from "react";
import LogoCarrito from "../assets/images/cart.svg"
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const {CantidadTotalProductos} = useContext(CartContext);
  return (
    CantidadTotalProductos() > 0 ? <Link to={"/cart"} className="btn btn-light position-relative">
        <img src={LogoCarrito} alt="Carrito" width={20} />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{CantidadTotalProductos()}</span>
    </Link> : ""
)
}

export default CartWidget