import { Pressable, Text, Alert } from "react-native"

export default function RNPressable() {

  const onPressHandler = ()=> {
    Alert.alert('Bouton pressé', 'Vous avez appuyé sur le bouton')
  }
  return (
    <Pressable onPress={onPressHandler}>
      <Text style={{padding: 10, backgroundColor: 'blue', color: 'white'}}>Appuiyez ici</Text>
    </Pressable>
  )
}
