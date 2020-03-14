import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class MyApp5 extends Component {
    _onPressButton() {
        alert('You tapped the button!')
    }
  render() {
    return (
      <View>
        <Text> MyApp5 </Text>
        <View style={{margin: 10}}>
          <Button
            onPress={this._onPressButton}
            title="Press Me"
          />
        </View>
        <View style={{margin: 10}}>
          <Button
            onPress={this._onPressButton}
            title="Press Me"
            color="#841584"
          />
        </View>        
      </View>
    );
  }
}

