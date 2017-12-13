import React from 'react';
import { View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterStepOneScreen from './screens/RegisterStepOneScreen';
import RegisterStepTwoScreen from './screens/RegisterStepTwoScreen';
import RegisterStepThreeScreen from './screens/RegisterStepThreeScreen';

const AppNavigator = StackNavigator({
  Splash: {
    screen: SplashScreen,
    navigationOptions: {
      header: null
    }
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null
    }
  },
  RegisterStepOne: {
    screen: RegisterStepOneScreen,
    navigationOptions: {
      headerTitle: 'Ingresa tus datos'
    }
  },
  RegisterStepTwo: {
    screen: RegisterStepTwoScreen,
    navigationOptions: {
      headerTitle: 'Valida tu e-mail'
    }
  },
  RegisterStepThree: {
    screen: RegisterStepThreeScreen,
    navigationOptions: {
      headerLeft: null,
      headerTitle: 'Registro completado'
    }
  }
},
{
  navigationOptions: {
    headerTitle: 'Registro',
    headerBackTitleStyle: {
      color: '#FFF'
    },
    headerTintColor: '#FFF',
    headerTitleStyle: {
      color: '#FFF',
      fontFamily: 'nunito-regular',
      fontSize: 24,
      fontWeight: '200', // Fix, since default one is 500
      marginLeft: 55,
    },
    headerStyle: {
      backgroundColor: '#26E9CC',
    }
  },
  initialRouteName: 'Login'
});

class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppNavigator />
      </View>
    )
  }
}

export default AppNavigator;
