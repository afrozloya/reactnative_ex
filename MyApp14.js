import React from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';

export default class FetchExample extends React.Component {
 state = {
     movies: []
 }     

  componentDidMount(){
    return fetch('https://reactnative.dev/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
          console.log(responseJson);
          this.setState({
            movies: responseJson.movies 
          })
      }).catch((error) =>{
        console.error(error);
      });
  }
  render(){
    return(
      <View>
        <FlatList
          data={this.state.movies}
          renderItem={({m1}) => <Text>{m1.title}</Text>}
        />
      </View>
    );
  }
}
