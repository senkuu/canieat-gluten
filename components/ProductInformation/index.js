import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';
import {Bubbles} from 'react-native-loader';

// personal hooks
import {useGetProductInformationsFromAPI} from '../../hooks/products';

// utils
import {addProductToDatabase} from '../../utils/functions';

const ProductInformations = props => {
  const [productInformations, isLoading] = useGetProductInformationsFromAPI(
    props.barcode,
  );
  const [hasGluten, setHasGluten] = useState(false);

  useEffect(() => {
    if (productInformations.allergens) {
      if (productInformations.allergens.indexOf('gluten') !== -1) {
        setHasGluten(true);
        addProductToDatabase(productInformations);
      }
    }
  }, [productInformations]);

  if (isLoading) {
    return (
      <View style={{alignItems: 'center'}}>
        <Bubbles size={15} color="#20B2AA" />
        <Button title="Close" color="#20B2AA" onPress={props.onClose} />
      </View>
    );
  }
  if (hasGluten) {
    return (
      <View
        style={{
          height: '100%',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 28,
            marginBottom: 15,
            color: '#FF0000',
          }}>
          Il y a du Gluten c'est chaud la éloigne toi de cette horreur
        </Text>
        <Button title="Close" color="#FF0000" onPress={props.onClose} />
      </View>
    );
  }
  return (
    <View
      style={{
        height: '100%',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 28,
          marginBottom: 15,
          color: '#20B2AA',
        }}>
        Pas de gluten fréro
      </Text>
      <Button title="Close" color="#20B2AA" onPress={props.onClose} />
    </View>
  );
};

export default ProductInformations;
