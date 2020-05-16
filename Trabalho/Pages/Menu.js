import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';


export default function Menu(props) {
    return (
        <View style={styles.container}>
            <Text>Esta no Main</Text>
            <Button
                title="LDDE"
                onPress={() => { props.navigation.navigate('Ldde') }}
            />
            <Button
                title="Fila"
                onPress={() => { props.navigation.navigate('Fila')}}
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
