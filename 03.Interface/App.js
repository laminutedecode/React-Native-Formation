import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import BoxComponent from './components/RNcomposant';

export default function App() {

  const styles = StyleSheet.create({
    container: {
      flex: 1,

      padding: 23,
      backgroundColor: '#fff', 
      marginTop: 80,
    },
  });
  
  return (

      <>
        <StatusBar style="auto" />
        <View style={styles.container}>
        <BoxComponent />
      </View>
      </>
    

  );
}

