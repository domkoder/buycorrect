import {StyleSheet, Text} from 'react-native'
import {useFonts, Inter_700Bold} from '@expo-google-fonts/inter'

const Heading = ({children, size = 'regular', style: customStyles = {}}) => {
  let [fontsLoaded] = useFonts({
    Inter_700Bold,
  })

  if (!fontsLoaded) {
    return null
  }

  return <Text style={[styles[size], customStyles]}>{children}</Text>
}

export default Heading

const styles = StyleSheet.create({
  text: {
    fontStyle: 'normal',
    fontFamily: 'Inter_700Bold',
    fontWeight: 700,
  },

  large: {
    fontSize: 48,
    lineHeight: 56,
  },

  regular: {
    fontSize: 32,
    lineHeight: 36,
  },

  small: {
    fontSize: 24,
    lineHeight: 32,
  },
})
