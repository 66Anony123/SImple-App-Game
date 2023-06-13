
import { Text,StyleSheet, TextInput,View, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";

function StartGameScreen({changeScreen})
{

const [number,setNumber] = useState('');

const inputHandler = (inputssText)=>{

  setNumber(inputssText)
}
const  resetHandler=()=>
{
  setNumber('');
}

const confirmHandler =()=>{
  const num = parseInt(number)
  if(isNaN(num) || num<=0 || num >99)
{
  
Alert.alert(
  'Dookss',
  'boobs',
  [{text:'Okay', style:'destructive',onPress:resetHandler}]
  );
  return;
}

else{
changeScreen();
console.log("Valid numebr")
}}

    return(
        <View style= {styles.inputContainer}>
              <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      onChangeText = {inputHandler}
      value = {number}
      />
           
            <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmHandler} >Confirm</PrimaryButton>
        </View>
      </View>
            
        </View>
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 100,
      marginHorizontal: 24,
      padding: 16,
      backgroundColor: '#4e0329',
      borderRadius: 8,
      elevation: 4,
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 6,
      shadowOpacity: 0.25,
    },
    numberInput: {
      height: 50,
      width: 50,
      fontSize: 32,
      borderBottomColor: '#ddb52f',
      borderBottomWidth: 2,
      color: '#ddb52f',
      marginVertical: 8,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    buttonsContainer: {
      flexDirection: 'row',
    },
    buttonContainer: {
      flex: 1
    }
  });