import React, {useEffect, useState} from 'react';
import {View, Image} from 'react-native';
import {_storeData, _getData} from '@utils';
import AsyncStorage from '@react-native-community/async-storage';

const SplashScreen = ({navigation}) => {
  const handleNavigation = async () => {
    let response = await AsyncStorage.getItem('phoneNumber');
    if (response) {
      let userDetails = await AsyncStorage.getItem('userDetails');
      userDetails = JSON.parse(userDetails);
      if (userDetails && userDetails.UpiID) {
        navigation.navigate('Profile');
      } else {
        navigation.navigate('Details');
      }
    }
  };

  useEffect(() => {
    handleNavigation();
  }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#5a67f2',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        style={{width: 200, height: 50}}
        source={require('../images/goDutch.png')}
      />
    </View>
  );
};

export default SplashScreen;
