import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import UserDetailsForm from './screens/UserDetailsForm';
import DisplayDetailsScreen from './screens/DisplayDetailsScreen';

// Create a stack navigator
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UserDetailsForm">
        <Stack.Screen
          name="UserDetailsForm"
          component={UserDetailsForm}
          options={{ title: 'User Form' }}
        />
        <Stack.Screen
          name="DisplayDetails"
          component={DisplayDetailsScreen}
          options={{ title: 'User Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
