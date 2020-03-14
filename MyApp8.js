import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'

export default class MyApp5 extends Component {
    state = {
        name: '',
        city: ''
    }
    render() {
        return (
            <View>
                <TextInput style={{height: 40}}
                placeholder="Name"
                value={this.state.name}
                onChangeText={(txt) => {this.setState({name: txt})}}
                />
                <TextInput style={{height: 40}}
                placeholder="City"
                value={this.state.city}
                onChangeText={(txt) => {this.setState({city: txt})}}
                />

                <Text>Hi {this.state.name}, u live in {this.state.city}!!</Text>
          </View>
        )
    }
}
