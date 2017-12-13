import React from 'react';
import { View, TextInput, Text, Animated, Easing, Image } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);
const AnimatedIonicon = Animated.createAnimatedComponent(Ionicon);

class FloatingLabelInput extends React.Component {
  state = {
    isFocused: false,
    inputValue: '',
  }

  animatedValue = new Animated.Value(this.state.inputValue === '' ? 0 : 1);

  componentDidUpdate() {
    let toValue = this.state.isFocused || this.state.inputValue !== '' ? 1 : 0;
    Animated.timing(
      this.animatedValue,
      {
        toValue,
        easing: Easing.elastic(1),
        duration: 250
      }
    ).start();
  }

  handleFocus = () => this.setState({ isFocused: true });

  handleBlur = () => this.setState({ isFocused: false });

  render() {
    const {
      width = 80,
      height = 60,
      placeholder = 'Placeholder',
      secureTextEntry = false,
      icon = 'ios-person-outline',
      showIcon = true
    } = this.props;

    const { isFocused } = this.state;

    const styles = {
      container: {
        height,
        width: `${width}%`,
        paddingTop: 20,
        alignItems: 'flex-start',
        justifyContent: 'flex-end'
      },
      label: {
        position: 'absolute',
        left: showIcon ? 35 : 5,
        fontFamily: 'nunito-light',
        top: this.animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [height / 2 - 14, 0]
        }),
        fontSize: this.animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [20, 14]
        }),
        color: this.animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: ['rgba(255, 255, 255, 0.4)', 'rgba(255, 255, 255, 1)']
        })
      },
      input: {
        height: height - 14,
        width: '100%',
        fontFamily: 'nunito-regular',
        fontSize: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingHorizontal: showIcon ? 35 : 5,
        color: '#fff'
      },
      icon: {
        position: 'absolute',
        left: 5,
        bottom: 10,
        color: '#FFF'
      },
      imageIcon: {
        position: 'absolute',
        left: 5,
        bottom: 15,
        height: 25,
        width: 25
      }
    }
    return (
      <View style={styles.container}>
        <Animated.Text style={styles.label}>{placeholder}</Animated.Text>
        <AnimatedTextInput
          style={styles.input}
          underlineColorAndroid={styles.label.color}
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
          onChangeText={(text) => this.setState({ inputValue: text })}
          blurOnSubmit
          secureTextEntry={secureTextEntry}
        />
        {/* <Ionicon
          style={styles.icon}
          name={icon}
          size={35}
        /> */}
        {
          showIcon &&
          <Image
            style={styles.imageIcon}
            resizeMode="cover"
            source={icon}
          />
        }
      </View>
    );
  }
}

export default FloatingLabelInput;
