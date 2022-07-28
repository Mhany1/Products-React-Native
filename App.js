import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import Home from './components/home';
import Products from './components/products';
import ProductDetals from './components/productdetals';
import Todo from './components/Todo/Todo';



// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
 
   <NavigationContainer>
       <Tab.Navigator>

          <Tab.Screen name="Home" component={Home} options={{
             tabBarIcon: () => (
            <MaterialCommunityIcons name="home" color='black' size={20} />
             )}}/>
         

         <Tab.Screen name="Products" component={Products} options={{
             title:'',
             tabBarIcon: () => (
            <MaterialCommunityIcons name="bell" color='black' size={20} style={{display:'none'}} />
             )}}/>

              <Tab.Screen name="Root" component={Root} options={{
             title:'',
             tabBarIcon: () => (
            <MaterialCommunityIcons name="bell" color='black' size={20} style={{display:'none'}} />
             )}}/>


             <Tab.Screen name="Todo" component={Todo} options={{
             title:'All Tasks',
             tabBarIcon: () => (
            <MaterialCommunityIcons name="bell" color='black' size={20}  />
             )}}/>

              

       </Tab.Navigator>
       
   </NavigationContainer>
   
  
  );
}
 function Root(){
   return(
   <Stack.Navigator>
      <Stack.Screen name="ProductDetals" component={ProductDetals} options={{ headerShown: false,
          }}/>
    </Stack.Navigator>
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
