import {View,Text, Pressable,StyleSheet} from 'react-native' 
function PrimaryButton(props){

    return(
        <View style={styles.buttonOuterContainer}>
        <Pressable 
        style={({pressed})=> pressed ? [styles.buttonInnerContainer,styles.pressed]: styles.buttonInnerContainer}
         android_ripple={{color:'white'}} 
         onPress={props.onPress}
         >
        
            <Text>
                {props.children}
            </Text>
        
        </Pressable>
        </View>
    )
}


export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
      borderRadius: 28,
      margin: 4,
      overflow: 'hidden',
    },
    buttonInnerContainer: {
      backgroundColor: '#dfd434',
      paddingVertical: 8,
      paddingHorizontal: 16,
      elevation: 2,
    },
    buttonText: {
      color: 'white',
      textAlign: 'center',
    },
    pressed: {
      opacity: 0.75,
    },
  });