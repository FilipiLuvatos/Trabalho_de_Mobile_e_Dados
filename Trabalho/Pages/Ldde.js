import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';


export default function Ldde(props) {
    return (
        <View style={styles.container}>

            <Button

                title="Inserir"


            />
            <br></br>
            <Button

                title="Remover"


            />
            <br></br>
            <Button

                title="Busca"


            />

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
