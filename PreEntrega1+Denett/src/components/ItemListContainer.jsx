

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//  import arrayProductos from "./json/productos.json";
import ItemList from "./ItemList";
import { getFirestore, collection, query, where, getDoc, getDocs } from "firebase/firestore";
import Loading from "./Loading";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

   // ========Por las dudas=========
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       let filteredItems = arrayProductos;

        
  //       if (category) {
  //         const formattedCategory = category.toLowerCase(); 
  //         filteredItems = arrayProductos.filter(
  //           (item) => item.categoria.toLowerCase() === formattedCategory
  //         );
  //       }

  //       setItems(filteredItems);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, [category]);

  //FireBase

  //  useEffect(() => {
  //    const db = getFirestore();
  //    const itemsCollection = collection(db, "items")

  //    arrayProductos.forEach(producto => {
  //      addDoc(itemsCollection, producto);

      
  //    })
  //  }, [])

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");
    let consulta = itemsCollection;

    if (id && id !== "productos") {
      consulta = query(itemsCollection, where("categoria", "==", id));
    }

    getDocs(consulta).then((resultado) => {
      setLoading(false);
      setItems(resultado.docs.map((producto) => ({ id: producto.id, ...producto.data() })));
    });
  }, [id]);

  return (
    <div className="container">
      <div className="row">
        <div className="col d-flex align-items-center justify-content-center">
          {loading ? <Loading /> : <ItemList items={items} />}
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;

