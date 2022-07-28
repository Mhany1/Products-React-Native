import * as React from 'react';
import {useState,useEffect} from 'react';
import { Text, View, StyleSheet, Image,TextInput,Button } from 'react-native';
import { IconButton, MD3Colors } from 'react-native-paper'
import { Formik } from "formik";
import * as Yup from "yup";


const AddTodo=({saveData,intVal,setIntVal,updateItem})=>{

  const handleUpdate=()=>{
    if(intVal.key !=''){updateItem({value:value,key:intVal.key})}
    else{{saveData(value)}}
    setvalue('')
    setIntVal({value:'',key:''})
  }

const[value,setvalue]=useState(intVal.value)
 useEffect(()=>{
   setvalue(intVal.value)
  },[intVal.value])





const onChangeValue=(text)=>{
  setvalue(text)

  
  // alert(value)
}

  return(
    <View>
            <Formik  
                initialValues={{Task: ""}}
                validationSchema={Yup.object({
                 Task: Yup.string().required("required data")  
                })}
                onSubmit={(values) => {
                    
                }} > 
            {props => (
                <View>
                    <TextInput style={{fontSize:16}}
                     value={value}
                    onChangeText={props.handleChange('Task'),onChangeValue}
                    placeholder="Task.." />

                    {props.touched.Task && props.errors.Task ? (
                        <Text style={{color: 'red'}} >
                            {props.errors.Task}
                        </Text>
                    ): null }

                     <View style={{alignItems:'center'}}>
                         <IconButton 
                         icon="plus-circle"
                         size={60}
                         color='orange'
                         onPress={props.handleSubmit,handleUpdate}
                        />
                      </View>
                  </View>
  

            )}


            </Formik>



        </View>







  );
}

export default AddTodo;





   