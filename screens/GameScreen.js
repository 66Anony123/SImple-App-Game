import {Text, View,StyleSheet} from 'react-native'


const GameScreen = () => {
  return (
    <View style= {styles.content}>
        <Text>Hi am freaking displayed ain't I</Text>
    </View>
  )
}

export default GameScreen


const styles = StyleSheet.create({

  content :{
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
  }
})