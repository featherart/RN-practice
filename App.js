import React, { Component } from "react";
import { Alert, AppRegistry, Button, StyleSheet, TouchableOpacity, View } from "react-native";
import Bananas from './Bananas'

export default class ButtonBasics extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  _onPressButton() {
    Alert.alert("You 🍕 🐙");
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this._onPressButton}>
            <Button onPress={this._onPressButton} title="Press Me" />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Me"
            color="#841584"
            backgroundColor="red"
          />
        </View>
        <View style={styles.alternativeLayoutButtonContainer}>
          <Button onPress={this._onPressButton} title="This looks great!" />
          <Button onPress={this._onPressButton} title="OK!" color="#841584" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20,
    backgroundColor: 'springgreen',
    borderRadius: 50,
    height: 25
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'green'
  }
})
