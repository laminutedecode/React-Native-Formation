import {View, Text}from 'react-native'

export default function RNCustomStyle() {

  const style = {
    container: {
      backgroundColor: 'crimson',
      padding: 10,
    },
    text : {
      color: 'white',
      fontSize: 20,
    }
  }

  const CustomComponent = ({backgroundColor, textColor, fontSize})=> (
    <View style={{backgroundColor, padding: 10}}>
      <Text style={{color: textColor, fontSize}}>Text</Text>
    </View>
  )


  return (
    <>
    
    <View style={{backgroundColor: 'blue', padding : 20}}>
      <Text style={{color: 'white', fontSize: 20}}>Hello</Text>
    </View>
    <View style={style.container}>
      <Text style={style.text}>Hello</Text>
    </View>

    <CustomComponent backgroundColor='violet' textColor='white' fontSize={20} />
    
    </>
  )
}
