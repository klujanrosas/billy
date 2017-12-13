import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

class RoundedButton extends React.Component {
  render() {
    const {
      label = 'label',
      height = 55,
      width = 75,
      color = '#FFADA4',
      onPress = () => alert('No action.')
    } = this.props;

    const styles = {
      container: {
        height,
        width: `${width}%`,
        elevation: 3,
        backgroundColor: color,
        borderRadius: height / 3,
        alignItems: 'center',
        justifyContent: 'center'
      },
      label: {
        fontSize: 18,
        fontFamily: 'nunito-regular',
        color: '#FFF'
      }
    };
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={onPress}
      >
        <Text style={styles.label}>{label}</Text>
      </TouchableOpacity>
    );
  }
}

export default RoundedButton;
