import * as React from 'react';
import {useState,useEffect} from 'react';
import { Text, View, StyleSheet, Image,FlatList } from 'react-native';
import AddTodo from './AddTodo'
import ListTodo from './ListTodo'

const Todo=()=>{

  const[data,setdata]=useState([])
  const[intVal,setIntVal]=useState({value:'',key:''})
  
 
const saveData=(value)=>{
   setdata((prevdata)=>{
   return [
           {
               value:value,
               key:Math.random().toString()
           },
           ...prevdata
   ]})
}


const deleteItem=(key)=>{
  setdata((prevdata)=>{
    return prevdata.filter((todo)=>todo.key !=key)
  })
}

const updateItem=(item)=>{
  let newItem = data.find((todo)=>{
    return todo.key===item.key
  });

  delete newItem.value
  newItem.value=item.value
 setdata((prevdata)=>{
   return [
           {
               value:item.value,
               key:Math.random().toString()
           },
      ...prevdata.filter((todo)=>todo.key !=item.key)
   ]})
  
  
}

  return(
    <View>
      
       <AddTodo saveData={saveData} intVal={intVal} setIntVal={setIntVal} updateItem=     {updateItem} />
       <FlatList
         data={data}
         renderItem ={({item})=> <ListTodo item={item} deleteItem={deleteItem} updateItem={updateItem}
         intVal={intVal} setIntVal={setIntVal} 
         />}
         
                
       />
         
    </View>
  )
}

export default Todo;