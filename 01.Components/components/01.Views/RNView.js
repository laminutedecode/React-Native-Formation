import {View, StyleSheet} from 'react-native'

export default function RNView() {


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      gap: 5,
    },
    box1: {
      width: 50,
      height: 50,
      backgroundColor: 'red',
    },
    box2: {
      width: 50,
      height: 50,
      backgroundColor: 'green',
    },
    box3: {
      width: 50,
      height: 50,
      backgroundColor: 'blue',
    }
  })




  return (
    <View style={styles.container}>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
    </View>
  )
}
