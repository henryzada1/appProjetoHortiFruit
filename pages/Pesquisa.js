import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function Pesquisa(){
  function pesquisarFruta(){
    Alert.alert('Atenção','Infelizmente, estamos fora do ar.')
  }

  return (
    <View style={styles.container}>    
      <Text style={styles.titulo}>Escolha uma fruta a seu gosto!</Text>
        <TextInput
          placeholder='Procure sua fruta'
          style={styles.TextInput}
        />
        <TouchableOpacity style={styles.botao} onPress={()=> pesquisarFruta()}>
          <Text style={styles.textoBotao}>Pesquisar</Text>
        </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const frutas = [
  {

  }
]

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    TextInput:{
      textAlign: 'center',
      marginTop:30,
      paddingHorizontal:10
    },
    botao:{
      marginTop:15,
      backgroundColor:"#f4a261",
      padding:10,
      borderRadius:15,
      width:'80%',
      justifyContent:'center',
      alignItems:'center',
    },
    textoBotao:{
      fontSize: 18,
      fontWeight: '700',
      color:'#2a9b8f',
      borderRadius:15,
      borderColor:'#f4a261'
    },
    titulo:{
      fontSize:20,
      color:"#2a9b8f"
    },
    
  });