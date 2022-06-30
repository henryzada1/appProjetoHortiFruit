import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import {Text, View, StyleSheet, ImageBackground } from 'react-native';

export default function Home(){
  return (
    <View style={styles.container}>
      <ImageBackground source={require=("../assets/HortiFruta.png")}>

      </ImageBackground>

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

    imagem:{
        alignItems:'center',
    }
  });