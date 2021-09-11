import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import getUsers from "./services/services";
import Users from "./components/users";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
       <Users/>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
