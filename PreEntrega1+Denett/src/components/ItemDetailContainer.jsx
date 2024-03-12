import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import arrayProductos from './json/productos.json';
import ItemDetail from './ItemDetail';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import Loading from './Loading';


const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const product = arrayProductos.find((item) => item.id === parseInt(id));
  //       setItem(product || null);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, [id]);

  useEffect(() => {

    const db = getFirestore();
    const producto = doc(db, "items", id)
    getDoc(producto).then(resultado => {
      setLoading(false);
      setItem({id:resultado.id, ...resultado.data()})
    })

  }, [id]);
 
  return (
    <>
      {loading ? <Loading /> : <ItemDetail item={item} /> };   
    </>
  )         
}; 

export default ItemDetailContainer;

