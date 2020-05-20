import React from 'react';
import { StyleSheet, Button, Text,TextInput, View } from 'react-native';
import { State } from 'react-native-gesture-handler';


export default function Ldde(props) {



    return (
        
        <View style={styles.container}>
            <Text>Inserir</Text>
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
    input:{
        borderWidth: 1,
        borderColor:'black',
        padding:8,
        margin:20,
        width:200
    }
});
