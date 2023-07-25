import {createNativeStackNavigator} from '@react-navigation/native-stack'

import ChangePasswordScreen from '../screens/ChangePasswordScreen'

const Stack = createNativeStackNavigator()

const ChangePasswordNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Change Password"
      component={ChangePasswordScreen}
      options={{}}
    />
  </Stack.Navigator>
)

export default ChangePasswordNavigator
