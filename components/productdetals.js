import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import axios from 'axios';
import { Card } from 'react-native-elements';
import { Button } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import {useEffect,useState} from 'react';


const ProductDetals=({navigation,route})=>{

  const id=route.params.id

  const[details,usedetails]=useState({})

useEffect(()=>{
     axios.get(`https://fakestoreapi.com/products/${id}`)
     .then ((res)=>usedetails(res.data))
     .catch ((err)=>alert(err))
    },[])

  return(
    <View style={{justifyContent:'center'}}>

      <Image style={styles.img} resizeMode='contain' source={{uri:details.image}}/>
      <Text style={styles.tit}>{details.title}</Text>
       <Text style={styles.des}>{details.description}</Text>

       <View style={styles.two}>
        <Text style={{color:'red'}}>{details.price} $</Text>
        <Text style={{color:'blue'}}>{details.category}</Text>
       </View>
       
      <Button style={styles.btn} onPress={()=>navigation.navigate('Products')}  buttonStyle={{backgroundColor:'orange',width:200,                  alignItems:'center',marginStart:73,marginTop:20}} title={'shopping..'}> 
          <Icon name="home" color="white" />
       </Button>   
    </View>
    
  );
}

const styles=StyleSheet.create({
  img:{
   justifyContent:'center',
    height:100,
    width:'100%',
    marginTop:10
  },

  tit:{
    margin:10,
    textAlign:'center',
    fontWeight:'bold',
    padding:5
  },

  des:{
    margin:10,
    fontSize:13,
    textAlign:'center',
    color:'gray',
    padding:5
  },

  two:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingEnd:10,
    paddingStart:10,
    margin:10
    
  },

  btn:{
    width:200,
    paddingStart:20,
    paddingEnd:20
  }
})

export default ProductDetals;