import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Counter from './Counter';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>The Count</Text>
        <Image source={count} />
        <Counter />
      </View>
    );
  }
}

const count = require('./count.jpg');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 20,
  },
  header: {
    color: '#5a2961',
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center',
    padding: 10,
  },
  image: {
    height: 200,
    width: 200,
  }
});
