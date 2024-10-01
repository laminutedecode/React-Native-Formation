import {useState, useEffect} from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'
import axios from 'axios'

export default function PokemonCard({pokemonName}){


  const [pokemonData, setPokemonData] = useState(null)

  useEffect(()=> {

    const fetchData = async ()=> {
      try {
        const response = await axios.get(`https://pokebuildapi.fr/api/v1/pokemon/${pokemonName}`);
        setPokemonData(response.data)

      }catch(error){
        console.error('Erreur lors d ela recuperation ', error)
      }
    }

    fetchData()

  }, [pokemonName])


  if(!pokemonData){
    return (
      <View style={styles.container}>
        <Text>Chargement ....</Text>
      </View>
    )
  }


  return (
    <View style={styles.container}>
      <Image source={{uri: pokemonData.image}} style={styles.image} />
      <View style={styles.pokemonInfo}>
        <Text style={styles.name}>{pokemonData.name}</Text>
        <Text style={styles.types}>
          Types: {pokemonData.apiTypes.map(type => type.name).join(', ')}
        </Text>
        <Text style={styles.label}>Stats</Text>
        {Object.entries(pokemonData.stats).map(([statName, statValue]) => (
          <Text key={statName} style={styles.stats}>
            {statName} : {statValue}
          </Text>
        ))}
      </View>
    </View>
  )


}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginTop: 20,
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 5,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  pokemonInfo: {
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: 'midnightblue'
  },
  types: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center',
    color: 'crimson',
  },
  label : {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#555'
  },
  stats: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center'
  }
})