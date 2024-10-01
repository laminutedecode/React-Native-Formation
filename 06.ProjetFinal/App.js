
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import Compte from './screens/Compte';
import BankLogin from './screens/login';
import Profil from './screens/UserProfile'


const Tab = createBottomTabNavigator();

function CustomTabBarIcon({ iconName, focused, size, color }) {
  if (iconName === 'money-check') {
    return <FontAwesome5 name={iconName} size={size} color={color} />;
  }else if(iconName === 'user'){
    return <FontAwesome5 name={iconName} size={size} color={color} />;
  }else {
  return <Ionicons name={iconName} size={size} color={color} />;
}}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Compte') {
              iconName = 'money-check';
            } else if (route.name === 'Profil') {
              iconName = 'user';
            }
            return <CustomTabBarIcon iconName={iconName} focused={focused} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={BankLogin} />
        <Tab.Screen name="Compte" component={Compte} options={{ tabBarBadge: 5 }} />
        <Tab.Screen name="Profil" component={Profil}  />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
