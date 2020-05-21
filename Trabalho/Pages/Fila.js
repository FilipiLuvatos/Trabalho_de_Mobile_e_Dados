import React, { Component } from 'react';
import { TextInput } from 'react-native'
import { StyleSheet, Button, Text, View } from 'react-native';
import Estrutura from "./auxfila"

export default class Fila extends Component {

    
    constructor(props) {
        super(props);
        this.state = { text: " " }
    }
    render() {
        return (
            <View style={styles.container}>

                <Button
                    title={this.state.text}
                   color= "#bfbfbf"

                />
                <br/>
                <TextInput

                    
                    style={{ borderWidth: 1 }}
                    onChangeText={this.Number}
                    value={this.state.text}

                />
                <br/>
                 <Button
                    title="Inserir"
                    onPress={this.clicouInsere}
                />
                <br/>

                <Button
                    title="Remover"
                    onPress={this.clicouRemover}
                />
                <br/>
                <Button
                    title="Busca"
                    onPress={this.clicouBuscar}
                />

            </View>
        );
    }
    clicouInsere = () => {
        alert("clicouInserir")

    }
    clicouRemover = () => {
        alert("clicouRemover")

    }
    clicouBuscar = () => {
        alert("clicouBuscar")

    }
    Number = (text) => {
        this.setState({ text })
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