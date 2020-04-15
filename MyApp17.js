import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Alert, Button} from 'react-native';

export default class ModalExample extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{
              margin: 22,
              backgroundColor:"#ccc",
              padding: 30,
              elevation: 5
              }}>
            <View>
              <Text style={{marginBottom: 20}}>Hello World!</Text>

                 <Button
          title="Hide Model"
          color="#440000"
          onPress={() => {
            this.setModalVisible(!this.state.modalVisible);
          }
          }
        />
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>
      </View>
    );
  }
}