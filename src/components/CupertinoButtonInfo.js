import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { Center } from "@builderx/utils";

function CupertinoButtonInfo(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Center horizontal>
        <Text style={styles.caption}>Button</Text>
      </Center>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#007AFF",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
    paddingLeft: 16,
    paddingRight: 16
  },
  caption: {
    color: "#fff",
    fontSize: 17
  }
});

export default CupertinoButtonInfo;
