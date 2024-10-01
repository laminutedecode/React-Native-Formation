import {useState} from 'react'
import {View, TextInput, Button, StyleSheet} from 'react-native'


export default function RNLogin(){


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    input : {
      width: '100%',
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 20,
      paddingHorizontal: 10,
    }
  })

  const[login, setLogin] = useState('')
  const[password, setPassword] = useState('')


  const handleLogin = ()=> {
    console.log('Email', login);
    console.log('Password', password);
  }

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        placeholder='Email'
        onChangeText={text => setLogin(text)}
        value={login}
        keyboardType="email-adress"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput 
        style={styles.input}
        placeholder='Password'
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <Button title="Se connecter" onPress={handleLogin} />
    </View>
  )


}