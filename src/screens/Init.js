import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

function Init(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Ldde")}
        style={styles.button}
      >
        <Text style={styles.ldde2}>LDDE</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Fila")}
        style={styles.button1}
      >
        <Text style={styles.filaCircular}>Fila Circular</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    width: 216,
    height: 67,
    backgroundColor: "rgba(70,173,156,1)",
    marginTop: 297,
    marginLeft: 79
  },
  ldde2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 26,
    marginTop: 18,
    marginLeft: 77
  },
  button1: {
    width: 216,
    height: 67,
    backgroundColor: "rgba(70,173,156,1)",
    marginTop: 24,
    marginLeft: 79
  },
  filaCircular: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 26,
    marginTop: 18,
    marginLeft: 40
  }
});

export default Init;
