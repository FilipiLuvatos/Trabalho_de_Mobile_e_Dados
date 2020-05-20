import React, { Component } from 'react';
import { TextInput } from 'react-native'
import { StyleSheet, Button, Text, View } from 'react-native';


export default class Fila extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Button

                    onPress={this.clicou}
                    title="click Me"

                />

                <Button
                    title="Inserir"

                />
                <Button
                    title="Remover"
                />
                <Button
                    title="Busca"
                />

            </View>
        );
    }
    clicou = () => {
        alert("clicou")

    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});