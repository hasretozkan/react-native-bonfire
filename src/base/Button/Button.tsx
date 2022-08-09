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

  /** Button border radius type */
  border?: 'none' | 'rounded' | 'full';
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
  border,
  textType = 'p',
  ...rest
}) => {
  let extraStyle: ViewStyle = {};
  const defaultStyle: any = {
    default: {
      padding: 10,
      backgroundColor: constants.PRIMARY,
      alignItems: 'center',
      justifyContent: 'center',
    },
    success: {
      padding: 10,
      backgroundColor: constants.SUCCESS,
      alignItems: 'center',
      justifyContent: 'center',
    },
    info: {
      padding: 10,
      backgroundColor: constants.INFO,
      alignItems: 'center',
      justifyContent: 'center',
    },
    error: {
      padding: 10,
      backgroundColor: constants.ERROR,
      alignItems: 'center',
      justifyContent: 'center',
    },
    warning: {
      padding: 10,
      backgroundColor: constants.WARNING,
      alignItems: 'center',
      justifyContent: 'center',
    },
  };

  if (border === 'rounded') {
    extraStyle = {
      ...extraStyle,
      borderRadius: 4,
    };
  } else if (border === 'full') {
    extraStyle = {
      ...extraStyle,
      borderRadius: 9999,
    };
  }

  if (text) {
    return (
      <TouchableOpacity
        onPress={() => onPress()}
        style={[extraStyle, defaultStyle[type], style]}
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
