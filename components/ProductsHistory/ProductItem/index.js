// ALERT je n'ai pas eu le temps de terminer cette partie

import React, {useState} from 'react';
import {TouchableOpacity, Text, Modal} from 'react-native';

// import styles
import {homeStyle} from '../../../style/home';
import {fontsStyle} from '../../../style/fonts';
import ProductInformations from '../../ProductInformation';

function ProductItem(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsModalOpen(true)}
        style={homeStyle.productContainer}>
        <Text style={fontsStyle.productName}>{props.product.name}</Text>
        <Text style={fontsStyle.productScanDate}>
          {props.product.dateScanned.toDate().toDateString()
            ? props.product.dateScanned.toDate().toDateString()
            : null}
        </Text>
      </TouchableOpacity>
      <Modal animationType="slide" visible={isModalOpen}>
        <ProductInformations
          barcode={props.product.barcode}
          onClose={() => setIsModalOpen(false)}
        />
      </Modal>
    </>
  );
}

export default ProductItem;
