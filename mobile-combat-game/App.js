import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LandingPage from './screens/landing-page';
import CombatLandingPage from './screens/combat-landing-page';

let Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='auto'/>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='landing-page' component={LandingPage}/>
          <Stack.Screen name='combat-landing-page' component={CombatLandingPage}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

