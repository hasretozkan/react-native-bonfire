import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { Text, Divider } from 'react-native-bonfire';

export default function App() {
  return (
    <View style={styles.container}>
      <Text type="h2" style={[styles.text, styles.boldText]}>
        Typograpy & Text Components
      </Text>
      <Text type="h1" style={styles.text}>
        Header 1
      </Text>
      <Text type="h2" style={styles.text}>
        Header 2
      </Text>
      <Text type="h3" style={styles.text}>
        Header 3
      </Text>
      <Text type="h4" style={styles.text}>
        Header 4
      </Text>
      <Text type="h5" style={styles.text}>
        Header 5
      </Text>
      <Text type="p" style={styles.text}>
        Paragrapf
      </Text>
      <Divider marginY={20} color="lightgray" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop: 10,
    textAlign: 'center',
  },
  boldText: {
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
