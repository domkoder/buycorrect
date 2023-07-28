import {NavigationContainer} from '@react-navigation/native'
import {Feather} from '@expo/vector-icons'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Products from './app/screens/Products'
import ProductDetails from './app/screens/ProductDetails'
import AddListingScreen from './app/screens/AddListingScreen'
import WelcomeScreen from './app/screens/WelcomeScreen'
import ViewImageScreen from './app/screens/ViewImageScreen'

import AuthNavigator from './app/navigation/AuthNavigator'
import MessageNavigator from './app/navigation/MessageNavigator'
import ProfileNavigator from './app/navigation/ProfileNavigator'
import colors from './app/config/colors'
import navigationTheme from './app/navigation/navigationTheme'

import LoginScreen from './app/screens/LoginScreen'
import {withAuthenticator, useAuthenticator} from '@aws-amplify/ui-react-native'
import {Amplify} from 'aws-amplify'
import awsExports from './src/aws-exports'
Amplify.configure(awsExports)

const Stack = createNativeStackNavigator()
const ProductNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Products" component={Products} />
    <Stack.Screen
      name="ProductDetails"
      component={ProductDetails}
      options={{
        headerShown: true,
        headerTransparent: true,
        headerTitle: '',
        // headerBackImage: () => (
        //   <Entypo name="chevron-thin-left" color={'#090A0A'} />
        // ),
        headerBackTitleVisible: false,
      }}
    />
  </Stack.Navigator>
)

const AddListingNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="AddListing" component={AddListingScreen} />
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
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: colors.primaryBase,
    }}
  >
    <Tab.Screen
      name="Home"
      component={ProductNavigator}
      options={{
        tabBarIcon: ({color, size}) => (
          <Feather name="home" size={size} color={color} />
        ),
      }}
    />

    <Tab.Screen
      name="Cart"
      component={Products}
      options={{
        tabBarIcon: ({color, size}) => (
          <Feather name="shopping-cart" size={size} color={color} />
        ),
      }}
    />

    <Tab.Screen
      name="Add"
      component={AddListingNavigator}
      options={{
        tabBarIcon: ({color, size}) => (
          <Feather name="plus-circle" size={size} color={color} />
        ),
      }}
    />

    <Tab.Screen
      name="Messages"
      component={MessageNavigator}
      options={{
        tabBarIcon: ({color, size}) => (
          <Feather name="message-square" size={size} color={color} />
        ),
      }}
    />

    <Tab.Screen
      name="Profile"
      component={ProfileNavigator}
      options={{
        tabBarIcon: ({color, size}) => (
          <Feather name="user" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
)

function App() {
  return (
    // <Products />
    <LoginScreen />
    // <NavigationContainer theme={navigationTheme}>
    //   {/* <AuthNavigator /> */}
    //   <TabNavigator />
    // </NavigationContainer>
  )
}

export default App
