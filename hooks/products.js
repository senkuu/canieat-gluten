import React, {useState, useEffect} from 'react';

import firebaseApp from '../firebase';
import 'firebase/firestore';

// utils
import {getProductFromApi} from '../utils/functions';

export const useGetProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // L'utilisation de "onSnapshot" permet de réactualiser la liste a chaque modification (notamment l'ajout d'un nouveau produit)
    firebaseApp
      .firestore()
      .collection('products')
      .orderBy('dateScanned', 'desc')
      .onSnapshot(function(querySnapshot) {
        const temporaryProducts = [];
        querySnapshot.docs.forEach(function(doc) {
          temporaryProducts.push({id: doc.id, ...doc.data()});
        });
        setProducts(temporaryProducts);
        setLoading(false);
      });
  }, []);
  return [products, loading];
};

export const useGetProductInformationsFromAPI = barcode => {
  const [productInformations, setProductInformations] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async function initProductInformations() {
      setProductInformations(await getProductFromApi(barcode));
      setIsLoading(false);
    })();
  }, []);

  return [productInformations, isLoading];
};
