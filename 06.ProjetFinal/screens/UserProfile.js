import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  Dimensions 
} from 'react-native';

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => {
        setUser(data.results[0]);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  return (
    <View style={styles.container}>
       <View style={styles.header}>
      <Text style={styles.title}>Votre profil</Text>
      </View>
      {user && (
        <View style={styles.userInfo}>
          <Image 
            source={{ uri: user.picture.large }} 
            style={styles.userImage} 
            resizeMode="cover" 
          />
          
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Nom:</Text>
            <Text>{`${user.name.first} ${user.name.last}`}</Text>
          </View>
        
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Email:</Text>
            <Text>{user.email}</Text>
          </View>
         
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Téléphone:</Text>
            <Text>{user.phone}</Text>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.label}>Ville:</Text>
            <Text>{user.location.city}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingVertical: 10,
    backgroundColor: 'midnightblue',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  userInfo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  userImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: (Dimensions.get('window').width - 40) / 2, // Pour un cercle
  },
  label: {
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
});

export default UserProfile;
