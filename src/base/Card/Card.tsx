import React from 'react';
import { View, ViewStyle } from 'react-native';

export interface CardProps {
  /**  Add additional styling for Card. */

  /** Card style */
  style?: ViewStyle;

  /** Card border radius type */
  border?: 'none' | 'rounded' | 'full';

  /** Card color mode */
  mode: 'light' | 'dark';
}

export const Card: React.FunctionComponent<CardProps> = ({
  style = {},
  children,
  border = 'none',
  mode = 'light',
  ...rest
}) => {
  let extraStyle: ViewStyle = {
    borderWidth: 1,
    borderColor: 'lightgray',
    backgroundColor: mode === 'light' ? 'white' : '#4c4c4c',
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

  return (
    <View style={[extraStyle, style]} {...rest}>
      {children}
    </View>
  );
};

Card.displayName = 'Card';
