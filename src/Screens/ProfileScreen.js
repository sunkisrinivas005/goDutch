import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {
  Container,
  Input,
  Content,
  Card,
  CardItem,
  Body,
  Form,
  Item,
  Label,
  Icon,
  Button,
} from 'native-base';
import {_getData} from '@utils';
import AsyncStorage from '@react-native-community/async-storage';
let types = {
  phoneNumber: '',
};
const ProfileScreen = ({navigation}) => {
  let [details, setDetails] = useState({});

  const handleGetDetails = async () => {
    let userDetails = await AsyncStorage.getItem('userDetails');
    let phoneNumber = await AsyncStorage.getItem('phoneNumber');
    console.log(userDetails, phoneNumber, 'checking');
    userDetails = JSON.parse(userDetails);
    setDetails({
      ...userDetails,
      phoneNumber: phoneNumber,
    });
  };

  useEffect(() => {
    handleGetDetails();
  }, []);

  const handleRemoveItem = async () => {
    let response = await AsyncStorage.multiRemove([
      'phoneNumber',
      'userDetails',
    ]);
    navigation.navigate('Home');
  };
  return (
    <Container>
      <Content>
        <View>
          <Text
            style={{
              fontWeight: 'bold',
              padding: 10,
              margin: 10,
              fontSize: 20,
              fontFamily: 'Lato',
            }}>
            User Details
          </Text>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#e8e8e8',
            margin: 10,
            padding: 10,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 20, fontFamily: 'Lato'}}>
            Name
          </Text>
          <Text style={{fontFamily: 'Lato', fontSize: 20, color: '#5a67f2'}}>
            {details.Name}
          </Text>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#e8e8e8',
            margin: 10,
            padding: 10,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 20, fontFamily: 'Lato'}}>
            Mobile No
          </Text>
          <Text style={{fontFamily: 'Lato', fontSize: 20, color: '#5a67f2'}}>
            {details.phoneNumber}
          </Text>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#e8e8e8',
            margin: 10,
            padding: 10,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 20, fontFamily: 'Lato'}}>
            Upi ID
          </Text>
          <Text style={{fontFamily: 'Lato', fontSize: 20, color: '#5a67f2'}}>
            {details.UpiID}
          </Text>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#e8e8e8',
            margin: 10,
            padding: 10,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 20, fontFamily: 'Lato'}}>
            Professional
          </Text>
          <Text style={{fontFamily: 'Lato', fontSize: 20, color: '#5a67f2'}}>
            {details.type}
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignSelf: 'center',
            margin: 10,
          }}>
          <Button
            onPress={() => handleRemoveItem()}
            //   disabled={phoneNumber && phoneNumber.length >= 10 ? false : true}
            style={{
              height: 45,
              width: 150,
              backgroundColor: '#5a67f2',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontFamily: 'Lato',
                color: 'white',
                fontWeight: 'bold',
                fontSize: 18,
              }}>
              Logout
            </Text>
          </Button>
        </View>
      </Content>
    </Container>
  );
};

export default ProfileScreen;
