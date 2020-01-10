import React from 'react';
import {ScrollView, View, Text} from 'react-native';

// import hooks
import {useGetProducts} from '../../hooks/products';

// import external components
import {Bubbles} from 'react-native-loader';

// import styles
import {homeStyle} from '../../style/home';
import ProductItem from './ProductItem';

const ProductsHistory = props => {
  const [products, loading] = useGetProducts();

  if (loading === true) {
    return (
      <View style={{alignItems: 'center'}}>
        <Bubbles size={15} color="#20B2AA" />
      </View>
    );
  }
  return (
    <ScrollView overScrollMode="always" style={homeStyle.scrollProductView}>
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ScrollView>
  );
};

export default ProductsHistory;
