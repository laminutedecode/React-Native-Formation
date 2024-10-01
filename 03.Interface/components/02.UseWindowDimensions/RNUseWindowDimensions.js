import { View, Text, StyleSheet, useWindowDimensions} from "react-native";


export default function RNUseWindowDimensions(){

  const {width, height} = useWindowDimensions();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 18,
      marginBottom: 10,
    }
  })

  return (
    <View style={styles.container}>
        <Text style={styles.text}>Largeur de la fenêtre : {width}</Text>
        <Text style={styles.text}>Hauteur de la fenêtre : {height}</Text>

    </View>
  )




}