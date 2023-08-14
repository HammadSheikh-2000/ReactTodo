
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList} from 'react-native';
import { useState } from 'react';
import TodoItem from './components/TodoItem';

export default function App() {

  const [getText,setText]=useState('');
  const [getTodoList,setTodoList]=useState([]);

  addTodoList=()=>{
    if(getText!='')
    {
      setTodoList([...getTodoList,{text: getText,key: Math.random().toString()}]);
      setText('');
    }
  }
  removeItem=(id)=>{
    setTodoList(getTodoList.filter(todo => todo.id != id));

  }
  changingText=(myText)=>{
    setText(myText);
  }

  return (
    <View style={styles.container}>
      <View style={styles.flexForTod}>
        <TextInput style={styles.textInputStyle} value={getText} onChangeText={changingText} placeholder='Add your Todo'/>
        <Button onPress={addTodoList} color={'#FF0079FF'} title='Add to TODO'/>
      </View>
      <FlatList data={getTodoList} renderItem={(todoItem) => {
        return(
          <TodoItem text={todoItem.item.text} id={todoItem.item.id} removeItemFromList={removeItem}/>
        );
      }} keyExtractor={(item,index) => {
        return(
          item.key
        );
      }}/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    padding:20,
  },
  flexForTod:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems: 'center',
    marginTop:20,
    marginBottom:10,
    paddingBottom:10,
    borderBottomWidth:1,
    borderBottomColor: '#cccccc',
  },
  textInputStyle:{
    borderWidth:2,
    borderColor:'#cccccc',
    width: "70%",
    marginRight: 10,
    padding: 8,
    borderRadius: 10,
    fontSize:20,
    color: 'black',
    paddingLeft:20
  },
  
});
