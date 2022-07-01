import React,{ useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

export default function Frutas(){
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Frutas</Text>
      <FlatList
        data={frutas}
        renderItem={({item})=>
        <TouchableOpacity>
          <View style={styles.grupoFrutas}>
              <Text style={styles.textoBotaoFruta}>{item.fruta}</Text>
              <Text style={styles.textoBotaoValor}>{item.valor}</Text>
          </View>
        </TouchableOpacity>
        }
          />
      <StatusBar style="auto" />
    </View>
  );
}


const frutas =[
  {
    id: 1,
    fruta: 'Banana',
    valor: 'R$ 2,56'
  },
  {
    id: 2,
    fruta: 'Morango',
    valor: 'R$ 9,38'
  }
]
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e9c46a',
    },
    titulo:{
      fontSize:30,
      color:"#2a9d8f",
      textAlign:'center'
    },
    grupoFrutas:{
      backgroundColor:'#2a9d8f',
      margin: 15,
      padding: 5,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center'
    },
    botaoFrutas:{

    },
    textoBotaoFruta:{
      fontSize:20
    },
    textoBotaoValor:{
      fontSize:20
    }
  });