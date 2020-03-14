import React, { Component } from 'react'
import { Text, View, StyleSheet  } from 'react-native'

const styles = StyleSheet.create({
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
      },
      red: {
        color: 'red',
      }
})

export default class MyApp4 extends Component {
    render() {
        return (
            <View>
                <Text style={styles.bigBlue}> bla bla </Text>
                <Text style={styles.red}> bla bla </Text>
                <Text style={[styles.bigBlue, styles.red]}> bla bla </Text>
                <Text style={[styles.red, styles.bigBlue]}> bla bla </Text>
            </View>
        )
    }
}
