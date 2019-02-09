import React, { Component } from 'react';
import { AppRegistry, Text, View, Button, Image, StyleSheet } from 'react-native';

class app_3 extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      escolhaUsuario: '', 
      escolhaComputador: '',
      resultado: ''
     };
  }

  jokenpo(escolhaUsuario) {
    const numAleatorio = Math.floor(Math.random() * 3);

    let escolhaComputador = '';

    switch(numAleatorio) {
      case 0: escolhaComputador = 'pedra'; break;
      case 1: escolhaComputador = 'papel'; break;
      case 2: escolhaComputador = 'tesoura'; break;
    }

    let resultado = '';

    if (escolhaComputador === 'pedra') {
      if (escolhaUsuario === 'pedra') {
        resultado = 'Empate';
      }

      if (escolhaUsuario === 'papel') {
        resultado = 'Usuário ganhou';
      }

      if (escolhaUsuario === 'tesoura') {
        resultado = 'Computador ganhou';
      }
    }

    if (escolhaComputador === 'papel') {
      if (escolhaUsuario === 'papel') {
        resultado = 'Empate';
      }

      if (escolhaUsuario === 'tesoura') {
        resultado = 'Usuário ganhou';
      }

      if (escolhaUsuario === 'pedra') {
        resultado = 'Computador ganhou';
      }
    }

    if (escolhaComputador === 'tesoura') {
      if (escolhaUsuario === 'tesoura') {
        resultado = 'Empate';
      }

      if (escolhaUsuario === 'pedra') {
        resultado = 'Usuário ganhou';
      }
      
      if (escolhaUsuario === 'papel') {
        resultado = 'Computador ganhou';
      }
    }

    this.setState({ 
      escolhaUsuario: escolhaUsuario, 
      escolhaComputador: escolhaComputador,
      resultado: resultado
    });
  }

  render() {
    return (
      <View>
        <Topo />
        <View style={styles.painelAcoes}>
          <View style={styles.btnEscolha}>
            <Button title="pedra" onPress={() => { this.jokenpo('pedra'); }} />
          </View>
          <View style={styles.btnEscolha}>
            <Button title="papel" onPress={() => { this.jokenpo('papel'); }} />
          </View>
          <View style={styles.btnEscolha}>
            <Button title="tesoura" onPress={() => { this.jokenpo('tesoura'); }} />
          </View>
        </View>
        <View style={styles.palco}>
          <Text style={styles.txtResultado}>{this.state.resultado}</Text>
          
          <Text>Escolha do computador: {this.state.escolhaComputador}</Text>
          <Image source={require('./imgs/papel.png')} />
          
          <Text>Escolha do usuário: {this.state.escolhaUsuario}</Text>
          <Image source={require('./imgs/papel.png')} />
        </View>
      </View>
    );
  }
}

class Topo extends Component {
  render() {
    return (
      <View>
        <Image source={require('./imgs/jokenpo.png')} resizeMode="stretch" style={{ width: '100%' }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btnEscolha: {
    width: 90
  },
  painelAcoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  palco: {
    alignItems: 'center',
    marginTop: 10
  },
  txtResultado: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height: 60
  }
});

AppRegistry.registerComponent('app_3', () => app_3);
