import React, { Component } from "react";
import {StyleSheet, View, Text } from "react-native";

export class FilaEst extends Component {
  constructor(props){
    super(props);
    this.state = {
      update: false
    };
    this.vetor = [{key: 0, valor: null, style: styles.rect1 },
                  {key: 1, valor: null, style: styles.rect1 },
                  {key: 2, valor: null, style: styles.rect1 },
                  {key: 3, valor: null, style: styles.rect1 },
                  {key: 4, valor: null, style: styles.rect1 }];
    this.vetorAux = [];
    this.inicio = 0;
    this.fim = 0;
    this.tamanho = 5;
    this.auxremove = 0
  }

  reset = () => {
    this.vetor = [{key: 0, valor: null, style: styles.rect1 },
                  {key: 1, valor: null, style: styles.rect1 },
                  {key: 2, valor: null, style: styles.rect1 },
                  {key: 3, valor: null, style: styles.rect1 },
                  {key: 4, valor: null, style: styles.rect1 }];
    this.vetorAux = [];
    this.inicio = 0;
    this.fim = 0;
    this.tamanho = 5;
    this.auxremove = 0
    this.setState({update: 'reset'})
  }

  limpa = () => {
    this.vetor.forEach((item, i) => {
      item.style = styles.rect1;
    });
    this.setState({update: false})
  }

  add = (value) => {
    if ((this.fim + 1) % (this.tamanho + 1) == this.inicio) {
      return false;
    }
    this.vetor[this.fim].valor = value;
    this.vetor[this.fim].style = styles.rect1Add
    this.fim = (this.fim + 1) % (this.tamanho + 1);
    this.setState({update: 'add'})
    setTimeout(() => {this.limpa()}, 2000)
    return true;
  }

  remove = () => {
    if (this.fim == 0) {
      return false
    }

    this.auxremove = 0
    for (let i = 1; i < this.vetor.length; i++) {
      this.vetorAux[this.auxremove] = this.vetor[i].valor
      this.auxremove++;
    }
    this.vetor[4].valor = null;

    this.auxremove = 0
    for (let i = 0; i < this.vetorAux.length; i++) {
      this.vetor[i].valor = this.vetorAux[this.auxremove]
      this.auxremove++
    }
    this.fim--
    // this.vetor.shift();//Apagar a ultima possição que ficou a mais por que o vetor em js é dinaminco
    this.limpa();
  }

  busca = (value) => {
    for (let i = 0; i < this.vetor.length; i++) {
      this.vetor[i].style = styles.rect1Bus
      this.setState({update: 'cursor'})
      if (this.vetor[i].valor == value) {
        this.vetor[i].style = styles.rect1Add;
        this.setState({update: 'found'})
        break;
      }
    }
    setTimeout(() => {this.limpa()}, 2000)
  }

  render(){
    return this.vetor.map((l, i) => (<View style={l.style} key={l.key}><Text style={styles.valor1}>{l.valor}</Text></View>))
  }
}

const styles = StyleSheet.create({
  rect1: {
    width: 268,
    height: 60,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "#000000",
    marginTop: 12,
    marginLeft: 19
  },
  rect1Add:{
    width: 268,
    height: 60,
    backgroundColor: "rgba(70,173,156,0.5)",
    borderWidth: 1,
    borderColor: "#000000",
    marginTop: 12,
    marginLeft: 19
  },
  rect1Rem:{
    width: 268,
    height: 60,
    backgroundColor: "#fc7c7c",
    borderWidth: 1,
    borderColor: "#000000",
    marginTop: 12,
    marginLeft: 19
  },
  rect1Bus:{
    width: 268,
    height: 60,
    backgroundColor: "#7c97fc",
    borderWidth: 1,
    borderColor: "#000000",
    marginTop: 12,
    marginLeft: 19
  },
  valor1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 26,
    textAlign: "center",
    marginTop: 15,
    marginLeft: 127
  }
});
