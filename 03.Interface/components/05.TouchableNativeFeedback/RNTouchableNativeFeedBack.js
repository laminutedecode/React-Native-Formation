import{ useState } from 'react';
import { View, Text, TouchableNativeFeedback, StyleSheet } from 'react-native';

export default function RNTouchableNative(){

  const [count, setCount] = useState(0);

  const handlePress = () => {
    setCount(count + 1);
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      backgroundColor: 'blue',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
    },
    countText: {
      marginTop: 20,
      fontSize: 20,
    },
  });

  return (
    <View style={styles.container}>
      <TouchableNativeFeedback onPress={handlePress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Appuyez ici</Text>
        </View>
      </TouchableNativeFeedback>
      <Text style={styles.countText}>Count: {count}</Text>
    </View>
  );
};
