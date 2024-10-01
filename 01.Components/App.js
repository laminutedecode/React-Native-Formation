import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import RNHeritage from './components/15.Heritage/RNHeritage';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <RNHeritage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
