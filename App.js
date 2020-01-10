// L'appli nous indique si l'aliment scanné contient du gluten
// il enregistre en base de donnés tout les produits déjà scanné avec l'appli contenant du gluten

import React, {useState} from 'react';
import {View, Modal} from 'react-native';

// import components
import AppHeader from './components/AppHeader';
import ScanButtonView from './components/ScanButtonView';
import ScanCamera from './components/ScanCamera';
import ProductInformations from './components/ProductInformation';

// import styles
import {globalStyle} from './style/global';
import ProductsHistory from './components/ProductsHistory';

import './fixtimerbug';

const App = () => {
  const [isPhotoModalActive, setIsPhotoModalActive] = useState(false);
  const [isProductModalActive, setIsProductModalActive] = useState(false);
  const [productBarCode, setProductBarCode] = useState({});

  const onBarCodeRead = async barcodeData => {
    setIsPhotoModalActive(false);
    setProductBarCode(await barcodeData);
    setIsProductModalActive(true);
  };

  return (
    <View style={globalStyle.container}>
      <AppHeader />
      <ScanButtonView handleButtonOpen={() => setIsPhotoModalActive(true)} />
      <ProductsHistory />
      <Modal animationType="slide" visible={isPhotoModalActive}>
        <ScanCamera
          handleBarCodeRead={onBarCodeRead}
          handleClose={() => setIsPhotoModalActive(false)}
        />
      </Modal>
      <Modal animationType="slide" visible={isProductModalActive}>
        <ProductInformations
          onClose={() => setIsProductModalActive(false)}
          barcode={productBarCode}
        />
      </Modal>
    </View>
  );
};

export default App;
