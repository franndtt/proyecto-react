

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import arrayProductos from "./json/productos.json";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        let filteredItems = arrayProductos;

        
        if (category) {
          const formattedCategory = category.toLowerCase(); 
          filteredItems = arrayProductos.filter(
            (item) => item.categoria.toLowerCase() === formattedCategory
          );
        }

        setItems(filteredItems);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [category]);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {items.length ? (
            <ItemList items={items} />
          ) : (
            <ItemList items={arrayProductos} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;

