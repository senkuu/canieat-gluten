import firebaseApp from '../firebase';
import firebase from 'firebase';
import 'firebase/firestore';

export const getProductFromApi = async barcode => {
  try {
    const response = await fetch(
      'https://fr.openfoodfacts.org/api/v0/produit/' + barcode + '.json',
    );
    const responseJSON = await response.json();
    return responseJSON.product;
  } catch (e) {
    console.error(e);
  }
};

export const addProductToDatabase = product => {
  firebaseApp
    .firestore()
    .collection('products')
    .add({
      name: product.product_name,
      barcode: product.code,
      dateScanned: firebase.firestore.FieldValue.serverTimestamp(),
    });
};
