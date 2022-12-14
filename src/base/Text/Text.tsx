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
  type?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

  /** Weight of Text. */
  weight?: 'normal' | 'bold';

  /** Color of Text */
  color?: string;
}

/** Text displays words and characters of various sizes.
 */
export const Text: React.FunctionComponent<TextProps> = ({
  style = {},
  type = 'p',
  children = '',
  weight = 'normal',
  color = '#000',
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
      style={StyleSheet.flatten([
        defaultStyle[type],
        { fontWeight: weight, color },
        style,
      ])}
      {...rest}
    >
      {children}
    </NativeText>
  );
};

Text.displayName = 'Text';
