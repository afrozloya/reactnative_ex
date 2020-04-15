import React, { Component } from 'react'
import { Text, View, ImageBackground } from 'react-native'

export default class MyApp16 extends Component {
  render() {
    return (
      <ImageBackground source={require('./back4.png')} style={{width: '100%', height: '100%'}}>
      <Text>Inside</Text>
    </ImageBackground>
    )
  }
}
