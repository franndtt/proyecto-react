import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";
import trash from "../assets/trash.svg"

const Cart = () => {
     const {cart, removeItem, CantidadTotalProductos, SumTotalProductos} = useContext(CartContext)

     if (CantidadTotalProductos() === 0) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                      <div className="alert alert-danger" role="alert">
                        ¡No se han encontrado productos en el carrito!
                    
                      </div>
                     <Link to={"/category/productos"} className="btn btn-dark my-3">Volver</Link>  
                    </div>
                </div>
            </div>
            
        ) 
     } else {
        return (
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h1>Productos Seleccionados</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <table className="table">
                            <tbody>
                                {cart.map(product =>
                                    <tr key={product.id}>
                                        <td className="align-middle"><img src={product.image} alt={product.title} width={80} className="img-fluid mx-auto d-block" /></td>
                                        <td className="align-middle">{product.title}</td>
                                        <td className="align-middle">${product.price}</td>
                                        <td className="align-middle">{product.quantity}</td>
                                        <td className="align-middle">${product.quantity * product.price}</td>
                                        <td className="align-middle"><a href="#" onClick={() => { removeItem(product.id) }}><img src={trash} alt="Eliminar Producto" title="Eliminar Producto" className="img-fluid mx-auto d-block" /></a></td>
                                    </tr>
                                )}
                                <tr>
                                    <td colSpan={4} className="text-right">Total</td>
                                    <td>${SumTotalProductos()}</td>
                                    <td>&nbsp;</td>
                                </tr>
                            </tbody>
                        </table>
                        <Link to={"/"} className="btn btn-dark my-3 p-2 text-white">Finalizar compra</Link>  
                    </div>
                </div>
            </div>
        )
     }
     

   
}

export default Cart;