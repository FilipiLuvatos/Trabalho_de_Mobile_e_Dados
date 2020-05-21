import React, { Component } from 'react';
import { TextInput } from 'react-native'
import { StyleSheet, Button, Text, View } from 'react-native';


export default class Ldde extends Component {

    render() {
        return (
            <View style={styles.container}>
                
                <TextInput
                style={styles.myText}              

                />

                <Button
                    title="Inserir"
                  //  onPress={}//Chma a função da LDDE para inserir
                />
                <Button
                    title="Remover"
                  //  onPress={}//Chama a função da LDDE para remover
                />
                <Button
                    title="Busca"//Chama a função da LDDE para Buscar
                   // onPress={}//Chama a função da LDDE para Buscar
                />

            </View>
        );
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    myText:{
        borderWidth:1,borderColor:"blue",
        margin:10,padding:10, width:'50%'
    }

});