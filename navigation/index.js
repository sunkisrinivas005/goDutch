import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {routes} from './routes';
import {SplashScreen} from '@Screens';
import {_getData} from '@utils';

const Stack = createStackNavigator();

const Navigation = () => {
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    // setLoading(true);
    // console.log(navigation)
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        {loading && (
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
        )}
        {routes.map((i, n) => {
          let {name, component} = i;
          return <Stack.Screen key={n} name={name} component={component} />;
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
