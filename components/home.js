import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-elements';




const Home=({navigation})=>{
  return(
    
    <View>
       <Image style={{width:400,height:300,justifyContent:'center',padding:12}} source={require('../assets/6.jpg')}/>
       <Button onPress={()=>navigation.navigate('Products')}  buttonStyle={{backgroundColor:'orange'}} title={'Buy Now'}/>
    </View>
    
  );
}

export default Home;