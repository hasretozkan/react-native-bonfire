import React from 'react';
import {
  TextStyle,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import { Text } from '../Text';
import constants from '../../constants';

export interface ButtonProps {
  /**  Add additional styling for Button. */
  style?: StyleProp<ViewStyle>;

  /** Type of Button. */
  type?: 'default' | 'success' | 'info' | 'warning' | 'error';

  /** Text of Button */
  text?: string;

  /** OnPress action of Button */
  onPress?: Function;

  /** Text Style of Button */
  textStyle?: TextStyle;

  /** Text font size type */
  textType?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
}

/** Text displays words and characters of various sizes.*/
export const Button: React.FunctionComponent<ButtonProps> = ({
  style = {},
  type = 'default',
  children = '',
  text = '',
  onPress = () => null,
  textStyle = {
    color: 'white',
    fontWeight: 'bold',
  },
  textType = 'p',
  ...rest
}) => {
  const defaultStyle: any = {
    default: {
      padding: 10,
      backgroundColor: constants.PRIMARY,
      borderRadius: 4,
      alignItems: 'center',
      justifyContent: 'center',
    },
    success: {
      padding: 10,
      backgroundColor: constants.SUCCESS,
      borderRadius: 4,
      alignItems: 'center',
      justifyContent: 'center',
    },
    info: {
      padding: 10,
      backgroundColor: constants.INFO,
      borderRadius: 4,
      alignItems: 'center',
      justifyContent: 'center',
    },
    error: {
      padding: 10,
      backgroundColor: constants.ERROR,
      borderRadius: 4,
      alignItems: 'center',
      justifyContent: 'center',
    },
    warning: {
      padding: 10,
      backgroundColor: constants.WARNING,
      borderRadius: 4,
      alignItems: 'center',
      justifyContent: 'center',
    },
  };

  if (text) {
    return (
      <TouchableOpacity
        onPress={() => onPress()}
        style={[defaultStyle[type], style]}
        activeOpacity={0.9}
        {...rest}
      >
        <Text style={[textStyle]} type={textType}>
          {text}
        </Text>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      {...rest}
      onPress={() => onPress()}
      style={[defaultStyle[type], style]}
    >
      {children}
    </TouchableOpacity>
  );
};

Button.displayName = 'Button';
