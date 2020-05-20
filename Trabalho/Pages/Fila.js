import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';


export default function Fila(props) {
    return (
        <View style={styles.container}>
            
            <Button

                title="Inserir"


            />
            <Button

                title="Remover"


            />
            <Button

                title="Busca"


            />
Z
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
