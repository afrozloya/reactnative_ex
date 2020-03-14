import React, { Component } from 'react';
import { View, Image } from 'react-native';

export default class MyApp3 extends Component {
  render() {
    return (
      <View>
          <Image 
    source={require('./a1.jpg')}  
    style={{width: 400, height: 400}} 
/>
      </View>
    );
  }
}
