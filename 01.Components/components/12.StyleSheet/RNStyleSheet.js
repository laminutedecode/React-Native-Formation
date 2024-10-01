import {View, Text, StyleSheet} from 'react-native'

export default function RNStyleSheet() {


const styles = StyleSheet.create({
  container : {
    backgroundColor: 'crimson',
    padding: 15,
    width: 350
  },
  text: {
    fontSize: 20,
    color: '#fff'
  }
})


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello</Text>
    </View>
  )
}
