import {View, Text, StyleSheet} from 'react-native'


export default function Profil(){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SCREEN PROFIL</Text>
      <Text>
        Contenu du profil 
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  }
})