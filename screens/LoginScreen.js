import React from 'react';
import { View, StatusBar, Image, Dimensions, Text } from 'react-native';

const dimensions = Dimensions.get('window');

import FloatingLabelInput from '../components/FloatingLabelInput';
import RoundedButton from '../components/RoundedButton';

class LoginScreen extends React.Component {
  render() {
    const { navigation: { navigate }} = this.props;
    const styles = {
      container: {
        height: dimensions.height,
        width: dimensions.width,
        backgroundColor: '#2BABE2',
        alignItems: 'center',
        justifyContent: 'space-around'
      },
      logo: {
        maxWidth: dimensions.width / 2,
        maxHeight: dimensions.height / 5,
        marginTop: 100
      },
      register: {
        fontFamily: 'nunito-regular',
        color: '#FFF',
        fontSize: 20
      },
      forgotPassword: {
        fontFamily: 'nunito-light',
        color: '#FFF',
        fontSize: 20,
        marginBottom: 35
      }
    }
    return (
      <View style={styles.container}>
        <StatusBar  
          hidden={false}
          backgroundColor="#0288D1"
        />
        <Image
          resizeMode="contain"
          style={styles.logo}
          source={require('../assets/images/logo.png')}
        />
        <FloatingLabelInput
          width={75}
          icon={require('../assets/icons/ic_icon_username.png')}
          placeholder="Usuario"
        />
        <FloatingLabelInput
          width={75}
          secureTextEntry
          icon={require('../assets/icons/ic_icon_password.png')}
          placeholder="Contraseña"
        />
        <RoundedButton
          label="Iniciar Sesión"
        />
        <Text
          onPress={() => navigate('RegisterStepOne')}
          style={styles.register}
        >
          Regístrate
        </Text>
        <Text style={styles.forgotPassword}>
          ¿Olvidaste tu contraseña?
        </Text>
      </View>
    );
  }
}

export default LoginScreen;
