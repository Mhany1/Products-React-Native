import * as React from 'react';
import {useEffect,useState} from 'react';
import { Text, View, StyleSheet, Image,ScrollView } from 'react-native';
import axios from 'axios';
import { Card } from 'react-native-elements';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const Products=({navigation})=>{

 
  const[products,useproducts]=useState([])

  useEffect(()=>{
     axios.get("https://fakestoreapi.com/products")
     .then ((res)=>useproducts(res.data))
     .catch ((err)=>alert(err))
    },[])

  return(

       <ScrollView>
       
       {products.map((pro)=>{
         return(
           <Card>

               <Image 
                       style={{width:'100%',height:100,marginBottom:10}} 
                       resizeMode='contain'
                       source={{uri:pro.image}}
               />

               <Card.Title onPress={() =>
                        navigation.navigate('Root', {
                            screen: 'ProductDetals',
                            params: { id: pro.id},
                        })
                        } > {pro.title} </Card.Title>
                 <Text style={{color:'red',textAlign:'center'}}>{pro.price} $</Text>
          
           
             
           
           </Card>
         )
       })}

      
       
       </ScrollView>
  );
}

export default Products;