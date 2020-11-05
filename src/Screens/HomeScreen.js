import React, {useEffect, useState} from 'react';
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
// import {_storeData, _getData} from '@utils';
import AsyncStorage from '@react-native-community/async-storage';

const HomeScreen = ({navigation}) => {
  let [phoneNumber, setPhoneNumber] = useState('');

  const submitLoginCredentials = async () => {
    let response = await AsyncStorage.setItem(
      'phoneNumber',
      JSON.stringify(phoneNumber),
    );
    navigation.navigate('Details');
  };
  return (
    <Container>
      {/* <Header /> */}
      <Content>
        <Card
          style={{
            display: 'flex',
            marginTop: 200,
            // justifyContent: 'center',
            // alignSelf: 'center',
          }}>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignSelf: 'center',
              marginTop: 20,
              flexDirection: 'row',
            }}>
            <Image
              style={{
                width: 40,
                height: 35,
                justifyContent: 'center',
                marginRight: 10,
              }}
              source={require('../images/launcher_small.png')}
            />
            <Image
              style={{width: 150, height: 35, justifyContent: 'center'}}
              source={require('../images/go_dutch_small.png')}
            />
          </View>
          <View
            style={{
              flex: 1,
              alignSelf: 'center',
              marginTop: 10,
              justifyContent: 'center',
              width: '100%',
              height: 100,
            }}>
            <Item style={{width: 300, alignSelf: 'center'}}>
              <Text style={{fontSize: 17, marginRight: 10, color: 'black'}}>
                +91
              </Text>
              <Input
                placeholder="Enter Phone Number"
                keyboardType="numeric"
                maxLength={10}
                onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
                value={phoneNumber}
                style={{color: 'red'}}
                onSubmitEditing={() => submitLoginCredentials()}
              />
            </Item>
          </View>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignSelf: 'center',
              margin: 10,
            }}>
            <Button
              onPress={() => submitLoginCredentials()}
              disabled={phoneNumber && phoneNumber.length >= 10 ? false : true}
              style={{
                height: 45,
                width: 150,
                backgroundColor:
                  phoneNumber && phoneNumber.length >= 10 ? '#5a67f2' : 'gray',
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
                Continue
              </Text>
            </Button>
          </View>
        </Card>
      </Content>
    </Container>
  );
};

export default HomeScreen;
