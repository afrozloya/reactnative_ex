import React, { Component } from 'react'
import {View, Text} from 'react-native'

export default class Greeting extends Component {
    render() {
        const myst = {color: 'red', fontSize: 40, textAlign: 'center'}
        return (
            <View style={{borderColor: "brown", borderWidth:4, margin:2, borderRadius: 10,borderStyle: 'dotted'
        }}>
                <Text style={myst}>Hi {this.props.name}</Text>
                <Text style={{...myst, fontSize:20}}>{this.props.pn}</Text>
            </View> 
        )
    }
}
