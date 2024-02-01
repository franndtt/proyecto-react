import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import arrayProductos from './json/productos.json';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const product = arrayProductos.find((item) => item.id === parseInt(id));
        setItem(product || null);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;

