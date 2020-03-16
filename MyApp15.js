import React, { Component } from 'react';
import { View, Text, DrawerLayoutAndroid } from 'react-native';

export default class MyApp15 extends Component {
  render = () => {
    var navigationView = (
      <View style={{flex: 1, backgroundColor: '#ffaaaa'}}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
      </View>
    );
    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={"left"}
        renderNavigationView={() => navigationView}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
          <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
        </View>
      </DrawerLayoutAndroid>
    );
  }
}
