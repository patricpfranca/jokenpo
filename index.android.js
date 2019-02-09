import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';

class MeuComponente extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.teste}</Text>
      </View>
    );
  }
}

class app_3 extends Component {
  constructor(props) {
    super(props);

    this.state = { texto: 'Texto teste 2' };
  }

  alteraTexto() {
    this.setState({ texto: 'Outra coisa' });
  }

  render() {
    return (
      <View>
        <MeuComponente teste={this.state.texto}></MeuComponente>
        <Button title='Botão' onPress={() => { this.alteraTexto(); }} />
      </View>
    );
  }
}

AppRegistry.registerComponent('app_3', () => app_3);
