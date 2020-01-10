import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

// import styles
import {homeStyle} from '../../style/home';
import {fontsStyle} from '../../style/fonts';

function ScanButtonView(props) {
  const handleScanPress = () => {
    props.handleButtonOpen();
  };

  return (
    <View style={homeStyle.scanButtonView}>
      <TouchableOpacity style={homeStyle.scanButton} onPress={handleScanPress}>
        <Text style={fontsStyle.scanButtonText}>Scanner</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ScanButtonView;
