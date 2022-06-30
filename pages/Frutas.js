import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import {Text, View, StyleSheet, ImageBackground } from 'react-native';

export default function Frutas(){
  return (
    <View style={styles.container}>
      <Text>Esta é a página das Frutas</Text>

      <StatusBar style="auto" />
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