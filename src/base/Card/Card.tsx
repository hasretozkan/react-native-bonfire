import React from 'react';
import { View, ViewStyle } from 'react-native';

export interface CardProps {
  /** Card style */
  style?: ViewStyle;

  /** Card border radius type */
  border?: 'none' | 'rounded' | 'full';

  /** Card color mode */
  mode: 'light' | 'dark';

  /** Card shadow */
  shadow?: boolean;

  /** Card margin */
  margin?: number;

  /** Card padding */
  padding?: number;
}

export const Card: React.FunctionComponent<CardProps> = ({
  style = {},
  children,
  border = 'none',
  shadow = false,
  mode = 'light',
  margin = 0,
  padding = 0,
  ...rest
}) => {
  let extraStyle: ViewStyle = {
    borderWidth: 1,
    borderColor: 'lightgray',
    margin,
    padding,
    backgroundColor: mode === 'light' ? 'white' : '#4c4c4c',
  };

  if (shadow) {
    extraStyle = {
      ...extraStyle,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    };
  }

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
