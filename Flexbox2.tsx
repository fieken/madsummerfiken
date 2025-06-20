import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Flexbox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.redContainer} />
      <View style={styles.greenContainer} />
      <View style={styles.blueContainer} />
      <Text>Flexbox</Text>
    </View>
  );
};

export default Flexbox;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    flex: 1,
    flexDirection: 'column',
  },
  redContainer: {
    backgroundColor: 'blue',
    flex: 1,
    height: 100,
    width: 100,
  },
  greenContainer: {
    backgroundColor: 'white',
    flex: 1,
    height: 100,
    width: 100,
  },
  blueContainer: {
    backgroundColor: 'blue',
    flex: 1,
    height: 100,
    width: 100,
  },
});
