import {useState} from 'react'
import {View, Text, Button, TextInput} from 'react-native'


export default function PokemonSearch () {

  const [searchQuery, setSearchQuery] = useState('');
  const [pokemonData, setPokemonData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = ()=> {
    fetch(`https://pokebuildapi.fr/api/v1/pokemon/${searchQuery}`)
    .then(response => {
      if(!response.ok){
        throw new Error('Aucun pokemon trouvé')
      }
      return response.json()
    })
    .then(data => {
      setPokemonData(data)
      setError(null)
    })
    .catch(error => {
      setPokemonData(null)
      setError(error.message)
    })
  }


  return (

    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TextInput
      style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 5}}
      value={searchQuery}
      placeholder='Rechercher un pokemon' 
      onChangeText={text => setSearchQuery(text)}
      
      />
      <Button title="Rechercher" onPress={handleSearch} />

      {error && <Text style={{color: 'red', marginTop: 10}}>{error}</Text>}
      {pokemonData && (
        <View style={{marginTop: 20}}>
          <Text>Nom: {pokemonData.name}</Text>
          <Text>Type: {pokemonData.apiTypes.map(type => type.name).join(', ')}</Text>
          <Text>Info: Autres infos</Text>
          </View>
      )
      }
    </View>
  )
}