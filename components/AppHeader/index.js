import React from 'react';
import {View, Text} from 'react-native';

// import styles
import {globalStyle} from '../../style/global';

function AppHeader() {
  return (
    <View style={globalStyle.header}>
      <Text style={globalStyle.headerText}>CAN I EAT : Gluten Edition</Text>
    </View>
  );
}

export default AppHeader;
