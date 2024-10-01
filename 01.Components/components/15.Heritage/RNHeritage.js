import { View, Text, StyleSheet } from "react-native"

export default function RNHeritage() {


  const styleParent = StyleSheet.create({
    container: {
      backgroundColor: 'lightblue',
      padding: 10,
      borderRadius: 5,
    }
  })


  const ParentComponent = ({children}) => {
    return (
      <View style={styleParent.container}>
        {children}
      </View>
    )
  }



  const styleChild = StyleSheet.create({
    text: {
      fontSize: 16,
      color: 'darkblue',
      fontWeight: 'bold'
    }
  })


  const ChildComponent = ()=> {
    return (
      <Text style={styleChild.text}>
        Text heritant du style du parent
      </Text>
    )
  }




  return (
      <ParentComponent>
        <ChildComponent />
      </ParentComponent>
  )
}
