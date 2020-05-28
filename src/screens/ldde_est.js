import React, { Component } from "react";
import {StyleSheet, View, Text } from "react-native";

export class LDDEEst extends Component {
  constructor(props) {
    super(props);
    this.state = {update: null}
    this.head = null
    this.last = null
    this.tamanho = 0
    this.key = 0
    this.display = null
  }

  Node = (value) => {
    tmp = this.key
    this.key++
    return {
      value: value,
      nextNode: null,
      lastNode: null,
      style: styles.rect1,
      key: tmp
    }
  }

  reset = () =>{
    this.head = null
    this.last = null
    this.tamanho = 0
    this.key = 0
    this.display = null
    this.setState({update: 'reset'})
  }

  add = (value) => {
    if (!this.head) {
      this.head = this.Node(value)
      this.last = this.head
      this.tamanho++
      this.head.style = styles.rect1Add
      this.to_array()
      this.setState({update:'add'});
    } else {
      newNo = this.Node(value)
      this.last.nextNode = newNo
      newNo.lastNode = this.last
      this.last = newNo
      this.last.style = styles.rect1Add
      this.tamanho++
      this.to_array()
      this.setState({update:'add'});
    }
    return
  }

  remove = (value) => {
    if (this.tamanho == 0) {
      return null
    }else if (this.tamanho == 1){
        this.head.style = styles.rect1Rem
        this.last.style = styles.rect1Rem
        this.to_array()
        this.setState({update: 'remove'})
        this.head = null
        this.last = null
        this.tamanho--
    } else if(this.head.value == value){
      this.head.style = styles.rect1Rem
      this.to_array()
      this.setState({update: 'remove'})
      this.head.nextNode.lastNode = null
      tmp = this.head.nextNode
      this.head.next = null
      this.head = tmp
      this.tamanho--
    } else if(this.last.value == value){
      this.last.style = styles.rect1Rem
      this.to_array()
      this.setState({update: 'remove'})
      this.last.lastNode.nextNode = null
      tmp = this.last.lastNode
      this.last.lastNode = null
      this.last = tmp
      this.tamanho--
    } else {
      node = this.head.nextNode;
      while(node != null){
        if (node.value == value) {
          node.style = styles.rect1Rem
          console.log(node)
          this.to_array()
          this.setState({update: 'remove'})
          node.nextNode.lastNode = node.lastNode
          node.lastNode.nextNode = node.nextNode
          this.tamanho--
          node = null
          break;
        }
        node = node.nextNode
      }
    }
    return
  }

  busca = (value) =>{
    if(this.tamanho > 0){
      if (this.head.value == value){
        this.head.style = styles.rect1Add
      } else if (this.last.value == value){
        this.last.style = styles.rect1Add
      } else {
        node = this.head
        while(node != null){
            node.style = styles.rect1Bus
            if (node.value == value) {
              node.style = styles.rect1Add
              break
            }
            node = node.nextNode
        }
      }
    }
    this.to_array()
    this.setState({update: 'busca'})
    return
  }

  to_array = () => {
    array = []
    if(this.tamanho >= 1){
      node_tmp = this.head
      while (node_tmp != null) {
        tmp = {style: node_tmp.style, key: node_tmp.key, value: node_tmp.value}
        array.push(tmp)
        if(node_tmp.style != styles.rect1) node_tmp.style = styles.rect1
        node_tmp = node_tmp.nextNode
      }
    }
    this.display = array.map((l, i) => (<View style={l.style} key={l.key}><Text style={styles.valor1}>{l.value}</Text></View>))
  }

  limpa = () => {
    this.to_array()
    this.setState({update: 'limpa'})
  }

  render(){
    return this.display
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
