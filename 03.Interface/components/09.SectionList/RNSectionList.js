import {useState, useEffect} from 'react'
import {SectionList, Text, View} from 'react-native'

export default function MySectionList() {

  const [pokemonData, setPokemonData] = useState(null)

  useEffect(()=> {
    fetch('https://pokebuildapi.fr/api/v1/pokemon')
    .then(response => response.json())
    .then(data => {
      setPokemonData(data)
    }).catch(error => console.error('il y aeu une erreur', error))
  }, [])

  const renderItem = ({item})=> (
    <View style={{padding: 10, backgroundColor: 'lightblue', marginBottom: 10, borderRadius: 10}}>
        <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
        <Text>Type: {item.apiTypes.map(type => type.name).join(', ')}</Text>
    </View>
  )

  const renderSectionHeder = ({section})=> (
    <View style={{backgroundColor: 'lightgray', padding: 10, marginBottom: 12}}>
      <Text>{section.title}</Text>
    </View>
  )

  if(!pokemonData){
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Chargement...</Text>
      </View>
    )
  }

  const sections = [
    {
      title: 'Liste des pokemon',
      data: pokemonData
    }
  ]

  return (
    <SectionList 
      sections={sections}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeder}
      keyExtractor={item => item.id}
    />
  )






}