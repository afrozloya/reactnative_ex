import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class MyApp2 extends Component {
    state = {
        isLogin: false,
    }
    onClk = (e) => {
        this.setState({isLogin: !this.state.isLogin})
    }
    render() {
        return (
            <View>                
                {this.state.isLogin 
                ? <><Text>Welcome !!!</Text><Text>Welcome !!!</Text></>
                : <Text>Please Login !!!</Text>
            }
            <Button onPress={this.onClk} title={this.state.isLogin ? "Logout" : "Login"}/>
            </View>
        )
    }
}
