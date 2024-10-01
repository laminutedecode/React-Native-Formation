import { View, StyleSheet, Text } from "react-native"

export default function RNcomposant({children, style}) {


  const styles = StyleSheet.create({
    box: {
      width: 50,
      height: 50,
      backgroundColor: '000',
      padding: 20,
    },
    text: {
      textAlign: 'center',
      color: 'white',
    }
  })



  return (
    <View style={[styles.box, style]}>
      <Text style={styles.text}>{children}</Text>
    </View>
  )
}
