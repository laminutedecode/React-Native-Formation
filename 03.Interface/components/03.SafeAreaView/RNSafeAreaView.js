import { View, Text, StyleSheet, SafeAreaView} from "react-native";


export default function RNSafeAreaView(){



  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    text: {
      fontSize: 18,
      marginBottom: 10,
    },
    innerContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  })

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.innerContainer}>
          <Text>Contenu de l'application</Text>
        </View>

    </SafeAreaView>
  )




}