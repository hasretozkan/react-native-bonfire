import * as React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';
import { Text, Divider, Button, Card } from 'react-native-bonfire';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
          <Text type="h2" style={styles.text} weight="bold">
            Header 2
          </Text>
          <Text type="h3" style={styles.text} color="red">
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
          <Divider marginY={20} color="lightgray" />
          <Text type="h5" style={[styles.text, styles.boldText]}>
            Button Component 🔥
          </Text>
          <Button
            text="default"
            type="default"
            border="full"
            style={styles.button}
          />
          <Button
            text="success"
            type="success"
            border="rounded"
            style={styles.button}
          />
          <Button text="info" type="info" style={styles.button} />
          <Button text="error" type="error" style={styles.button} />
          <Button text="warning" type="warning" style={styles.button} />
          <Divider marginY={20} color="lightgray" />
          <Card style={styles.card} mode="light" shadow border="rounded">
            <Text type="h1">Test Card</Text>
          </Card>
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
    width: Dimensions.get('window').width,
  },
  text: {
    marginTop: 10,
    textAlign: 'center',
  },
  boldText: {
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    width: '90%',
    marginVertical: 5,
  },
  card: {
    padding: 10,
    alignItems: 'center',
    width: '90%',
    marginBottom: 10,
  },
});
