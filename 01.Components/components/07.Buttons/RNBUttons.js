import {Button, View, Alert} from 'react-native'

export default function RNBUttons() {
  return (
    <View>
      <Button 
        title="Cliquer ici"
        color="#841584"
        onPress={() => Alert.alert('Vous avez cliqué')}
        accessibilityLabel='Lire plus sur la société'
        disabled
      
      />
    </View>
  )
}
