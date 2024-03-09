import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cart, setcart] = useState([]);

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            let pos = cart.findIndex(product => product.id === item.id);
            cart[pos].quantity += quantity; 
            setcart([...cart]);
        } else {
            
            const priceWithoutSymbol = parseFloat(item.price.replace("$", ""));
            setcart([...cart, {...item, quantity:quantity, price: priceWithoutSymbol}]);
        }
    }

    const removeItem = (id) => {
        const items = cart.filter(product => product.id != id)
        setcart([...items]);
    }

    const clear = () => {
        setcart([]);
    }

    const isInCart = (id) => {
        return cart.some(item => item.id === id);
    }

    const CantidadTotalProductos = () => {
        return cart.reduce((acum, product) => acum += product.quantity, 0);
    }

    const SumTotalProductos = () => {
        return cart.reduce((acum, product) => acum += product.quantity * product.price, 0);
       }


    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clear, CantidadTotalProductos, SumTotalProductos}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider