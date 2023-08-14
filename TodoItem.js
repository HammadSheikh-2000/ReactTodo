import { Text,Pressable } from "react-native";
import { StyleSheet } from "react-native";
const TodoItem = (props) => {

    deleteHandler=()=>{
        props.removeItemFromList(props.id);

    }
    return ( 
        <Pressable onPress={deleteHandler}>
        <Text style={styles.styleTodo}>{props.text}</Text>
        </Pressable>
     );
}
 
export default TodoItem;
const styles=StyleSheet.create({
    styleTodo:{
        borderWidth:1,
        borderColor: '#cccccc',
        margin: 10,
        padding: 10,
        textAlign: 'center',
        fontSize: 24,
        backgroundColor: '#FF0079FF',
        color:'white',
        borderRadius: 50,
      },
})