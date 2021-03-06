import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


const navBotao = createStackNavigator();

import ListarFruta from '../pages/frutas/ListarFruta';
import CadastrarFruta from '../pages/frutas/CadastrarFruta';
import AlterarFruta from '../pages/frutas/AlterarFruta';

export default function RotasBotao(){
    return(
        <navBotao.Navigator>
            <navBotao.Screen name="Listar" component={ListarFruta} options={{headerShown:false}}/>
            <navBotao.Screen name="Cadastrar" component={CadastrarFruta} options={{headerShown:false}}/>
            <navBotao.Screen name="Alterar" component={AlterarFruta} options={{headerShown:false}}/>
        </navBotao.Navigator>
    )
}

