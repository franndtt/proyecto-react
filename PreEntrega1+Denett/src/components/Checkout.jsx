import { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import Logo from "../assets/images/logo.svg"


const Checkout = () => {
    const [Nombre, setNombre] = useState("");
    const [Email, setEmail] = useState("");
    const [Telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");
    const { cart, CantidadTotalProductos, SumTotalProductos } = useContext(CartContext);

    const generarOrden = () => {
        if (Nombre.length === 0 || Email.length === 0 || Telefono.length === 0) {
            return false;
        }

        const buyer = { name: Nombre, email: Email, phone: Telefono };
        const items = cart.map(item => ({ id: item.idx, title: item.title, price: item.price }));
        const fecha = new Date();
        const date = `${fecha.getDate()}-${fecha.getMonth() + 1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}`;
        const total = SumTotalProductos();
        const order = { buyer: buyer, items: items, date: date, total: total };

        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then(resultado => {
            setOrderId(resultado.id);
        });
    };

    if (CantidadTotalProductos() === 0) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                         <h1>¡Atencion!</h1>
                        <div className="alert alert-danger" role="alert">
                            No se han encontrado productos en el carrito
                        </div>
                        <Link to={"/category/productos"} className="btn btn-dark my-3">Volver</Link>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="container">
                <div className="row">
                    {orderId ? (
                        <div className="col bg-dark text-center text-light mt-5">
                            <h1 className="">¡Gracias por tu compra! 🛍️</h1>
                            <h3>Tu ID de compra es: <b>{orderId}</b> </h3>
                            <h5>Estado de envio: pendiente</h5>
                            <img src={Logo} alt="" width={150} />

                        </div>
                    ) : (
                        <>
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col">
                                        <p className="fs-4">Complete los datos </p>
                                    </div>
                                </div>
                                <form>
                                    <div className="mb-3">
                                        <label className="form-label">Nombre</label>
                                        <input type="text" className="form-control" onInput={(e) => { setNombre(e.target.value) }} />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Email</label>
                                        <input type="text" className="form-control" onInput={(e) => { setEmail(e.target.value) }} />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Telefono</label>
                                        <input type="text" className="form-control" onInput={(e) => { setTelefono(e.target.value) }} />
                                    </div>
                                    <button type="button" className="btn btn-dark" onClick={generarOrden}>Generar orden</button>
                                </form>
                            </div>
                            <div className="col-md-6 text-center">
                                <div className="row">
                                    <div className="col">
                                        <p className="fs-4">Resumen de compra</p>
                                    </div>
                                </div>
                                <table className="table">
                                    <tbody>
                                        {cart.map(product =>
                                            <tr key={product.id}>
                                                <td className="align-middle"><img src={product.image} alt={product.title} width={80} className="img-fluid mx-auto d-block" /></td>
                                                <td className="align-middle">{product.title}</td>
                                                <td className="align-middle">${product.price}</td>
                                                <td className="align-middle">{product.quantity}</td>
                                                <td className="align-middle">${product.quantity * product.price}</td>
                                            </tr>
                                        )}
                                        <tr>
                                            <td colSpan={4} className="text-center alling-middle">Total</td>
                                            <td className="text-star">${SumTotalProductos()}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </>
                    )}
                </div>
            </div>
        );
    }
};

export default Checkout;
