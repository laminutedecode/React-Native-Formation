import {View, ActivityIndicator} from 'react-native'

export default function RNActivityIndicator() {
  return (
    <View>
      <ActivityIndicator/>
      <ActivityIndicator size="small" />
      <ActivityIndicator size="large" />
      <ActivityIndicator size="large" color="crimson" />
      <ActivityIndicator size="large" color="#333" />
    </View>
  )
}
