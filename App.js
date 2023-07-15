import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { MaterialCommunityIcons, Feather, Ionicons, Entypo } from '@expo/vector-icons'
// import { Entypo } from '@expo/vector-icons';

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Products from './app/screens/Products';
import ProductDetails from './app/screens/ProductDetails';
import AuthNavigator from './app/navigation/AuthNavigator';
import AddListingScreen from './app/screens/AddListingScreen';

const Stack = createNativeStackNavigator()
const ProductNavigator = () => (
  <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
    <Stack.Screen 
      name='Products' 
      component={Products} />
    <Stack.Screen
      name='ProductDetails'
      component={ProductDetails} 
      options={{ 
        headerShown: true, 
        headerTransparent: true, 
        headerTitle: '', 
        headerBackImage: () => <Entypo name='chevron-thin-left' color={"#090A0A"} />, headerBackTitleVisible: false,}} />
  </Stack.Navigator>
)

const AddListingNavigator = () => (
  <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
    <Stack.Screen 
      name='AddListing' 
      component={AddListingScreen} />
    {/* <Stack.Screen
      name='ProductDetails'
      component={ProductDetails} 
      options={{ 
        headerShown: true, 
        headerTransparent: true, 
        headerTitle: '', 
        headerBackImage: () => <Entypo name='chevron-thin-left' color={"#090A0A"} />, headerBackTitleVisible: false,}} /> */}
  </Stack.Navigator>
)

const Tab = createBottomTabNavigator()
const TabNavigator = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen 
      name="Home" 
      component={ProductNavigator}
      options={{
        tabBarIcon: ({ color, size }) => ( <Feather name="home" size={size} color={color} /> )
      }} />

    <Tab.Screen name="Cart" component={Products} options={{ tabBarIcon: ({ color, size}) => (
      <Feather name='shopping-cart' size={size} color={color} />
    )}}  />

    <Tab.Screen name="Add" component={AddListingNavigator} options={{ tabBarIcon: ({ color, size}) => (
      <Ionicons name="ios-add-circle-outline" size={size} color={color} />
    )}}  />

    <Tab.Screen name="Messages" component={Products} options={{ tabBarIcon: ({ color, size}) => (
      <Feather name='message-square' size={size} color={color} />
    )}}  />

    <Tab.Screen name="Profile" component={Products} options={{ tabBarIcon: ({ color, size}) => (
      <Feather name='user' size={size} color={color} />
    )}}  />

  </Tab.Navigator>
)

export default function App() {
  return (
    <NavigationContainer>
      {/* <AuthNavigator /> */}
      <TabNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
