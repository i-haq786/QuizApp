//import { StatusBar } from 'expo-status-bar';
import React,{ useState } from 'react';
import { StyleSheet, Text, View, TextInput ,Button } from 'react-native';

const clickHandler = () =>{

}

export default function Login() {
  const [name, setName] = useState('Inzi');

  return (
    <View style={styles.container}>
      <Text>Enter your name:</Text>
      <TextInput 
           style={styles.input} 
           placeholder='e.g: Md Inzamamul Haque'
           onChangeText={(val) => setName(val)} />
     <View style={styles.buttonContainer}>
       <Button title='I am ready' color="#F7DB4F" onPress={clickHandler} />
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2F9599',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 8,
    margin: 10,
    width: 200,

  }

});
