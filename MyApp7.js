import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class MyApp5 extends Component {
    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-around'}}>

            <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
            <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
            <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />

            {/* <View style={{flex: 1,backgroundColor: 'powderblue'}} />
            <View style={{flex: 2,backgroundColor: 'skyblue'}} />
            <View style={{flex: 1,backgroundColor: 'steelblue'}} /> */}


            {/* <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
            <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
            <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} /> */}

          </View>
        )
    }
}
