import React, {useState} from 'react';
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
import AsyncStorage from '@react-native-community/async-storage';

const DetailsScreen = ({navigation}) => {
  let [Name, setFullName] = useState('');
  let [UpiID, setUpiID] = useState('');
  let [type, setType] = useState('Student');

  const submitLoginCredentials = async () => {
    let response = await AsyncStorage.setItem(
      'userDetails',
      JSON.stringify({Name, UpiID, type}),
    );
    navigation.navigate('Profile');
  };
  return (
    <Container>
      <Content>
        <Card
          style={{
            display: 'flex',
            marginTop: 200,
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
          <View>
            <Text style={{margin: 25, fontWeight: 'bold', fontSize: 20}}>
              Create an Account
            </Text>
          </View>
          <View style={{marginTop: 10}}>
            <Text style={{margin: 10, fontWeight: 'bold'}}>
              Current Profession
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                // alignSelf: 'center',
              }}>
              <View
                style={{
                  width: 100,
                  borderWidth: 1,
                  alignItems: 'center',
                  borderColor: type === 'Student' ? '#5a67f2' : 'grey',
                  height: 30,
                }}>
                <Text
                  style={{
                    alignSelf: 'center',
                    textAlign: 'center',
                    justifyContent: 'center',
                    margin: 3,
                    padding: 2,
                    fontWeight: 'bold',
                    color: type === 'Student' ? '#5a67f2' : 'black',
                  }}
                  onPress={() => setType('Student')}>
                  Student
                </Text>
              </View>
              <View
                style={{
                  width: 100,
                  borderWidth: 1,
                  borderColor: type === 'Professional' ? '#5a67f2' : 'grey',
                  height: 30,
                }}>
                <Text
                  style={{
                    alignSelf: 'center',
                    textAlign: 'center',
                    justifyContent: 'center',
                    margin: 3,
                    padding: 2,
                    fontWeight: 'bold',
                    color: type === 'Professional' ? '#5a67f2' : 'black',
                  }}
                  onPress={() => setType('Professional')}>
                  Professional
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              alignSelf: 'center',
              marginTop: 15,
              justifyContent: 'center',
              width: '100%',
            }}>
            <Item style={{width: 300, alignSelf: 'center'}}>
              <Input
                placeholder="Enter Full Name"
                maxLength={20}
                onChangeText={(name) => setFullName(name)}
                value={Name}
                style={{color: 'red'}}
              />
            </Item>
            <Item style={{width: 300, alignSelf: 'center', marginTop: 30}}>
              <Input
                placeholder="Enter Upi ID"
                maxLength={20}
                onChangeText={(UpiID) => setUpiID(UpiID)}
                value={UpiID}
                style={{color: 'red'}}
              />
            </Item>

            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignSelf: 'center',
                margin: 20,
              }}>
              <Button
                onPress={() => submitLoginCredentials()}
                disabled={UpiID && Name ? false : true}
                style={{
                  height: 45,
                  width: 150,
                  backgroundColor:
                    UpiID.length && Name.length ? '#5a67f2' : 'gray',
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
          </View>
        </Card>
      </Content>
    </Container>
  );
};

export default DetailsScreen;
