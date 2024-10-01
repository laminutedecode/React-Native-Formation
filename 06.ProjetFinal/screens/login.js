import { useState } from 'react';
import Logo from '../assets/Logo-02.png'
import { View, Text, TextInput, TouchableOpacity, StyleSheet , Image} from 'react-native';

const BankLogin = () => {
  const [accountNumber, setAccountNumber] = useState('');

  const handleNumberPress = (number) => {
    setAccountNumber(prevAccountNumber => prevAccountNumber + number);
    // Cette fonction prend en argument une fonction qui définit comment la nouvelle valeur de accountNumber doit être calculée à partir de sa valeur précédente
  };

  const handleClearPress = () => {
    setAccountNumber('');
  };

  const handleLoginPress = () => {
    // Logique de connexion à implémenter ici
    console.log('Connecter avec le numéro de compte :', accountNumber);
  };

  return (
    <View style={styles.container}>

      <View style={styles.header}>
      <Image style={styles.image} source={Logo} /> 
      <Text style={styles.title}>MyBank</Text>
      </View>

      <View style={styles.content}>
        
      <TextInput
        style={styles.input}
        placeholder="Numéro de Compte"
        keyboardType="numeric"
        value={accountNumber}
        onChangeText={setAccountNumber}
      />
      
{/* TouchableOpacity est un composant fourni par React Native qui est utilisé pour détecter et gérer les pressions sur des éléments de l'interface utilisateur, tels que des boutons, des images ou tout autre élément pouvant être cliqué. */}
      <View style={styles.buttonRow}>
        {[1, 2, 3].map(number => (
          <TouchableOpacity
            key={number}
            style={styles.numberButton}
            onPress={() => handleNumberPress(number.toString())}
          >
            <Text style={styles.buttonText}>{number}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.buttonRow}>
        {[4, 5, 6].map(number => (
          <TouchableOpacity
            key={number}
            style={styles.numberButton}
            onPress={() => handleNumberPress(number.toString())}
          >
            <Text style={styles.buttonText}>{number}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.buttonRow}>
        {[7, 8, 9].map(number => (
          <TouchableOpacity
            key={number}
            style={styles.numberButton}
            onPress={() => handleNumberPress(number.toString())}
          >
            <Text style={styles.buttonText}>{number}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.clearButton} onPress={handleClearPress}>
          <Text style={styles.buttonText}>Effacer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
          <Text style={styles.buttonText}>Se Connecter</Text>
        </TouchableOpacity>
      </View>

      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    paddingVertical: 10,
    backgroundColor: 'midnightblue',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: 'white',
    fontWeight: 'bold'
  },
  content: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  input: {
    width: 300,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  buttonRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  numberButton: {
    width: 60,
    height: 60,
    backgroundColor: 'midnightblue',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    marginVertical: 5,
    borderRadius: 5,
  },
  clearButton: {
    flex: 1,
    height: 60,
    backgroundColor: '#ff0000',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 5,
  },
  loginButton: {
    flex: 1,
    height: 60,
    backgroundColor: '#28a745',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 24,
    color: '#fff',
  },
});

export default BankLogin;
