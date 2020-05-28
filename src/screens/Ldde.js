import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ScrollView,
  Alert,
} from "react-native";
import { LDDEEst } from "./ldde_est.js"

class Ldde extends Component {
  constructor(props){
    super(props);
    this.state = {numero:''};
  }
  add = function(){
    valor = this.state.numero;
    if(!valor){
      Alert.alert("Aviso", "Preencha o campo de texto")
      return;
    } else {
      this.setState({numero:''});
      this.refs.list.add(valor)
      setTimeout(() => {this.refs.list.limpa()}, 2000)
    }
  }

  busca = function(){
    valor = this.state.numero;
    if(!valor){
      Alert.alert("Aviso", "Preencha o campo de texto")
      return;
    } else {
      this.setState({numero:''});
      this.refs.list.busca(valor)
      setTimeout(() => {this.refs.list.limpa()}, 3000)
    }
  }

  remove = function(){
    valor = this.state.numero;
    if(!valor){
      Alert.alert("Aviso", "Preencha o campo de texto")
      return;
    } else {
      this.setState({numero:''});
      this.refs.list.remove(valor)
      setTimeout(() => {this.refs.list.limpa()}, 3000)
    }
  }

  voltar = function(){
    this.refs.list.reset();
    this.props.navigation.navigate("Init")
  }

  render(){
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Número"
          returnKeyLabel="numero"
          style={styles.textInput1}
          onChangeText={(text)=>this.setState({numero: text})}
          value={this.state.numero}
        ></TextInput>
        <View style={styles.button1ColumnRow}>
          <View style={styles.button1Column}>
            <TouchableOpacity
              onPress={()=>this.add()}
              style={styles.button1}
            >
              <Text style={styles.add1}>ADD</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.busca()}
              style={styles.button3}
            >
              <Text style={styles.per1}>BUS</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button2Column}>
            <TouchableOpacity
              onPress={() => this.remove()}
              style={styles.button2}
            >
              <Text style={styles.rem1}>REM</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => this.voltar()}
            style={styles.button5}
          >
            <Text style={styles.voltar}>&lt;---</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.ldde}>LDDE</Text>
        <View style={styles.scrollArea1}>
          <ScrollView
            horizontal={false}
            contentContainerStyle={styles.scrollArea1_contentContainerStyle}
            nativeID="ver_ldde"
          >
          <LDDEEst ref={"list"}/>
          <Text></Text>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textInput1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 65,
    width: 311,
    fontSize: 26,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,1)",
    borderStyle: "solid",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 5,
      height: 5
    },
    elevation: 0,
    shadowOpacity: 0.11,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 73,
    marginLeft: 18
  },
  button1: {
    width: 103,
    height: 50,
    backgroundColor: "rgba(70,173,156,1)"
  },
  add1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 26,
    marginTop: 11,
    marginLeft: 25
  },
  button3: {
    width: 103,
    height: 50,
    backgroundColor: "rgba(70,173,156,1)",
    marginTop: 3
  },
  per1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 26,
    marginTop: 8,
    marginLeft: 28
  },
  button1Column: {
    width: 104
  },
  button2: {
    width: 99,
    height: 49,
    backgroundColor: "rgba(70,173,156,1)",
    marginLeft: 1
  },
  rem1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 26,
    marginTop: 11,
    marginLeft: 23
  },
  button2Column: {
    width: 100,
    marginLeft: 6
  },
  button5: {
    width: 99,
    height: 49,
    backgroundColor: "rgba(70,173,156,1)",
    marginLeft: 6,
    marginTop: 26
  },
  voltar: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 26,
    marginTop: 8,
    marginLeft: 33
  },
  button1ColumnRow: {
    height: 102,
    flexDirection: "row",
    marginTop: 16,
    marginLeft: 14,
    marginRight: 46
  },
  ldde: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 26,
    marginTop: 18,
    marginLeft: 16
  },
  scrollArea1: {
    width: 304,
    height: 357,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "#000000",
    marginTop: 1,
    marginLeft: 17
  },
  scrollArea1_contentContainerStyle: {
    backgroundColor:'white',
    flexGrow: 1
  },
});

export default Ldde;
