import {View, Button, Alert} from 'react-native'

export default function RNAlert() {


  const showAlert = ()=> {
    Alert.alert(
      "Titre de l'alerte",
      "Message de l'alerte",
      [
        {
          text: 'Annuler',
          onPress: ()=> console.log(('Annuler')),
          style: 'cancel',
        },
        {
          text: 'Ok',
          onPress: ()=> console.log(('Ok')),
        },
      ],
      {cancelable: false}
    )
  }



  return (
   <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Button title="Cliquer ici" onPress={showAlert} />
   </View>
  )
}
