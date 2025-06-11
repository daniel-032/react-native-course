import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1d49e8',
    marginVertical: 70,
    paddingHorizontal: 16,
    paddingVertical: 40
  },
});

export function Home() {
  return (
    <View style={styles.container}>
      <Text>Home component</Text>
    </View>
  );
}
