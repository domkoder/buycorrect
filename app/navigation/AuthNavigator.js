import {createNativeStackNavigator} from '@react-navigation/native-stack'

import WelcomeScreen from '../screens/WelcomeScreen'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'

const Stack = createNativeStackNavigator()

const AuthNavigator = (someProps) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen name="Login" options={{ headerShown: false }}>
      {(props) => <LoginScreen {...props} someProps={someProps} />}
    </Stack.Screen>
    {/* <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{headerShown: false}}
    /> */}
    <Stack.Screen name="Register" options={{ headerShown: false }}>
      {(props) => <RegisterScreen {...props} someProps={someProps} />}
    </Stack.Screen>
    {/* <Stack.Screen
      name="Register"
      component={RegisterScreen}
      options={{headerShown: false}}
    /> */}
  </Stack.Navigator>
)

export default AuthNavigator
