import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {Pressable, Text} from 'react-native'
import HomeScreen from './Screens/Home'
import ProfilScreen from './Screens/Profil'
const Stack = createNativeStackNavigator();


export default function App(){



  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name='Home' component={HomeScreen} options={{title: 'Welcome'}}/>
        <Stack.Screen name='Profil' component={ProfilScreen}

        options={{
          title: 'Titre du screen',
          headerStyle: {
            backgroundColor: 'crimson'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          initialParams: {
            userId: '123',
          },
          headerRight: ()=> {
            return (
              <Pressable onPress={()=> alert('Tus as cliqué')}>
                <Text>Menu</Text>
              </Pressable>
            )
          },
          gestureEnabled: true,
          gastureDirection: 'horizontal',
          animationEnabled: true,
          headerShown: true,
        }}
        
        
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}