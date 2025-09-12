import React from "react";
import {Image, View, Text} from "react-native";

import logo from "../../../assets/iconeteste.png"

export default function Topo() {
    return(
        <View>
            <Image source={logo}/> 
            <Text>Olá!</Text>
            <Text>Encontre os melhores produtores</Text>
        </View>
    );
};