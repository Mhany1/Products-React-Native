import * as React from 'react';
import {useState} from 'react';
import { Text, View, StyleSheet, Image,Button } from 'react-native';
import { Card } from 'react-native-elements';
import { Checkbox } from 'react-native-paper';
import { IconButton, MD3Colors } from 'react-native-paper'


const ListTodo=({item,deleteItem,updateItem,setIntVal})=>{

const [checked, setChecked] = React.useState(false);
const [check1, setCheck1] = useState(false);

  return(
    <View>

      <Card>

     <View style={{justifyContent:'space-between'}}>

              <View style={{alignItems:'center',flexDirection:'row',justifyContent:'center'  }}>
                 <Text style={{fontWeight:'bold',fontSize:16}}  >{item.value}</Text>
                  < Checkbox 
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
              </View>
     

       <View style={{flexDirection: "row",
             justifyContent:'center'}}>
             
      
         <IconButton 
           icon="pencil-plus-outline"
            size={20}
            color='blue'
           onPress={()=>setIntVal(item)}
         />
      

        < IconButton 
           icon="delete"
            size={20}
            color='red'
           onPress={()=>deleteItem(item.key)}
        />
       

       

</View>
     </View>
      </Card>

      

      
    </View>
  )
}

export default ListTodo;