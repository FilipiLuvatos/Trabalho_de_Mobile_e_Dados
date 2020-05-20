import React from 'react';
import { TextInput } from 'react-native'
import { StyleSheet, Button, Text, View } from 'react-native';


export default function Fila(props) {


    const [value, onChangeText] = React.useState('');

    return (
        <View style={styles.container}>
      
            <TextInput
            style={styles.input}
            

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



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
