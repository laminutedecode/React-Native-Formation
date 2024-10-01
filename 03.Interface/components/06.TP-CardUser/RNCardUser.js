import {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native'

export default function RNCardUser(){


  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 6,
    },
    image: {
      width: 150,
      height: 150,
      borderRadius: 75,
      marginBottom: 20,
    },
    userInfo: {
      alignItems: 'center',
    },
    name: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: 'center',
    },
    email: {
      fontSize: 16,
      color: '#555',
      marginBottom: 5,
      textAlign: 'center',
    },
    city: {
      fontSize: 16,
      color: '#555',
      textAlign: 'center',
    }
  })






  const [userData, setUserData] = useState(false);


  useEffect(()=> {

      fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => {
        setUserData(data.results[0])
      }).catch(error => console.error('il y a eu une erreur', error))

  }, []);

  if(!userData){
    return (
      <View style={styles.container}>
        <Text>Chargement...</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Image source={{uri: userData.picture.large}} style={styles.image} />
      <View style={styles.userInfo}>
        <Text style={styles.name}>{`${userData.name.first}`} | {`${userData.name.last}`}  </Text>
        <Text style={styles.email}>{`${userData.email}`} </Text>
        <Text style={styles.city}>{`${userData.location.city}`} | {`${userData.location.country}`}  </Text>
      </View>
    </View>
  )


}