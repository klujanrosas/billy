import React from 'react';
import { View, Image, Dimensions, StatusBar } from 'react-native';

const dimensions = Dimensions.get('window');

class SplashScreen extends React.Component {
  componentDidMount() {
    const {
      navigation: {
        navigate
      }
    } = this.props;
    setTimeout(
      () => navigate('Login'),
      1500
    )
  }

  render() {
    const styles = {
      container: {
        flex: 1,
        backgroundColor: '#2BABE2',
        alignItems: 'center',
        justifyContent: 'center'
      },
      logo: {
        maxWidth: dimensions.width / 3,
      }
    };

    return (
      <View
        style={styles.container}
      >
        <StatusBar hidden showHideTransition="fade" backgroundColor="#2BABE2" />
        <Image
          resizeMode="contain"
          source={require('../assets/images/logo.png')}
          style={styles.logo}
        />
      </View>
    );
  }
}

export default SplashScreen;
