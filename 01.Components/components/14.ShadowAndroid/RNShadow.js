import { View, StyleSheet, Text } from "react-native"

export default function RNSHadowAndroid() {


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    box : {
      width: 200,
      height: 200,
      backgroundColor: 'white',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    }
  })




  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text>Hello</Text>
      </View>
    </View>
  )
}
