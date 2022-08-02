import * as React from 'react';

import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { Text, Divider } from 'react-native-bonfire';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <Divider marginY={20} color="white" />
          <Text type="h4" style={[styles.text, styles.boldText]}>
            React Native Bonfire 🔥
          </Text>
          <Divider marginY={20} color="lightgray" />
          <Text type="h5" style={[styles.text, styles.boldText]}>
            Typograpy & Text Components 🔥
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
          <Text type="h5" style={[styles.text, styles.boldText]}>
            Divider Component 🔥
          </Text>
          <Divider marginY={5} color="black" />
          <Divider marginY={5} color="red" />
          <Divider marginY={5} color="blue" />
          <Divider marginY={5} color="yellow" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
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
