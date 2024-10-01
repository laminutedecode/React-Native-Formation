import {View, Text, ImageBackground, StyleSheet} from 'react-native'

export default function RNImageBackground() {


  const styles = StyleSheet.create({
    imageBackground: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      alignItems: 'center',
    },
    overlay: {
      backgroundColor: 'rgba(0,0,0,.5)',
      padding: 20,
      borderRadius: 10,
    },
    text: {
      color: 'white',
      fontSize: 24
    }
  })



  return (
    <ImageBackground style={styles.imageBackground} source={{uri: 'https://source.unsplash.com/random'}}>
      <View style={styles.overlay}>
        <Text style={styles.text}>Contenu sur l'image d'arriere plan</Text>
      </View>
    </ImageBackground>
  )
}
