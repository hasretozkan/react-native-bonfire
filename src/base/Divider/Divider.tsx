import React from 'react';
import { StyleSheet, View } from 'react-native';

export interface DividerProps {
  /**  Add additional styling for Divider. */

  /** Divider width. Can be px or %. */
  width?: string;

  /** Divider color. Can be hex or rgb or etc. */
  color?: string;

  /** Divider margin horizontal. Can be px or %. */
  marginY?: number;
}

export const Divider: React.FunctionComponent<DividerProps> = ({
  color = 'lightgray',
  width = '90%',
  marginY = 20,
}) => {
  return (
    <View
      style={{
        height: StyleSheet.hairlineWidth,
        backgroundColor: color,
        width,
        marginVertical: marginY,
      }}
    />
  );
};

Divider.displayName = 'Divider';
