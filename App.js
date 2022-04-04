import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import Lista from './src/Lista';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      feed:[{
        id: '1', 
        nome: 'Lucas Silva', 
        descricao: 'Mais um dia de muitos bugs :)', 
        imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
        imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',  
        likeada: false, 
        likers: 0
       },
      {
        id: '2', 
        nome: 'Matheus', 
        descricao: 'Isso sim é ser raiz!!!!!', 
        imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
        imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png', 
        likeada: false, 
        likers: 0
      },
      {
        id: '3', 
        nome: 'Jose Augusto', 
        descricao: 'Bora trabalhar Haha', 
        imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png', 
        imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',  
        likeada: false, 
        likers: 3
      },
      {
        id: '4', 
        nome: 'Gustavo Henrique', 
        descricao: 'Isso sim que é TI!', 
        imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
        imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto4.png', 
        likeada: false, 
        likers: 1
      },
      {
        id: '5', 
        nome: 'Guilherme', 
        descricao: 'Boa tarde galera do insta...', 
        imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
        imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto5.png',
        likeada: false, 
        likers: 32
      }]
    };
  }

  render(){
    return(
      <View id='container' style={styles.container}>
        
        <View id='header' style={styles.header}>
          <TouchableOpacity>
            <Image source={require('./src/images/logo.png')}
            style={styles.logo} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image source={require('./src/images/send.png')}
            style={styles.send} />
          </TouchableOpacity>
        </View>

        <FlatList 
        showsHorizontalScrollIndicator={false}
        data={this.state.feed}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <Lista data={item} />}
        />

      </View>

    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:20,
  },
  header:{
    flexDirection:'row',  
    height:55,
    alignItems:'center',
    justifyContent:'space-between',
    padding:8,
    borderBottomWidth:0.1,
    shadowColor:'#000',
    elevation:1,
  },
  logo:{

  },
  send:{
    width:23,
    height:23,
  },

});

export default App