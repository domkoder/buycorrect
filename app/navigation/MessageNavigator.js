import {createNativeStackNavigator} from '@react-navigation/native-stack'

import MessageListScreen from '../screens/MessageListScreen'

const Stack = createNativeStackNavigator()

const MessageNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Messages"
      component={MessageListScreen}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
)

export default MessageNavigator
