import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  
  const [firstNumber, setFirstNumber] = useState('');

  const [secondNumber, setSecondNumber] = useState('');

  const [result, setResult] =useState('')

  const addNumbers = () => { 
     setResult(firstNumber+secondNumber)
  }

  const substractNumbers = () => { 
    setResult(firstNumber-secondNumber)
 }

  return (
    <View style={styles.container}>

      <View style={{flex:1, flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
        <Text>Simple Calculator!!!</Text>
        <TextInput style={styles.input} keyboardType='number-pad' onChangeText={firstNumber=>setFirstNumber(parseInt(firstNumber))} value={firstNumber}/>
        <TextInput style={styles.input} keyboardType='number-pad' onChangeText={secondNumber=>setSecondNumber(parseInt(secondNumber))} value={secondNumber}/>
        <Text>{result}</Text>
      </View>

      <View style={{flex:1, flexDirection: 'row', alignItems:'center', justifyContent:'space-around', marginTop:'-50%'}}>
      <Button onPress={substractNumbers} title='-'/>
      <Button onPress={addNumbers} title='+'/>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  input:{
    width:200,
    borderColor:'gray',
    borderWidth:1
  }
});



