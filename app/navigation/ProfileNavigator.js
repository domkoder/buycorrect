import {createNativeStackNavigator} from '@react-navigation/native-stack'

import ProfileScreen from '../screens/ProfileScreen'
import ChangePasswordScreen from '../screens/ChangePasswordScreen'
import ChangePasswordNavigator from './ChangePasswordNavigator'

const Stack = createNativeStackNavigator()

const ProfileNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="ProfileScreen"
      component={ProfileScreen}
      options={{headerShown: false}}
    />

    <Stack.Screen
      name='ChangePasswordScreen'
      component={ChangePasswordScreen} 
      options={{
        headerTitle: '',
        headerTransparent: true,
      }} />
  </Stack.Navigator>
)

export default ProfileNavigator
