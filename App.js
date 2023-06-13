import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import InputNumber from './components/InputNumber';
import StartGameScreen from './screens/StartGameScreen';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';

export default function App() {

const [start,setStart]= useState(false)

function toggleScreen ()
{
  setStart(!start)
}
  return (
    
     <LinearGradient
     colors={['#a52d1d', '#281575']}
     style={styles.mainScreen}
     >
     
    
    {!start ? <StartGameScreen changeScreen={toggleScreen}/>: <GameScreen/>}
      <ImageBackground 
      source = {require('./assets/dice.jpg')}
      resizeMode='cover'
      style={styles.mainScreen}
      imageStyle ={styles.backgroundImage} //Additional Property of ImageBackground COmponent used for styling 
      /> 
      
      </LinearGradient>  
    
    
  );
}

const styles = StyleSheet.create({
  
  mainScreen: {
    flex: 1, //here flex 1 is used cause it will help to apply the styles in whole screen, hadn't it been used it would have only styled  
    // the area needed like it only styles the area covered by <StartGameScreen/>
  },
  backgroundImage: {
    opacity: 0.15
  } 
});
