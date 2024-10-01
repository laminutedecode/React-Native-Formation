import { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const MyFormComponent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    console.log('Nom:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Formulaire de contact</Text>

      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 5 }}
        placeholder="Nom"
        value={name}
        onChangeText={text => setName(text)}
      />

      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 5 }}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        keyboardType="email-address"
      />

      <TextInput
        style={{ height: 100, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 5, textAlignVertical: 'top' }}
        placeholder="Message"
        value={message}
        onChangeText={text => setMessage(text)}
        multiline
      />

      <Button
        title="Soumettre"
        onPress={handleSubmit}
      />
    </View>
  );
};

export default MyFormComponent;


// value: Cette prop permet de définir la valeur du TextInput. C'est une chaîne de caractères.

// onChangeText: Cette prop est une fonction qui sera appelée chaque fois que le contenu du TextInput change. Elle reçoit le texte entré en paramètre.

// placeholder: Cette prop permet de définir un texte de rappel à afficher lorsqu'il n'y a pas de texte dans le TextInput.

// secureTextEntry: Cette prop est un booléen qui, lorsqu'il est défini sur true, masquera le texte saisi. C'est utile pour les champs de mot de passe.

// keyboardType: Cette prop permet de définir le type de clavier à afficher. Par exemple, vous pouvez définir keyboardType="numeric" pour afficher un clavier numérique.

// autoCapitalize: Cette prop permet de spécifier le comportement de la première lettre du texte entré. Elle peut prendre les valeurs 'none', 'sentences', 'words' et 'characters'.

// autoCorrect: Cette prop est un booléen qui spécifie si le correcteur automatique doit être activé ou désactivé pour ce champ de texte.

// multiline: Cette prop est un booléen qui spécifie si le TextInput devrait accepter plusieurs lignes de texte ou non.

// numberOfLines: Cette prop spécifie le nombre de lignes affichées si multiline est défini sur true.

// onSubmitEditing: Cette prop est une fonction qui sera appelée lorsque l'utilisateur appuie sur le bouton de retour sur le clavier.

// onBlur et onFocus: Ces props sont des fonctions qui seront appelées lorsque le TextInput perd ou gagne le focus, respectivement.