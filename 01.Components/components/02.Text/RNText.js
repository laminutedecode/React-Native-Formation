import {View, Text} from 'react-native'

export default function RNText() {
  return (
    <>
    
    
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 20, color: 'blue'}}>Hello tous le monde</Text>
      </View>

      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 20,fontWeight: 'bold', marginBottom: 10}}>Titre principal</Text>
        <Text style={{fontSize: 18, marginBottom: 5}}>Sous titre 1 </Text>
        <Text style={{fontSize: 16, marginBottom: 5}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, labore! </Text>
        <Text style={{fontSize: 18, marginBottom: 5}}>Sous titre 2 </Text>
        <Text style={{fontSize: 16, marginBottom: 5}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, labore! </Text>
      </View>

      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 20}}
        numberOfLines={3}
        onPress={()=> alert('vous avez appuyé')}
        accessible={true}
        adjustsFontSizeToFit={true}
        allowFontScaling={true}
        > Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis perferendis, corporis ut velit eos minima? Aliquam inventore dolore culpa incidunt. </Text>
      </View>
    </>
  )
}
