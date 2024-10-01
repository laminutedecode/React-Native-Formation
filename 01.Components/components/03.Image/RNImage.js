import {View, Image, StyleSheet} from 'react-native'

export default function RNImage() {


  const styles = StyleSheet.create({
    image: {
      width: 200,
      height: 200,
      resizeMode: 'repeat'
    }
  })




  return (
    <View style={styles.container}>
      <Image source={{uri: 'https://source.unsplash.com/random'}} style={styles.image} />
    </View>
  )
}
