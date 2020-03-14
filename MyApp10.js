import React from 'react';
import { FlatList, ActivityIndicator, Text, View, Image  } from 'react-native';

export default class FetchExample extends React.Component {
 state = {
     news: []
 }     

  componentDidMount(){
    return fetch('http://newsapi.org/v2/everything?q=narendra&from=2020-02-20&sortBy=publishedAt&apiKey=4431feeb1f68434185f389172a2274f9')
      .then((response) => response.json())
      .then((responseJson) => {
          console.log(responseJson.articles);
          this.setState({
            news: responseJson.articles 
          })
      }).catch((error) =>{
        console.error(error);
      });
  }
  render(){
    return(
      <View>
        <FlatList
          data={this.state.news}
          renderItem={(m1) => <>
          <Text style={{color: 'blue', fontSize:20, margin: 10, borderWidth: 1, padding: 5, borderColor: '#888888',
          fontWeight: 'bold'
        }}>{m1.item.title}</Text>
        {/* <Image source={m1.item.urlToImage}/> */}
        <Image 
    source={{"uri":m1.item.urlToImage}}  
    style={{width: 400, height: 400}} 
/>


          </>
          }
        />
      </View>
    );
  }
}
