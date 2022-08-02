import React from 'react';
import {
  Text as NativeText,
  StyleSheet,
  TextProps as TextProperties,
  TextStyle,
  StyleProp,
} from 'react-native';

export interface TextProps extends TextProperties {
  /**  Add additional styling for Text. */
  style?: StyleProp<TextStyle>;

  /** Type of Text. */
  type?: string;
}

/** Text displays words and characters of various sizes.
 */
export const Text: React.FunctionComponent<TextProps> = ({
  style = {},
  type = 'p',
  children = '',
  ...rest
}) => {
  const defaultStyle: any = {
    h1: {
      fontSize: 48,
    },
    h2: {
      fontSize: 40,
    },
    h3: {
      fontSize: 32,
    },
    h4: {
      fontSize: 24,
    },
    h5: {
      fontSize: 16,
    },
    p: {
      fontSize: 12,
    },
  };

  return (
    <NativeText
      accessibilityRole="text"
      style={StyleSheet.flatten([defaultStyle[type], style])}
      {...rest}
    >
      {children}
    </NativeText>
  );
};

Text.displayName = 'Text';
