import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

class Lista extends Component{
  constructor(props){
    super(props);
    this.state = {
      feed: this.props.data
    };
    this.mostraLikes = this.mostraLikes.bind(this)
    this.like = this.like.bind(this)
    this.carregaIcone = this.carregaIcone.bind(this)
  }

  carregaIcone(likeada){
    return likeada ? require('../images/likeada.png'): require('../images/like.png')
  }

  like(){
    let feed = this.state.feed;

    if(feed.likeada === true){
      this.setState({
        feed: {
          ...feed,
          likeada:false,
          likers: feed.likers - 1,

        }
      })
    }else{
      this.setState({
        feed:{
          ...feed,
          likeada: true,
          likers: feed.likers + 1,

        }
      })
    }
  }

  mostraLikes(likers){
    let feed = this.state.feed

    if(feed < 0){
      return('...')
    }
    else{
      return(
      <Text style={styles.likes}>{feed.likers} {feed.likers > 1 ? 'curtidas': ''}</Text>
    );
    }

    
  }
  
  render(){
    return(
      <View style={styles.areaFeed}>

        <View style={styles.viewPerfil}>
          <Image source={{uri: this.state.feed.imgperfil}} style={styles.fotoPerfil} resizeMode='cover'/>
          <Text style={styles.nomeUsuario}>{this.state.feed.nome}</Text>

        </View>
        
        <Image style={styles.fotoPublicacao} source={{uri: this.state.feed.imgPublicacao}}/>

        <View style={styles.areaBtn}>
          <TouchableOpacity onPress={this.like}>
            <Image source={this.carregaIcone(this.state.feed.likeada)}  style={styles.iconeLike}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../images/send.png')}  style={styles.iconeLike}/>
          </TouchableOpacity>
        </View>
        
          {this.mostraLikes(this.state.feed.likers)}
        
        

        <View style={styles.viewRodape}>

          <Text style={styles.nomeRodape }>{this.state.feed.nome}</Text>
          <Text style={styles.descRodape}>{this.state.feed.descricao}</Text>

        </View>


      </View>
    );
  }
}
const styles = StyleSheet.create({
  areaFeed:{
    
  },
  fotoPublicacao:{
    flex:1,
    height:400,
    alignItems:'center',

  },
  viewPerfil:{
    flexDirection:'row',
    flex:1,
    alignItems:'center',
    padding:8,
  },
  nomeUsuario:{
    fontSize:22,
    textAlign:'left',
    color:'black',
  },
  fotoPerfil:{
    height:50,
    width:50,
    borderRadius:25,
  },
  areaBtn:{
    flexDirection:'row',
    padding:5,
    justifyContent:'space-between'
  },
  iconeLike:{
    width:25,
    height:25,
    paddingLeft:5,
  },
  viewRodape:{
    flexDirection:'row',
    alignItems:'center',
    
  },
  descRodape:{
    fontSize:15,
    paddingLeft:5,

  },
  nomeRodape:{
    fontSize:15,
    fontWeight:'bold',
    paddingLeft:5,
  },
  likes:{
    fontWeight:'bold',
    color:'black',
    marginLeft:5,
  },

})

export default Lista 