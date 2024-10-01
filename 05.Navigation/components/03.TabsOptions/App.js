import { NavigationContainer } from '@react-navigation/native';
import Profil from './Screens/Profil';
import Home from './Screens/Home';
import {Ionicons} from '@expo/vector-icons'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'


const Tab = createBottomTabNavigator()




export default function App() {
    return (
      <NavigationContainer>
        <Tab.Navigator
  
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: 'red',
          tabBarActiveBackgroundColor: '#000',
          tabBarInactiveBackgroundColor: 'red',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {backgroundColor: 'lightgray'},
          labelStyle: {fontSize: 16},
          activeTintColor: 'blue',
        }}
        
        
        
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Profil" component={Profil} />
        </Tab.Navigator>
      </NavigationContainer>

      
    );
}
