import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import RNcomposant from './components/RNcomposant';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <RNcomposant style={{backgroundColor: 'orange',marginBottom: 10}} />
      <RNcomposant style={{backgroundColor: 'crimson',}} /> 
    <Text style={styles.text}>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 1000,
    minWidth: 200,
    height: '100%',
    maxHeight: 200,
    minHeight: 100,
    paddingBottom: 20,
    // columnGap: 20,

    backgroundColor: '#fff',
    marginTop: 80,
    borderWidth: 6,
    borderColor: "#333",
    borderStyle: 'dashed',
    // borderStartWidth: 5,
    borderRadius: 10,
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  text: {
    fontSize: 30,
    color: 'crimson',
    fontStyle: 'italic',
    letterSpacing: 5,
    textAlign: 'justify',
    textAlignVertical: 'center'
  }
});
