import { View, StyleSheet, Text, Dimensions } from "react-native";

export default function RNDimensions({children, style}){

  const windowDimensions = Dimensions.get('window')

  const isSmallHeight = windowDimensions.height < 700;
  const isSmallWidth = windowDimensions.width < 500;

  const boxWidth = isSmallWidth ? '20%' : '50%';
  const boxHeight = isSmallHeight ? '20%' : '50%';

  const styles = StyleSheet.create({
    box: {
      backgroundColor: '#000',
      padding:20,
      width: boxWidth,
      height: boxHeight,
    },
    text: {
      textAlign: 'center',
      color: 'white'
    }
  });

  return (
    <View style={[styles.box, style]}>
      <Text style={styles.text}>{children}</Text>
    </View>
  )

}