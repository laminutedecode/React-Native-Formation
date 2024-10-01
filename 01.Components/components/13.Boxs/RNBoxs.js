import { View, Text, StyleSheet } from "react-native"

export default function RNBoxs() {



  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    box: {
      backgroundColor: 'lightblue',
      padding: 10,
      borderRadius: 5,
      borderColor: "#000",
      borderWidth: 2,
      borderStyle: "solid"
    }
  })

  const Box = ({children, style}) => {
    return (
      <View style={[styles.box, style]}>
        {children}
      </View>
    )
  }



  return (
    <Box>
      <Text>
        Hello
      </Text>
    </Box>
  )
}
