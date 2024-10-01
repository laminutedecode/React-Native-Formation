import {useState} from 'react'
import {View, Switch, StyleSheet, Text} from 'react-native'


export default function SwitchExemple(){

  const styles = StyleSheet.create({
    container : {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    text: {
      fontSize: 20,
      marginBottom: 20
    }

  })

  const [isEnabled, setIsEnabled] = useState(false)

  const toggleSwitch = ()=> setIsEnabled(previousState => !previousState)

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Toggle Swicth : {isEnabled ? 'ON' : 'OFF'}
      </Text>
      <Switch 
      trackColor={{false: "#767577", true: "#81b0ff"}}
      thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
      />
    </View>
  )


}