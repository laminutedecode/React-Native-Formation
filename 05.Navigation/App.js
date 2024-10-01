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

        screenOptions={({route})=> ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if(route.name === "Home"){
              iconName = focused ? 'home' : 'home-outline'
            }else if(route.name === "Profil"){
              iconName = focused ? 'person' : 'person-outline'

            }
            return <Ionicons name={iconName} size={size} />
          },
        })}
        
        
        
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Profil" component={Profil} options={{tabBarBadge: 5}} />
        </Tab.Navigator>
      </NavigationContainer>

      
    );
}
